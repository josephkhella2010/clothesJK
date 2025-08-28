import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import type { RootState } from "../../Store/store";
import { fetchProducts } from "../../reducerSlices/ProductSlice";
import styles from "./singleProduct.module.css";
import axios from "axios";
import { setCartItem } from "../../reducerSlices/CartItemSlice";
import Trainig from "./Trainig";
export default function SingleProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { products } = useSelector((state: RootState) => state.productData);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const singleProduct = products.find((item) => item._id === id);
  /*  */
  const token = localStorage.getItem("token");
  const singleUser = JSON.parse(localStorage.getItem("user") || "");

  async function handleAddCart() {
    if (!token || !singleUser?._id) {
      console.error("Missing token or user ID");
      return;
    }

    const itemCart = {
      ItemProduct: singleProduct?._id,
      quantity: 2,
    };

    try {
      const response = await axios.post(
        `http://localhost:5200/api/${singleUser._id}/addItem`,
        itemCart,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(setCartItem(response.data));
      console.log(response.data);
    } catch (error: any) {
      console.error(error.response?.data || error.message);
    }
  }
  console.log(token);
  console.log(`http://localhost:5200/api/${singleUser._id}/addItem`);

  /*  */
  return (
    <div className={styles.SingleProductWrapper}>
      <ToastContainer />

      <h1> single Page</h1>
      {singleProduct && (
        <div>
          <li>{singleProduct._id}</li>
          <li>Name: {singleProduct.name}</li>
          <li>Description: {singleProduct.description}</li>
          <li>Price: {singleProduct.price} $</li>
          <button onClick={handleAddCart}> add to cart</button>
        </div>
      )}
      <Trainig singleProduct={singleProduct} />
    </div>
  );
}
