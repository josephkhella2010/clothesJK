import AboutUsSecondSection from "./childComponent/AboutUsSecondSection";
import AboutUsUpperSection from "./childComponent/AboutUsUpperSection";
import styles from "./aboutUs.module.css";
export default function AboutUSPage() {
  return (
    <div className={styles.AboutUsPageWrapper}>
      <AboutUsUpperSection />
      <AboutUsSecondSection />
    </div>
  );
}
