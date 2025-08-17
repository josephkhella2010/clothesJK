import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SingleUserType } from "../helps/InterfacesType";
const userFromStorage = localStorage.getItem("user");
const tokenFromStorage = localStorage.getItem("token");

interface initType {
  token: string | null;
  userStorage: SingleUserType | null;
  singleUser: SingleUserType | null;
}

const initialState: initType = {
  token: tokenFromStorage || null, // ✅ no JSON.parse
  userStorage: userFromStorage ? JSON.parse(userFromStorage) : null, // user is stored as JSON
  singleUser: null,
};
const LoginUserSlice = createSlice({
  name: "LoginUserSlice",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      if (action.payload) {
        state.token = action.payload;
        localStorage.setItem("token", action.payload); // store raw string
      }
    },
    setUserStorage: (state, action: PayloadAction<SingleUserType | null>) => {
      state.userStorage = action.payload;
      if (action.payload) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
    setSingleUser: (state, action: PayloadAction<SingleUserType>) => {
      state.singleUser = action.payload;
    },
    setLogOUt: (state) => {
      state.token = null;
      state.userStorage = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    setPostLoginSaga: (state, action: PayloadAction<SingleUserType>) => {
      state.singleUser = action.payload;
    },
  },
});
export const {
  setToken,
  setUserStorage,
  setSingleUser,
  setPostLoginSaga,
  setLogOUt,
} = LoginUserSlice.actions;

export default LoginUserSlice.reducer;
