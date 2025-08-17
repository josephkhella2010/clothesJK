import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchProducts,
  setIsLoading,
  setProducts,
} from "../reducerSlices/ProductSlice";
import type { ProductType } from "../helps/InterfacesType";

const fetchProductApi = async (): Promise<ProductType[]> => {
  const response = await axios.get("http://localhost:5200/api/products");
  const { products } = response.data;
  return products;
};
function* fetchProductSaga() {
  try {
    yield put(setIsLoading(true));
    const products: ProductType[] = yield call(fetchProductApi);
    yield put(setProducts(products));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setIsLoading(false));
  }
}

export function* watchProductSaga() {
  yield takeLatest(fetchProducts.type, fetchProductSaga);
}
