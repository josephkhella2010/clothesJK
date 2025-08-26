import { ImgsArr } from "../../../helps/ImgsArr";
import type { ActivityType } from "../../../helps/InterfacesType";
import styles from "../aboutUs.module.css";
export default function ActivitySection() {
  const AcitivityArr: ActivityType[] = [
    {
      img: ImgsArr["AboutUsPageActivityOne"],
      header: "Buy",
      description:
        "We buy products directly from consumers for immediate (cash) money.",
    },
    {
      img: ImgsArr["AboutUsPageActivityTwo"],
      header: "Sell",
      description:
        "We sell these products in our stores and on our webshops. Products are sold with warranty and service.",
    },
    {
      img: ImgsArr["AboutUsPageActivityThree"],
      header: "Buyback (Pawn)",
      description:
        "Temporary financial solutions for customers: pawn your item for immediate (cash) money and buy it back later with interest",
    },
    {
      img: ImgsArr["AboutUsPageActivityFour"],
      header: "Trade-in",
      description:
        "Buy a product from our store, sell your old one and pay a little extra. Also that is possible!",
    },
  ];
  return (
    <div className={styles.activelySectionContainer}>
      <h3>Our activities</h3>
      <div className={styles.activelySectionSection}>
        {AcitivityArr &&
          AcitivityArr.map((item, index) => {
            return (
              <div key={index} className={styles.activitySectionItem}>
                <img src={item.img} alt=" notfound" />
                <div className={styles.activitySectionItemText}>
                  <h3>{item.header}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
