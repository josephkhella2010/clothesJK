import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../reducerSlices/CartItemSlice";
import type { RootState } from "../../Store/store";
import { toast } from "react-toastify";
import styles from "./addCart.module.css";

export default function AddCartPage() {
  const token = localStorage.getItem("token");
  const singleUser = JSON.parse(localStorage.getItem("user") || "");
  const { ItemProduct } = useSelector((state: RootState) => state.cartItemData);
  //console.log(ItemProduct);
  const dispatch = useDispatch();
  const [quantityInput, setQuantityInput] = useState<number[]>([]);

  useEffect(() => {
    if (ItemProduct?.length) {
      // Fill quantityInput with the actual item quantities
      setQuantityInput(ItemProduct.map((item) => item.quantity ?? 1));
    }
  }, [ItemProduct]);

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
  console.log(singleUser, token);
  /*  */

  async function handleChangeQuantity(action: string, ind: number) {
    const newInput = [...quantityInput];

    if (action === "plus") {
      newInput[ind] = (newInput[ind] ?? 1) + 1;
    } else if (action === "minus" && (newInput[ind] ?? 1) > 1) {
      newInput[ind] = (newInput[ind] ?? 1) - 1;
    }

    // 1️⃣ update local state immediately for UI
    setQuantityInput(newInput);

    try {
      const UserId = singleUser?._id;
      const ItemId = ItemProduct[ind]?._id;
      const updatedQuantity = newInput[ind];

      // 2️⃣ send updated quantity to backend
      await axios.put(
        `http://localhost:5200/api/${UserId}/chanQuantity/${ItemId}`,
        { quantity: updatedQuantity },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // 3️⃣ optionally refresh cart in Redux if you want to sync
      await fetchAddCart();
      // optional: you can skip this to avoid overwriting local state
    } catch (error) {
      console.log(error);
    }
  }
  const totalPrice = ItemProduct.reduce(
    (acc, item) => acc + item.ItemProduct.price * item.quantity,
    0
  );

  /*  */

  return (
    <div className={styles.addCartContainer}>
      <h2> hellow {singleUser?.username}</h2>
      <div className={styles.CartItemsContainer}>
        {ItemProduct.map((item, ind) => {
          //console.log(item.ItemProduct);
          return (
            <ul key={ind} className={styles.CartItemsSection}>
              <li> Name: {item?.ItemProduct.name}</li>
              <li>Description: {item?.ItemProduct.description}</li>
              <li>Price: {item?.ItemProduct.price} $</li>
              <li>Id: {item._id}</li>
              <div className={styles.quantityContainer}>
                <p> Quantity: </p>
                <div className={styles.quantityBtnContainer}>
                  <button onClick={() => handleChangeQuantity("minus", ind)}>
                    -
                  </button>
                  <p>{quantityInput[ind]}</p>
                  <button onClick={() => handleChangeQuantity("plus", ind)}>
                    +
                  </button>
                </div>
              </div>
              <p>
                {" "}
                Price for Items: {item?.ItemProduct.price *
                  quantityInput[ind]}{" "}
                $
              </p>
              <div className={styles.buttonContainer}>
                <button onClick={() => handleDelete(item?._id)}> Delete</button>
              </div>
            </ul>
          );
        })}
      </div>
      <h2>Total Cost: {totalPrice} $</h2>
    </div>
  );
}
