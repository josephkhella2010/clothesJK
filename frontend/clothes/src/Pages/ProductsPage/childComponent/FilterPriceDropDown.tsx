import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import type { filtereNamType } from "../../../helps/InterfacesType";
import styles from "../productsPage.module.css";

interface PropsType {
  FilterByPrice: filtereNamType[];
  dropDownPrice: string;
  handleDropDown: (dropDownItem: string) => void;
  showDropDown: boolean;
  setShowDropDown: (showDropDown: boolean) => void;
}

export default function FilterPriceDropDown({
  FilterByPrice,
  dropDownPrice,
  handleDropDown,
  showDropDown,
  setShowDropDown,
}: PropsType) {
  return (
    <div className={styles.dropDownContainer}>
      <div
        className={styles.dropDownPlaceHolder}
        onClick={(e) => {
          e.stopPropagation();
          setShowDropDown(!showDropDown);
        }}
      >
        <span>{dropDownPrice}</span>
        <MdKeyboardArrowDown
          className={`${showDropDown ? styles.turnArrow : styles.downArrow}`}
        />
        {/*         <MdKeyboardArrowUp />
         */}{" "}
      </div>
      {showDropDown && (
        <ul className={styles.dropDownMenu}>
          {FilterByPrice &&
            FilterByPrice.map((item, ind) => {
              return (
                <li
                  key={ind}
                  onClick={() => {
                    handleDropDown(item.name);
                  }}
                >
                  {item.name}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}
