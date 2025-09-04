import { FaSearch } from "react-icons/fa";
import styles from "../productsPage.module.css";
import { useState } from "react";
import FilterPriceDropDown from "./FilterPriceDropDown";
import type { filtereNamType } from "../../../helps/InterfacesType";
interface PropsType {
  FilterByPrice: filtereNamType[];
  showDropDown: boolean;
  dropDownPrice: string;
  searchInput: string;
  handleDropDown: (dropDownItem: string) => void;
  setShowDropDown: (showDropDown: boolean) => void;
  setSearchInput: (searchInput: string) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SearchSection({
  FilterByPrice,
  dropDownPrice,
  handleDropDown,
  showDropDown,
  setShowDropDown,
  searchInput,
  handleSearch,
}: PropsType) {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  return (
    <div className={styles.filterContainer} onClick={() => setIsTyping(false)}>
      <div
        className={`${
          isTyping ? styles.showSearchIcon : styles.hideSearchIcon
        } ${styles.searchContainer}`}
        onClick={(e) => {
          setIsTyping(true);
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          placeholder="Search Here ....."
          value={searchInput}
          onChange={(e) => {
            const value = e.target.value;
            handleSearch(e);
            setIsTyping(value.length >= 1);
          }}
          className={`${
            isTyping ? styles.showSearchIcon : styles.hideSearchIcon
          } ${styles.searchInput}`}
        />
        {isTyping ? (
          <div className={styles.searchIconContainer}>
            <FaSearch />
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <FilterPriceDropDown
          FilterByPrice={FilterByPrice}
          dropDownPrice={dropDownPrice}
          handleDropDown={handleDropDown}
          showDropDown={showDropDown}
          setShowDropDown={setShowDropDown}
        />
      </div>
    </div>
  );
}
