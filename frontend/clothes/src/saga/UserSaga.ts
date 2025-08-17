import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchUser,
  fetchUsers,
  setUser,
  setUsers,
} from "../reducerSlices/UserSlice";
import type { UserType } from "../helps/InterfacesType";
import type { PayloadAction } from "@reduxjs/toolkit";

const fetchUsersApi = async () => {
  const response = await axios.get("http://localhost:5200/api/users");
  const { users } = response.data;
  return users;
};
const postUsersApi = async (userData: UserType): Promise<UserType> => {
  const response = await axios.post<UserType>(
    "http://localhost:5200/api/addUser", // ✅ correct endpoint
    userData // ✅ this is the request body
  );
  return response.data;
};

function* PostUserSaga(action: PayloadAction<UserType>) {
  try {
    const user: UserType = yield call(postUsersApi, action.payload); // ✅ passing body
    yield put(setUser(user));
  } catch (error) {
    console.error(error);
  }
}

function* FetchUserSaga() {
  try {
    const users: UserType[] = yield call(fetchUsersApi);
    yield put(setUsers(users));
  } catch (error) {
    console.log(error);
  }
}
export function* watchPostUserSaga() {
  yield takeLatest(fetchUser.type, PostUserSaga);
}
export function* watchFetchUserSaga() {
  yield takeLatest(fetchUsers.type, FetchUserSaga);
}
