import styles from "../aboutUs.module.css";

export default function AboutUsUpperSection() {
  return (
    <div className={styles.UpperSectionContainer}>
      <img src="/foto/homeFoto/HomePageSlideEight.webp" alt="" />
      <div className={styles.UpperSectionContainerText}>
        <h3>Profitable and circular:</h3>
        <h3>Where your succes betters the world</h3>
      </div>
    </div>
  );
}
