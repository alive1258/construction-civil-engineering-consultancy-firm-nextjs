import ConsultationForm from "@/src/components/Ui/ContactPage/ConsultationForm/ConsultationForm";
import ContactInfoCard from "@/src/components/Ui/ContactPage/ContactInfoCard/ContactInfoCard";

const FormSection = () => {
  return (
    <section className="section-y">
      <div className="container grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.6fr_1fr]">
        <ConsultationForm />
        <ContactInfoCard />
      </div>
    </section>
  );
};

export default FormSection;
