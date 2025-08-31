import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "../productsPage.module.css";
import type { ProductType } from "../../../helps/InterfacesType";
interface PropsType {
  products: ProductType[];
  visiblePages: number[];
  changePage: any;
  handleNext: () => void;
  handlePrevious: () => void;
  currentPage: number;
}
export default function PaginationSection({
  products,
  visiblePages,
  changePage,
  handleNext,
  handlePrevious,
  currentPage,
}: PropsType) {
  return (
    <div className={styles.paginationContainer}>
      <div>
        <MdKeyboardArrowLeft
          className={styles.rightArrowIcon}
          onClick={() => handlePrevious()}
        />
        <MdKeyboardArrowRight
          className={styles.leftArrowIcon}
          onClick={() => handleNext()}
        />
        <div className={styles.paginationSection}>
          {visiblePages.map((page: number) => {
            return (
              <li
                key={page}
                onClick={() => changePage(page)}
                className={`${styles.pageItem} ${
                  currentPage === page ? styles.activePage : ""
                }`}
              >
                {page}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}
