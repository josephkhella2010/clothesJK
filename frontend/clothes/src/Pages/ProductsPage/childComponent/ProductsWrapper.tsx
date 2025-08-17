import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../Store/store";
import { useEffect } from "react";
import { fetchProducts } from "../../../reducerSlices/ProductSlice";
import LoadingPage from "../../LoadingPage/LoadingPage";
import ProductItem from "./ProductItem";

export default function ProductsWrapper() {
  const dispatch = useDispatch<AppDispatch>();

  const { products, isLoading } = useSelector(
    (state: RootState) => state.productData
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(products);
  console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <div>
          <ProductItem products={products} />
        </div>
      )}
    </>
  );
}
