import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  setPostLoginSaga,
  setSingleUser,
  setToken,
  setUserStorage,
} from "../reducerSlices/LoginUserSlice";
import type { SingleUserType } from "../helps/InterfacesType";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SagaIterator } from "redux-saga";
interface LoginResponse {
  user: SingleUserType;
  token: string;
}

const postLoginUserApi = async (
  data: SingleUserType
): Promise<LoginResponse> => {
  const response = await axios.post(
    "http://localhost:5200/api/loginUser",
    data
  );
  const responseData = response.data;
  return responseData;
};

function* postLoginUser(action: PayloadAction<SingleUserType>): SagaIterator {
  try {
    const { user, token }: LoginResponse = yield call(
      postLoginUserApi,
      action.payload
    );
    yield put(setSingleUser(user));
    yield put(setToken(token));
    yield put(setUserStorage(user)); // <-- update Redux right away

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token); // ✅ remove JSON.stringify
  } catch (error) {
    console.log(error);
  }
}

export function* watchLoginUser() {
  yield takeLatest(setPostLoginSaga.type, postLoginUser);
}
