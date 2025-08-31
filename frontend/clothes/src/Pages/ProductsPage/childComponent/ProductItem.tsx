/* import { Link } from "react-router-dom";
import styles from "../productsPage.module.css";
import type { ProductType } from "../../../helps/InterfacesType";
interface PropsType {
  products: ProductType[];
}
export default function ProductItem({ products }: PropsType) {
  return (
    <div className={styles.productItemContainer}>
      {products &&
        products.map((item, index: number) => {
          return (
            <div key={index} className={styles.productItemSection}>
              <Link
                to={`/singleproduct/${item._id}`}
                className={styles.productItemLink}
              >
                <img
                  src="/foto/homeFoto/HomePageSlideOne.webp"
                  alt="not found"
                />
                <div className={styles.productItemTextContent}>
                  <li>
                    {" "}
                    <span>Name:</span> {item?.name}{" "}
                  </li>

                  <li>
                    {" "}
                    <span>Description:</span> {item?.description}{" "}
                  </li>

                  <li>
                    {" "}
                    <span>Price:</span>
                    {item?.price}{" "}
                  </li>
                  <div className={styles.buttonContainer}>
                    <button>See more details</button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
 */

import { Link } from "react-router-dom";
import styles from "../productsPage.module.css";
import type { ProductType } from "../../../helps/InterfacesType";
interface PropsType {
  products: ProductType[];
  slicedProduct: ProductType[];
}
export default function ProductItem({ products, slicedProduct }: PropsType) {
  return (
    <div className={styles.productItemContainer}>
      {slicedProduct &&
        slicedProduct.map((item, index: number) => {
          return (
            <div className={styles.productItemSection} key={index}>
              <Link
                to={`/singleproduct/${item?._id}`}
                className={styles.productItemLink}
              >
                <div className={styles.frontFace}>
                  <h2>FrontFace</h2>
                  <img
                    src="/foto/homeFoto/HomePageSlideOne.webp"
                    alt="not found"
                  />
                  <div className={styles.productItemTextContent}>
                    <li>
                      <span>Name:</span> {item?.name}
                    </li>
                    <li>
                      <span>Description:</span> {item?.description}
                    </li>
                    <li>
                      <span>Price:</span> {item?.price}
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
        })}
    </div>
  );
}
