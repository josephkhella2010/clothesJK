import styles from "./loadingPage.module.css";
export default function LoadingPage() {
  const dots = 12;
  function dotsArray() {
    const Arr = Array.from({ length: dots }, (_, i) => i);
    return Arr;
  }
  return (
    <div className={styles.loadingPage}>
      <div className={styles.loadingContainer}>
        <h1>Loading</h1>
        <div className={styles.circleContainer}>
          {dotsArray() &&
            dotsArray().map((circle, index) => {
              const angle = (360 / dots) * circle;
              const delay = (circle * 0.1).toFixed(1);
              return (
                <span
                  key={index}
                  className={styles.circle}
                  style={{
                    transform: `rotate(${angle}deg) translateY(-20px)`,
                    animationDelay: `${delay}s`,
                  }}
                ></span>
              );
            })}
        </div>
      </div>
    </div>
  );
}
