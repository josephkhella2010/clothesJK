import { MdKeyboardArrowDown } from "react-icons/md";
import { Questions } from "../../../helps/QuestionArr";
import styles from "../aboutUs.module.css";
import { useEffect, useRef, useState } from "react";
export default function QuestionSection() {
  console.log(Questions);
  const [isExpanded, setIsExpanded] = useState<boolean[]>(
    Array(Questions.length).fill(false) // auto adjust based on Questions length
  );

  function handleExpand(ind: number) {
    /*  const updatedIsExpanded = [...isExpanded];
    updatedIsExpanded[ind] = !updatedIsExpanded[ind]; */
    //setIsExpanded(updatedIsExpanded);
    setIsExpanded((prev) => prev.map((val, i) => (i === ind ? !val : val)));
  }
  const heightRefs = useRef<(HTMLDivElement | null)[]>(
    Array(Questions.length).fill(null)
  );
  const [heightText, setHeightText] = useState<number[]>(
    Array(Questions.length).fill(0)
  );

  useEffect(() => {
    function handleResize() {
      heightRefs.current.forEach((ref, i) => {
        /*  
        //another method

        const updateHeightText = [...heightText];
        updateHeightText[i] = ref?.scrollHeight || 0;

        if (ref && isExpanded[i]) {
          //console.log(`Index ${i} height:`, ref.scrollHeight);
          setHeightText(updateHeightText);
        } */
        if (ref) {
          setHeightText((prev) =>
            prev.map((val, index) => (index === i ? ref.scrollHeight : val))
          );
        }
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);
  /*  
  // another method
  
  useEffect(() => {
    function handleResize() {
      setHeightText((prev) =>
        heightRefs.current.map((ref, i) => ref?.scrollHeight || prev[i] || 0)
      );
    }

    handleResize(); // initial run
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]); // re-run when expand state changes
 */
  console.log(` height of text is:`, heightText);
  return (
    <div className={styles.questionMainContainer}>
      <h1> FAQ</h1>
      <div className={styles.questionContainer}>
        {Questions &&
          Questions.map((item, index) => {
            return (
              <div className={styles.questionSection} key={index}>
                <div
                  className={styles.questionHeader}
                  onClick={() => handleExpand(index)}
                >
                  <h3>{item.header}</h3>
                  <MdKeyboardArrowDown
                    className={`${styles.downArrowIcon}
                  ${isExpanded[index] ? styles.expanded : styles.notExpanded}
                  
                  `}
                    style={{ transition: "transform 0.2s ease-in-out" }}
                  />
                </div>

                <div
                  ref={(el) => {
                    heightRefs.current[index] = el;
                  }}
                  className={styles.questionBody}
                  style={{
                    maxHeight: isExpanded[index]
                      ? `${heightText[index]}px`
                      : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.2s ease-in-out ",
                  }}
                >
                  <div style={{ padding: "20px 15px" }}>
                    <p>{item.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
