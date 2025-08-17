import LowerSection from "./childComponent/LowerSection";
import SliderSectionTwo from "./childComponent/SliderSectionTwo";
import SliderSectionThree from "./childComponent/SlideThree";
import UpperSection from "./childComponent/UpperSection";
import styles from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={styles.HomePageWrapper}>
      <UpperSection />
      <SliderSectionTwo />
      <LowerSection />
      <SliderSectionThree />
    </div>
  );
}
