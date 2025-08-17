import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductState, ProductType } from "../helps/InterfacesType";
const initialState: ProductState = {
  products: [],
  isLoading: false,
};
const ProductSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    fetchProducts: () => {},
  },
});
export const { setProducts, setIsLoading, fetchProducts } =
  ProductSlice.actions;
export default ProductSlice.reducer;
