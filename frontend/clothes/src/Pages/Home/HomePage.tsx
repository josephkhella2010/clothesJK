import LowerSection from "./childComponent/LowerSection";
import SliderSectionTwo from "./childComponent/SliderSectionTwo";
import UpperSection from "./childComponent/UpperSection";
import styles from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={styles.HomePageWrapper}>
      <UpperSection />
      <SliderSectionTwo />
      <LowerSection />
    </div>
  );
}
