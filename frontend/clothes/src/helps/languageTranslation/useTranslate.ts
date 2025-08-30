/* import { useSelector } from "react-redux";
import { LanguagesMapping } from "./langMapping";
import type { LanguageKeys } from "./langMapping";
import type { SupportedLanguages } from "../../reducerSlices/LangSlice";
import type { RootState } from "../../Store/store";

export function useTranslate() {
  const lang = useSelector(
    (state: RootState) => state.LangData.lang
  ) as SupportedLanguages;

  return function t(key: LanguageKeys): string {
    const translation = LanguagesMapping[key];
    console.log("Key:", key, "Translation:", translation, "Lang:", lang);
    return translation ? translation[lang] : key;
  };
}
 */
import { useSelector } from "react-redux";
import type { RootState } from "../../Store/store";
import { LanguagesMapping, type LanguageKeys } from "./langMapping";
import type { SupportedLanguages } from "../../reducerSlices/LangSlice";

export function useTranslate() {
  const lang = useSelector(
    (state: RootState) => state.LangData.lang
  ) as SupportedLanguages;

  return function t(key: LanguageKeys): string {
    const translation = LanguagesMapping[key];
    return translation ? translation[lang] : key; // no lowercasing needed
  };
}
