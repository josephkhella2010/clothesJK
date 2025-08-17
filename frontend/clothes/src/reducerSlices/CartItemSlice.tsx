import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartProductType {
  imgs: string[];
  name: string;
  description: string;
  price: number;
}
interface ItemCartType {
  ItemProduct: CartProductType;
  quantity: number;
  _id: string | null;
}
interface initialStateType {
  ItemProduct: ItemCartType[];
}
const initialState: initialStateType = {
  ItemProduct: [
    {
      ItemProduct: { imgs: [], name: "", description: "", price: 0 },
      quantity: 1,
      _id: null,
    },
  ],
};

const CartItemSlice = createSlice({
  name: "CartItemSlice",
  initialState,
  reducers: {
    setCartItem: (state, action: PayloadAction<ItemCartType>) => {
      state.ItemProduct.push(action.payload);
    },

    setCartItems: (state, action: PayloadAction<ItemCartType[]>) => {
      state.ItemProduct = action.payload;
    },
  },
});

export const { setCartItem, setCartItems } = CartItemSlice.actions;
export default CartItemSlice.reducer;
