/* import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "../HomePage.module.css";
import { useState } from "react";

export default function SliderSection() {
  const ImgUrl: string[] = [
    "/foto/homeFoto/HomePageSlideOne.webp",
    "/foto/homeFoto/HomePageSlideTwo.webp",
    "/foto/homeFoto/HomePageSlideThree.webp",
    "/foto/homeFoto/HomePageSlideFour.webp",
    "/foto/homeFoto/HomePageSlideFive.webp",
    "/foto/homeFoto/HomePageSlideSix.webp",
    "/foto/homeFoto/HomePageSlideSeven.webp",
    "/foto/homeFoto/HomePageSlideEight.webp",
    "/foto/homeFoto/HomePageSlideNine.webp",
    "/foto/homeFoto/HomePageSlideOne.webp",
    "/foto/homeFoto/HomePageSlideTwo.webp",
    "/foto/homeFoto/HomePageSlideThree.webp",
  ];
  const visibleSliders = 3;
  const gap = 20; // gap in px
  const slidersLength = Math.ceil(ImgUrl.length / visibleSliders);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  console.log(slidersLength);
  function handleNext() {
    if (currentIndex < slidersLength - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  }
  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(slidersLength - 1);
    }
  }
  console.log(currentIndex);
  return (
    <div className={styles.SliderContainer}>
      <div>
        <MdKeyboardArrowLeft
          className={styles.LeftIcons}
          onClick={handlePrev}
        />
        <MdKeyboardArrowRight
          className={styles.RightIcons}
          onClick={handleNext}
        />
      </div>
      <div className={styles.SliderSection}>
        <div
          className={styles.SliderContent}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% )`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {ImgUrl.map((foto, ind) => {
            return <img src={foto} alt="non found" key={ind} />;
          })}
        </div>
      </div>
    </div>
  );
}
 */
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "../HomePage.module.css";
import { useState, useRef, useEffect } from "react";

export default function SliderSection() {
  const ImgUrl: string[] = [
    "/foto/homeFoto/HomePageSlideOne.webp",
    "/foto/homeFoto/HomePageSlideTwo.webp",
    "/foto/homeFoto/HomePageSlideThree.webp",
    "/foto/homeFoto/HomePageSlideFour.webp",
    "/foto/homeFoto/HomePageSlideFive.webp",
    "/foto/homeFoto/HomePageSlideSix.webp",
    "/foto/homeFoto/HomePageSlideSeven.webp",
    "/foto/homeFoto/HomePageSlideEight.webp",
    "/foto/homeFoto/HomePageSlideNine.webp",
    "/foto/homeFoto/HomePageSlideOne.webp",
    "/foto/homeFoto/HomePageSlideTwo.webp",
    "/foto/homeFoto/HomePageSlideThree.webp",
    "/foto/homeFoto/HomePageSlideOne.webp",
    "/foto/homeFoto/HomePageSlideTwo.webp",
    "/foto/homeFoto/HomePageSlideThree.webp",
    "/foto/homeFoto/HomePageSlideFour.webp",
    "/foto/homeFoto/HomePageSlideFive.webp",
    "/foto/homeFoto/HomePageSlideSix.webp",
    "/foto/homeFoto/HomePageSlideSeven.webp",
    "/foto/homeFoto/HomePageSlideEight.webp",
    "/foto/homeFoto/HomePageSlideNine.webp",
    "/foto/homeFoto/HomePageSlideOne.webp",
    "/foto/homeFoto/HomePageSlideTwo.webp",
    "/foto/homeFoto/HomePageSlideThree.webp",
    "/foto/homeFoto/HomePageSlideOne.webp",
    "/foto/homeFoto/HomePageSlideTwo.webp",
    "/foto/homeFoto/HomePageSlideThree.webp",
    "/foto/homeFoto/HomePageSlideFour.webp",
    "/foto/homeFoto/HomePageSlideFive.webp",
    "/foto/homeFoto/HomePageSlideSix.webp",
    "/foto/homeFoto/HomePageSlideSeven.webp",
    "/foto/homeFoto/HomePageSlideEight.webp",
    "/foto/homeFoto/HomePageSlideNine.webp",
    "/foto/homeFoto/HomePageSlideOne.webp",
    "/foto/homeFoto/HomePageSlideTwo.webp",
    "/foto/homeFoto/HomePageSlideThree.webp",
  ];

  const visibleSlides = 2;
  const gap = 20; // px
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [pageWidth, setPageWidth] = useState(0);

  // Calculate page width dynamically including gaps
  useEffect(() => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      const totalGap = gap * (visibleSlides - 1);
      setPageWidth(containerWidth + totalGap);
    }
  }, [sliderRef.current]);

  const totalPages = Math.ceil(ImgUrl.length / visibleSlides);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className={styles.SliderContainer}>
      <MdKeyboardArrowLeft className={styles.LeftIcons} onClick={handlePrev} />
      <MdKeyboardArrowRight
        className={styles.RightIcons}
        onClick={handleNext}
      />

      <div className={styles.SliderSection} ref={sliderRef}>
        <div
          className={styles.SliderContent}
          style={{
            transform: `translateX(-${currentIndex * (pageWidth - gap)}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {ImgUrl.map((foto, ind) => (
            <img src={foto} alt="non found" key={ind} />
          ))}
        </div>
      </div>
    </div>
  );
}
