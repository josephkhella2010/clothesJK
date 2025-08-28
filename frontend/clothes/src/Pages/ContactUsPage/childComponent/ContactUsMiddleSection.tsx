import { BsFillTelephoneFill } from "react-icons/bs";
import styles from "../ContactUs.module.css";
import { IoIosChatbubbles } from "react-icons/io";
export default function ContactUsMiddleSection() {
  return (
    <div className={styles.ContactUsMiddleSectionMainContainer}>
      <div className={styles.ContactUsMiddleSectionContainer}>
        <div className={styles.ContactUsMiddleSectionSectionTextOne}>
          <BsFillTelephoneFill className={styles.icons} />
          <p>Talk to Us</p>
          <p>
            Interested in HubSpot’s software? Just pick up the phone to chat
            with a member of our sales team.
          </p>
          <a href="tel:+15156812487">+15156812487</a>
        </div>
        <div className={styles.ContactUsMiddleSectionSectionTextTwo}>
          <IoIosChatbubbles className={styles.icons} />
          <p>Email Us</p>
          <p>
            Sometimes you need a little help from your friends. Or a HubSpot
            support rep. Don’t worry… we’re here for you.
          </p>
          <a href="mailto:GMcomputerllc@yahoo.com">GMcomputerllc@yahoo.com</a>
        </div>
      </div>
    </div>
  );
}
