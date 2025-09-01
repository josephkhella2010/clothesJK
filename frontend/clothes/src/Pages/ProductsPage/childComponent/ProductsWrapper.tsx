/* import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../Store/store";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../../reducerSlices/ProductSlice";
import LoadingPage from "../../LoadingPage/LoadingPage";
import ProductItem from "./ProductItem";
import styles from "../productsPage.module.css";
import PaginationSection from "./PaginationSection";
import SearchSection from "./SearchSection";
import type {
  filtereNamType,
  ProductType,
} from "../../../helps/InterfacesType";
export default function ProductsWrapper() {
  const dispatch = useDispatch<AppDispatch>();

  const { products, isLoading } = useSelector(
    (state: RootState) => state.productData
  );
  const [filteredProduct, setFilteredProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    if (products.length > 0 && filteredProduct.length === 0) {
      setFilteredProduct(products);
    }
  }, [products]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const visibleCard = 4;
  const totalPages = Math.ceil(products.length / visibleCard);
  const startProductIndex = (currentPage - 1) * visibleCard;
  const EndProductIndex = startProductIndex + visibleCard;
  const SlicedFilteredProduct = filteredProduct.slice(
    startProductIndex,
    EndProductIndex
  );
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
  const FilterByPrice: filtereNamType[] = [
    { name: "Cheaper" },
    { name: "Expensive" },
  ];
  const [searchInput, setSearchInput] = useState<string>("");
  const [dropDownPrice, setDropDownPrice] = useState<string>("Cheaper");
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  
  function handleDropDown(dropDownItem: string) {
    setDropDownPrice(dropDownItem);
    handleFilter(searchInput, dropDownItem);
  }
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const newVal = e.target.value;
    setSearchInput(newVal);
    handleFilter(newVal, dropDownPrice);
  }
  
  function handleFilter(input: string, dropInput: string) {
    let UpdateFilteredProduct = [...products];
    if (input) {
      UpdateFilteredProduct = UpdateFilteredProduct.filter((product) => {
        return product.name.toLowerCase().includes(input.toLowerCase());
      });
    }
    if (dropInput === "Expensive") {
      UpdateFilteredProduct.sort((a, b) => b.price - a.price);
    }
    if (dropInput === "Cheaper") {
      UpdateFilteredProduct.sort((a, b) => a.price - b.price);
    }
    setFilteredProduct(UpdateFilteredProduct);
  }

  console.log(filteredProduct);
  
  return (
    <div
      className={styles.productMainContainer}
      onClick={() => {
        setShowDropDown(false);
      }}
    >
      <h1>Products</h1>
      <SearchSection
        FilterByPrice={FilterByPrice}
        dropDownPrice={dropDownPrice}
        handleDropDown={handleDropDown}
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <ProductItem
          products={products}
          SlicedFilteredProduct={SlicedFilteredProduct}
        />
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
 */

/*  */

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../Store/store";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../../reducerSlices/ProductSlice";
import LoadingPage from "../../LoadingPage/LoadingPage";
import ProductItem from "./ProductItem";
import styles from "../productsPage.module.css";
import PaginationSection from "./PaginationSection";
import SearchSection from "./SearchSection";
import type {
  filtereNamType,
  ProductType,
} from "../../../helps/InterfacesType";

export default function ProductsWrapper() {
  const dispatch = useDispatch<AppDispatch>();

  const { products, isLoading } = useSelector(
    (state: RootState) => state.productData
  );

  const [filteredProduct, setFilteredProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // initialize filteredProduct only once when products arrive
  useEffect(() => {
    if (products.length > 0 && filteredProduct.length === 0) {
      setFilteredProduct(products);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  /* pagination state */
  const [currentPage, setCurrentPage] = useState<number>(1);
  const visibleCard = 4;

  // IMPORTANT: totalPages must be based on filteredProduct (not products)
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProduct.length / visibleCard)
  );

  const startProductIndex = (currentPage - 1) * visibleCard;
  const EndProductIndex = startProductIndex + visibleCard;

  // slice the filtered list
  const SlicedFilteredProduct = filteredProduct.slice(
    startProductIndex,
    EndProductIndex
  );

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

  // If filteredProduct changes and currentPage is out-of-range, clamp/reset page
  useEffect(() => {
    const newTotal = Math.max(
      1,
      Math.ceil(filteredProduct.length / visibleCard)
    );
    if (currentPage > newTotal) {
      setCurrentPage(newTotal);
      setStartPage(Math.max(1, newTotal - showPagesNumber + 1));
    }
  }, [filteredProduct, currentPage, visibleCard, showPagesNumber]);

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

  /*  filter*/
  const FilterByPrice: filtereNamType[] = [
    { name: "Cheaper" },
    { name: "Expensive" },
  ];
  const [searchInput, setSearchInput] = useState<string>("");
  const [dropDownPrice, setDropDownPrice] = useState<string>("Cheaper");
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /*  */
  function handleDropDown(dropDownItem: string) {
    setDropDownPrice(dropDownItem);
    // reset pagination when filters change
    handleFilter(searchInput, dropDownItem, true);
  }
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const newVal = e.target.value;
    setSearchInput(newVal);
    // reset pagination when filters change
    handleFilter(newVal, dropDownPrice, true);
  }

  /*  */
  // added an optional resetPage flag (keeps function name same)
  function handleFilter(input: string, dropInput: string, resetPage = false) {
    let UpdateFilteredProduct = [...products];

    if (input) {
      const q = input.toLowerCase();
      UpdateFilteredProduct = UpdateFilteredProduct.filter((product) => {
        return product.name?.toLowerCase().includes(q);
      });
    }

    if (dropInput === "Expensive") {
      UpdateFilteredProduct.sort((a, b) => b.price - a.price);
    }
    if (dropInput === "Cheaper") {
      UpdateFilteredProduct.sort((a, b) => a.price - b.price);
    }

    setFilteredProduct(UpdateFilteredProduct);

    // whenever user changes search/dropdown, reset the pagination to page 1
    if (resetPage) {
      setCurrentPage(1);
      setStartPage(1);
    } else {
      // ensure currentPage remains in range after filtering
      const newTotalPages = Math.max(
        1,
        Math.ceil(UpdateFilteredProduct.length / visibleCard)
      );
      if (currentPage > newTotalPages) {
        setCurrentPage(newTotalPages);
        setStartPage(Math.max(1, newTotalPages - showPagesNumber + 1));
      }
    }
  }

  console.log("filteredProduct", filteredProduct);

  return (
    <div
      className={styles.productMainContainer}
      onClick={() => {
        setShowDropDown(false);
      }}
    >
      <h1>Products</h1>
      <SearchSection
        FilterByPrice={FilterByPrice}
        dropDownPrice={dropDownPrice}
        handleDropDown={handleDropDown}
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <ProductItem
          products={products}
          SlicedFilteredProduct={SlicedFilteredProduct}
        />
      )}
      <PaginationSection
        products={filteredProduct} // pass filtered list so pagination reflects filtered results
        visiblePages={visiblePages}
        changePage={changePage}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        currentPage={currentPage}
      />
    </div>
  );
}
