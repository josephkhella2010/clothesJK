import ProductsWrapper from "./childComponent/ProductsWrapper";
import styles from "./productsPage.module.css";
export default function ProductsPage() {
  return (
    <div className={styles.productPageWrapper}>
      <ProductsWrapper />
    </div>
  );
}
