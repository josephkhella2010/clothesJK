/* import { Link } from "react-router-dom";
import styles from "./singleProduct.module.css";
export default function Trainig({ singleProduct }: any) {
  return (
    <div className={styles.productItemSection}>
      <Link
        to={`/singleproduct/${singleProduct?._id}`}
        className={styles.productItemLink}
      >
        <div className={styles.frontFace}>
          <h2>FrontFace</h2>
          <img src="/foto/homeFoto/HomePageSlideOne.webp" alt="not found" />
          <div className={styles.productItemTextContent}>
            <li>
              {" "}
              <span>Name:</span> {singleProduct?.name}{" "}
            </li>

            <li>
              {" "}
              <span>Description:</span> {singleProduct?.description}{" "}
            </li>

            <li>
              {" "}
              <span>Price:</span>
              {singleProduct?.price}{" "}
            </li>
            <div className={styles.buttonContainer}>
              <button>See more details</button>
            </div>
          </div>
        </div>
        <div className={styles.backFace}>
          <h2>BackFace</h2>
          <button>cool</button>
        </div>
      </Link>
    </div>
  );
}
 */
import { Link } from "react-router-dom";
import styles from "./singleProduct.module.css";

export default function Trainig({ singleProduct }: any) {
  return (
    <div className={styles.productItemSection}>
      <Link
        to={`/singleproduct/${singleProduct?._id}`}
        className={styles.productItemLink}
      >
        <div className={styles.frontFace}>
          <h2>FrontFace</h2>
          <img src="/foto/homeFoto/HomePageSlideOne.webp" alt="not found" />
          <div className={styles.productItemTextContent}>
            <li>
              <span>Name:</span> {singleProduct?.name}
            </li>
            <li>
              <span>Description:</span> {singleProduct?.description}
            </li>
            <li>
              <span>Price:</span> {singleProduct?.price}
            </li>
            <div className={styles.buttonContainer}>
              <button>See more details</button>
            </div>
          </div>
        </div>

        <div className={styles.backFace}>
          <div className={styles.backFaceText}>See more details</div>
        </div>
      </Link>
    </div>
  );
}
