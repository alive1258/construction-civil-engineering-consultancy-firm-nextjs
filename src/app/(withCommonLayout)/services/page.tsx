import type { Metadata } from "next";
import ServicesTemplet from "@/src/components/Ui/ServicesPage/RootServicesPage/ServicesTemplet";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, structural, civil, MEP, project management, survey, and BIM services from Meridian Engineering & Consultancy.",
};

const ServicesPage = () => {
  return <ServicesTemplet />;
};

export default ServicesPage;
