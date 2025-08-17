/* import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
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

  const gap = 15; // px — MUST match CSS .sliderTwoContent gap
  const slideRef = useRef<HTMLDivElement | null>(null);

  const [visibleSliders, setVisibleSliders] = useState<number>(3);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [itemWidth, setItemWidth] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  // total pages (derived)
  const totalPages = Math.max(1, Math.ceil(ImgUrl.length / visibleSliders));

  function handlePrev() {
    setPage((p) => (p > 0 ? p - 1 : totalPages - 1));
  }

  function handleNext() {
    setPage((p) => (p < totalPages - 1 ? p + 1 : 0));
  }

  // breakpoint watcher: sets visibleSliders
  useEffect(() => {
    const onResizeSetBreakpoints = () => {
      const w = window.innerWidth;
      if (w > 850) setVisibleSliders(3);
      else if (w > 450) setVisibleSliders(2);
      else setVisibleSliders(1);
    };
    onResizeSetBreakpoints();
    window.addEventListener("resize", onResizeSetBreakpoints);
    return () => window.removeEventListener("resize", onResizeSetBreakpoints);
  }, []);

  // recalc sizes whenever container or visibleSliders change
  useEffect(() => {
    const recalc = () => {
      const cw = slideRef.current?.clientWidth ?? 0;
      setContainerWidth(cw);

      if (cw === 0 || visibleSliders <= 0) {
        setItemWidth(0);
        return;
      }

      const iw = (cw - (visibleSliders - 1) * gap) / visibleSliders;
      setItemWidth(iw);
    };

    // initial recalc
    recalc();

    // use ResizeObserver so changes from images/layout are handled
    const ro = new (window as any).ResizeObserver(() => {
      recalc();
    });
    if (slideRef.current) ro.observe(slideRef.current);

    return () => ro.disconnect();
  }, [visibleSliders, gap]);

  // clamp page when visibleSliders (hence totalPages) changes
  useEffect(() => {
    if (page > totalPages - 1) setPage(0);
  }, [totalPages]); // eslint-disable-line

  // compute step (px) — one page shift
  // step = visibleSliders * (itemWidth + gap) = containerWidth + gap
  const step = visibleSliders > 0 ? visibleSliders * (itemWidth + gap) : 0;
  const translateX = Math.round(page * step);

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
            // ensure width grows to fit all items (images have fixed px widths)
            whiteSpace: "nowrap",
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
                display: "block",
              }}
              onLoad={() => {
                // sometimes images load after initial calc — ensure recalc for crisp fit
                if (slideRef.current) {
                  const cw = slideRef.current.clientWidth;
                  setContainerWidth(cw);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
 */
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
