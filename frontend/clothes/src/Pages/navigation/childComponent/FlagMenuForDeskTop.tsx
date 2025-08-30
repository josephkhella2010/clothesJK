/* import { useDispatch } from "react-redux";
import {
  setLang,
  type SupportedLanguages,
} from "../../../reducerSlices/LangSlice";
import styles from "../navigation.module.css";
interface PropsType {
  flagsMenu: { url: string; language: SupportedLanguages }[];
}
export default function FlagMenuForDeskTop({ flagsMenu }: PropsType) {
  const dispatch = useDispatch();
  return (
    <div className={styles.flagsSubMenu}>
      {flagsMenu &&
        flagsMenu.map((item, ind) => {
          return (
            <div
              key={ind}
              className={styles.flagsSubMenuItem}
              onClick={() => dispatch(setLang(item.language))}
            >
              <img src={item.url} alt="not found" />
              <p>{item.language}</p>
            </div>
          );
        })}
    </div>
  );
} */
