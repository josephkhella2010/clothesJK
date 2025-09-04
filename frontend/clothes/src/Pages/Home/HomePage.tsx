import { LanguagesMapping } from "../../helps/languageTranslation/langMapping";
import { useTranslate } from "../../helps/languageTranslation/useTranslate";
import LowerSection from "./childComponent/LowerSection";
import SliderSectionTwo from "./childComponent/SliderSectionTwo";
import UpperSection from "./childComponent/UpperSection";
import styles from "./HomePage.module.css";
export default function HomePage() {
  const t = useTranslate(); // get the translation function
  console.log(LanguagesMapping["home.title"]); // should log { en: "...", sv: "..." }
  console.log(t("home.title"));

  return (
    <div className={styles.HomePageWrapper}>
      <UpperSection />
      <SliderSectionTwo />
      <LowerSection />
      <p>sqqdeqeqe{t("home.title")}</p>
    </div>
  );
}
