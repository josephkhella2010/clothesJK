import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../Store/store";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../../reducerSlices/ProductSlice";
import LoadingPage from "../../LoadingPage/LoadingPage";
import ProductItem from "./ProductItem";
import styles from "../productsPage.module.css";
import PaginationSection from "./PaginationSection";
export default function ProductsWrapper() {
  const dispatch = useDispatch<AppDispatch>();

  const { products, isLoading } = useSelector(
    (state: RootState) => state.productData
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  /*  */
  const [currentPage, setCurrentPage] = useState<number>(1);
  const visibleCard = 4;
  const totalPages = Math.ceil(products.length / visibleCard);
  const startProductIndex = (currentPage - 1) * visibleCard;
  const EndProductIndex = startProductIndex + visibleCard;
  const slicedProduct = products.slice(startProductIndex, EndProductIndex);
  const showPagesNumber = 2;
  const [startPage, setStartPage] = useState(1);
  const getVisiblePages = () => {
    const endPage = Math.min(totalPages, startPage + showPagesNumber - 1);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const visiblePages = getVisiblePages();

  const changePage = (page: number) => {
    setCurrentPage(page);

    if (page === visiblePages[visiblePages.length - 1] && page < totalPages) {
      setStartPage((prev) =>
        Math.min(prev + 1, totalPages - showPagesNumber + 1)
      );
    }

    if (page === visiblePages[0] && page > 1) {
      setStartPage((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    } else {
      // if already at last page, go back to first
      changePage(1);
      setStartPage(1); // reset window to start
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    } else {
      // if already at first page, go to last
      setStartPage(Math.max(totalPages - showPagesNumber + 1, 1));
      changePage(totalPages);
    }
  };

  /*  */
  return (
    <div className={styles.productMainContainer}>
      <h1>Products</h1>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <ProductItem products={products} slicedProduct={slicedProduct} />
      )}
      <PaginationSection
        products={products}
        visiblePages={visiblePages}
        changePage={changePage}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        currentPage={currentPage}
      />
    </div>
  );
}
