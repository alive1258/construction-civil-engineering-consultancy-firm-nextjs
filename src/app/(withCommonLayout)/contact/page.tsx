import type { Metadata } from "next";
import ContactTemplet from "@/src/components/Ui/ContactPage/RootContactPage/ContactTemplet";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation with Meridian Engineering & Consultancy for your next architecture, structural, civil, or MEP project.",
};

const ContactPage = () => {
  return <ContactTemplet />;
};

export default ContactPage;
