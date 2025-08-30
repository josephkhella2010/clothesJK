import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "../HomePage.module.css";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { GrApple } from "react-icons/gr";
/*
export default function SliderSectionTwo() {
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
  const [visibleSliders, setVisibleSliders] = useState(3);
  let gap = 15; // px
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalPages = Math.ceil(ImgUrl.length / visibleSliders);
  const slideRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(totalPages - 1);
    }
  }

  function handleNext() {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  }
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 850) {
        setVisibleSliders(3);
      }
      if (window.innerWidth < 850) {
        setVisibleSliders(2);
      }
      if (window.innerWidth < 450) {
        setVisibleSliders(1);
      }

      if (slideRef.current) {
        const width = slideRef.current.offsetWidth;
        const TotalGap = gap * (visibleSliders - 1);
        if (window.innerWidth < 450) {
          setSlideWidth(width + TotalGap);
        } else {
          setSlideWidth(width + TotalGap);
        }
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [slideWidth, visibleSliders]);
  console.log(slideWidth);
  console.log(visibleSliders);

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
            transform: `translateX(-${currentIndex * slideWidth}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {ImgUrl.map((pic, ind) => {
            return <img src={pic} alt="not found" key={ind} />;
          })}
        </div>
      </div>
    </div>
  );
}
 */
/* 
export default function SliderSectionTwo() {
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

  const [visibleSliders, setVisibleSliders] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  //const [gapWidth, setGapWidth] = useState(0);

  const gap = 15; // must match CSS
  const slideRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(ImgUrl.length / visibleSliders);

  function handlePrev() {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  }

  /*   useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w > 850) {
        setVisibleSliders(3);
      } else if (w > 450) {
        setVisibleSliders(2);
      } else {
        setVisibleSliders(1);
      }

      if (slideRef.current) {
        const containerWidth = slideRef.current.offsetWidth;
        // each item width accounts for internal gaps
        const itemWidth =
          (containerWidth - (visibleSliders - 1) * gap) / visibleSliders;
        const pageWidth =
          itemWidth * visibleSliders + (visibleSliders - 1) * gap;
        setSlideWidth(pageWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleSliders]); 
  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth > 850) {
        setVisibleSliders(3);
      } else if (windowWidth < 850 && windowWidth > 450) {
        setVisibleSliders(2);
      } else {
        setVisibleSliders(1);
      }

      if (slideRef.current) {
        const containerWidth = slideRef.current?.clientWidth;
        setSlideWidth(
          (containerWidth - (visibleSliders - 1) * gap) / visibleSliders
        );
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [visibleSliders]);
  const translateX = currentIndex * (currentIndex + gap) * visibleSliders;

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
              src={pic}
              alt="not found"
              key={ind}
           
              style={{
                width: slideWidth ? `${slideWidth}px` : "auto",
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

/* ///////////////// */

export default function SliderSectionTwo() {
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
  ];

  const [visibleSliders, setVisibleSliders] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const gap = 15; // must match CSS
  const slideRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(ImgUrl.length / visibleSliders);

  function handlePrev() {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  }

  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      let newVisible = 3;
      if (w <= 850 && w > 450) newVisible = 2;
      if (w <= 450) newVisible = 1;
      setVisibleSliders(newVisible);

      if (slideRef.current) {
        const containerWidth = slideRef.current.clientWidth;
        const itemWidth =
          (containerWidth - (newVisible - 1) * gap) / newVisible;
        setSlideWidth(itemWidth);
      }
    }

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < totalPages - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);
    return () => window.clearInterval(interval);
  }, [currentIndex, totalPages]);

  // correct formula
  const translateX =
    currentIndex * (slideWidth * visibleSliders + gap * visibleSliders);
  /*   console.log(slideWidth);
   */ return (
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
              src={pic}
              alt={`slide-${ind}`}
              key={ind}
              style={{
                width: slideWidth ? `${slideWidth}px` : "auto",
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
