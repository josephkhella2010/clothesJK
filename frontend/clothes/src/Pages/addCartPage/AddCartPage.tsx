import axios from "axios";
import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../reducerSlices/CartItemSlice";
import type { RootState } from "../../Store/store";

export default function AddCartPage() {
  const token = localStorage.getItem("token");
  const singleUser = JSON.parse(localStorage.getItem("user") || "");
  const { ItemProduct } = useSelector((state: RootState) => state.cartItemData);
  console.log(ItemProduct);
  const dispatch = useDispatch();

  /*  */
  async function fetchAddCart() {
    const UserId = singleUser?._id;

    try {
      const response = await axios.get(
        `http://localhost:5200/api/${UserId}/cartItem`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setCartItems(response.data));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAddCart();
  }, []);
  return (
    <div>
      <h2> hellow {singleUser?.username}</h2>
      {ItemProduct.map((item, ind) => {
        console.log(item.ItemProduct);
        return (
          <ul
            key={ind}
            style={{ border: "2px solid black", marginBottom: "20px" }}
          >
            <li> Name: {item?.ItemProduct.name}</li>
            <li>Description: {item?.ItemProduct.description}</li>
            <li>Price: {item?.ItemProduct.price} $</li>
            <li>Id: {item._id}</li>
            <li>
              Quantity:
              {item.quantity}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
