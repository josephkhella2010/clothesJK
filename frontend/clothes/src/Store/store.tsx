import { configureStore } from "@reduxjs/toolkit";
import ProductSliceReducer from "../reducerSlices/ProductSlice";
import UserSliceReducer from "../reducerSlices/UserSlice";
import LoginUserSliceReducer from "../reducerSlices/LoginUserSlice";
import CartItemSliceReducer from "../reducerSlices/CartItemSlice";
import { sagaRoot } from "../saga/sagaRoot";
import createSagaMiddleware from "redux-saga";

// Create Store
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    productData: ProductSliceReducer,
    userData: UserSliceReducer,
    loginUserData: LoginUserSliceReducer,
    cartItemData: CartItemSliceReducer,
  },
  middleware: (getDefault) =>
    getDefault({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(sagaRoot);

// Run Saga
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
