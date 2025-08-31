import { FaSearch } from "react-icons/fa";
import styles from "../productsPage.module.css";
import { useState } from "react";
export default function SearchSection() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  console.log(searchInput);
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

            setIsTyping(value.length >= 1);

            setSearchInput(e.target.value);
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
    </div>
  );
}
