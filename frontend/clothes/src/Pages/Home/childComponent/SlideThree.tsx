/* 
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "../HomePage.module.css";
import { useEffect, useRef, useState } from "react";

export default function SliderSectionThree() {
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
    "/foto/homeFoto/HomePageSlideFour.webp",
    "/foto/homeFoto/HomePageSlideFive.webp",
    "/foto/homeFoto/HomePageSlideSix.webp",
    "/foto/homeFoto/HomePageSlideSeven.webp",
    "/foto/homeFoto/HomePageSlideEight.webp",
    "/foto/homeFoto/HomePageSlideNine.webp",
    "/foto/homeFoto/HomePageSlideOne.webp",
    "/foto/homeFoto/HomePageSlideTwo.webp",
    "/foto/homeFoto/HomePageSlideThree.webp",
    "/foto/homeFoto/HomePageSlideFour.webp",
    "/foto/homeFoto/HomePageSlideFive.webp",
    "/foto/homeFoto/HomePageSlideSix.webp",
    "/foto/homeFoto/HomePageSlideSeven.webp",
    "/foto/homeFoto/HomePageSlideEight.webp",
    "/foto/homeFoto/HomePageSlideNine.webp",
  ];

  const gap = 15; // px
  const slideRef = useRef<HTMLDivElement | null>(null);

  const [visibleSliders, setVisibleSliders] = useState(3);
  const [itemWidth, setItemWidth] = useState(0);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(ImgUrl.length / visibleSliders);

  const handlePrev = () => setPage((p) => (p > 0 ? p - 1 : totalPages - 1));
  const handleNext = () => setPage((p) => (p < totalPages - 1 ? p + 1 : 0));

  // update visible sliders based on window width
  const updateVisibleSliders = () => {
    const w = window.innerWidth;
    if (w > 850) setVisibleSliders(3);
    else if (w > 450) setVisibleSliders(2);
    else setVisibleSliders(1);
  };

  // recalc itemWidth whenever container or visibleSliders changes
  const updateItemWidth = () => {
    const cw = slideRef.current?.clientWidth ?? 0;
    if (cw > 0)
      setItemWidth((cw - (visibleSliders - 1) * gap) / visibleSliders);
  };

  useEffect(() => {
    updateVisibleSliders();
    window.addEventListener("resize", () => {
      updateVisibleSliders();
      updateItemWidth();
    });
    updateItemWidth();
  }, [visibleSliders]);

  useEffect(() => {
    if (page > totalPages - 1) setPage(0);
  }, [totalPages]);

  const translateX = page * (itemWidth + gap) * visibleSliders;

  return (
    <div className={styles.sliderTwoContainer}>
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

      <div className={styles.sliderTwoSection} ref={slideRef}>
        <div
          className={styles.sliderTwoContent}
          style={{
            transform: `translateX(-${translateX}px)`,
            transition: "transform 0.45s ease-in-out",
          }}
        >
          {ImgUrl.map((pic, ind) => (
            <img
              key={ind}
              src={pic}
              alt={`slide-${ind}`}
              style={{
                width: itemWidth ? `${itemWidth}px` : "auto",
                height: 300,
                objectFit: "cover",
                flex: "0 0 auto",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
 */
