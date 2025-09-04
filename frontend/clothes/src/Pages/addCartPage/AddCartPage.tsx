import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../reducerSlices/CartItemSlice";
import type { RootState } from "../../Store/store";
import { toast } from "react-toastify";

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
  /*  */
  async function handleDelete(id: string | undefined | null | number) {
    console.log(id);
    console.log(token);

    const UserId = singleUser?._id;
    try {
      await axios.delete(
        `http://localhost:5200/api/${UserId}/deleteCartItem/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchAddCart();
      toast.success("Item deleted successfully");
    } catch (error) {
      console.log(error);
    }
  }

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
            <button onClick={() => handleDelete(item?._id)}> Delete</button>
          </ul>
        );
      })}
    </div>
  );
}
