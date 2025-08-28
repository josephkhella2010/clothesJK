import ContactUsBottomSection from "./childComponent/ContactUsBottomSection";
import ContactUsFirstSection from "./childComponent/ContactUsFirstSection";
import ContactUsMiddleSection from "./childComponent/ContactUsMiddleSection";
import styles from "./ContactUs.module.css";
export default function ContactUsPage() {
  return (
    <div className={styles.ContactUsPageWrapper}>
      <ContactUsFirstSection />
      <ContactUsMiddleSection />
      <ContactUsBottomSection />
    </div>
  );
}
