import ContactHero from "@/src/components/Ui/ContactPage/Hero/ContactHero";
import FormSection from "@/src/components/Ui/ContactPage/FormSection/FormSection";
import ServiceAreas from "@/src/components/Ui/ContactPage/ServiceAreas/ServiceAreas";
import Departments from "@/src/components/Ui/ContactPage/Departments/Departments";
import Faq from "@/src/components/Ui/ContactPage/Faq/Faq";
import ConsultationProcess from "@/src/components/Ui/ContactPage/ConsultationProcess/ConsultationProcess";
import OfficeMap from "@/src/components/Ui/ContactPage/OfficeMap/OfficeMap";
import ContactFinalCta from "@/src/components/Ui/ContactPage/FinalCta/ContactFinalCta";

const ContactTemplet = () => {
  return (
    <div id="top">
      <ContactHero />
      <FormSection />
      <ServiceAreas />
      <Departments />
      <Faq />
      <ConsultationProcess />
      <OfficeMap />
      <ContactFinalCta />
    </div>
  );
};

export default ContactTemplet;
