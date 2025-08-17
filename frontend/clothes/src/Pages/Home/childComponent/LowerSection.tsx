import { DiVim } from "react-icons/di";
import styles from "../HomePage.module.css";
export default function LowerSection() {
  interface contactInfoType {
    title: string;
    body?: string;
    tele?: string;
    adress?: string;
  }

  const contactInfo: contactInfoType[] = [
    {
      title: "GREAT VALUE",
      body: "We offer you quality and clean UK used laptop computers at affordable prices.",
    },
    {
      title: "CONFIDENCE",
      body: "All our products are tested and confirmed ok, with 30 days limited warranty.",
    },
    {
      title: "SHOPINVERSE Iwoa",
      tele: "+15156812487",
      adress: "📍 10095 ,Hickman ct unit 1, Iowa ,Clive,50325 .",
    },
    {
      title: "COMPLAINTS",
      body: "Have a complain? Whatsapp",
      tele: "+15156812487",
    },
  ];
  return (
    <div className={styles.HomeLowerSectionContainer}>
      <div className={styles.HomeLowerSectionFirstSection}>
        <h1>Why Buy USA Used Laptops?</h1>
        <p>
          There are many reasons why USA used laptops are preferred to new
          laptops bought here in Nigeria, it’s not just because of its
          affordability but also the assurance of getting a laptop made with
          original and quality materials that are durable.
        </p>
        <p>
          The United States set standards that regulate production of products
          in their country which reduces the chances of producing substandard
          products.
        </p>
        <p>
          Hence, laptops sold in USA are of good quality standard, unlike many
          fake brands and refurbished laptops packaged as brand new sold in
          Nigeria.
        </p>
        <p>
          Imported fairly used laptops serve almost the same purpose as laptop
          bought directly from the Original Equipment Manufacturers (OEM). This
          and many more are reasons why it’s preferable you purchase USA used
          laptops rather than new laptops sold in Nigeria.
        </p>
      </div>
      <div className={styles.HomeLowerSectionSecondSection}>
        {contactInfo.map((item, index) => {
          return (
            <div key={index} className={styles.HomeContactContainer}>
              <h3>{item.title}</h3>
              {item.body && <p>{item.body}</p>}
              {item.tele && <a href="tel:+15156812487">{item.tele}</a>}
              {item.adress && (
                <a
                  href="https://www.google.com/maps/place/10095+Hickman+Ct+Suite+1,+Clive,+IA+50325/@41.6143267,-93.7595934,17z/data=!3m1!4b1!4m6!3m5!1s0x87ec20b1645479df:0x81d409d634e11370!8m2!3d41.6143227!4d-93.7570185!16s%2Fg%2F11rwm12q_y?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  {item.adress}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
