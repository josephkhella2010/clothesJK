import AboutUsSecondSection from "./childComponent/AboutUsSecondSection";
import AboutUsUpperSection from "./childComponent/AboutUsUpperSection";
import styles from "./aboutUs.module.css";
import ActivitySection from "./childComponent/ActivitySection";
import AboutUsLowerSection from "./childComponent/AboutUsLowerSection";
export default function AboutUSPage() {
  return (
    <div className={styles.AboutUsPageWrapper}>
      <AboutUsUpperSection />
      <AboutUsSecondSection />
      <ActivitySection />
      <AboutUsLowerSection />
    </div>
  );
}
