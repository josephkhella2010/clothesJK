import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import type { RootState } from "../../Store/store";
import { fetchProducts } from "../../reducerSlices/ProductSlice";
import styles from "./singleProduct.module.css";
import axios from "axios";
import { setCartItem } from "../../reducerSlices/CartItemSlice";
import { ImgsArr } from "../../helps/ImgsArr";
export default function SingleProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { products } = useSelector((state: RootState) => state.productData);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const [quantityInput, setQuantityInput] = useState(1);
  const singleProduct = products.find((item) => item._id === id);
  const navigate = useNavigate();
  /*  */
  const token = localStorage.getItem("token") || null;
  const singleUserStr = localStorage.getItem("user");
  const singleUser = singleUserStr ? JSON.parse(singleUserStr) : null;
  console.log(singleUser);
  console.log(singleProduct);
  console.log(token);
  async function handleAddCart() {
    if (!token || !singleUser?._id) {
      console.error("Missing token or user ID");
      return;
    }

    const itemCart = {
      ItemProduct: singleProduct?._id,
      quantity: quantityInput,
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
      navigate("/addCart");
      toast.success("item added sucessfully");
    } catch (error: any) {
      console.error(error.response?.data || error.message);
    }
  }
  console.log(token);

  /*  */
  function handleQuantity(action: string) {
    let newQuantity = quantityInput;
    if (action === "plus") {
      newQuantity = newQuantity + 1;
    }
    if (action === "minus" && newQuantity > 1) {
      newQuantity = newQuantity - 1;
    }
    setQuantityInput(newQuantity);
  }
  return (
    <div className={styles.SingleProductWrapper}>
      <ToastContainer />
      <h1> Product Details</h1>
      <div className={styles.ProductDetailsMainContainer}>
        <div className={styles.ProductDetailsImgContainer}>
          <img src={ImgsArr["AboutUsPageActivityThree"]} alt="" />
        </div>
        {singleProduct && (
          <div className={styles.ProductDetailsContainer}>
            <li>
              <span>Name:</span> {singleProduct.name}
            </li>
            <li>
              <span>Description:</span> {singleProduct.description}
            </li>
            <li>
              <span>Price:</span> {singleProduct.price} $
            </li>
            <div className={styles.quantityContainer}>
              <button onClick={() => handleQuantity("plus")}>+</button>
              <span>{quantityInput}</span>
              <button onClick={() => handleQuantity("minus")}>-</button>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={handleAddCart}> add to cart</button>
            </div>
          </div>
        )}
        {/*       <Trainig singleProduct={singleProduct} />
         */}{" "}
      </div>
    </div>
  );
}
