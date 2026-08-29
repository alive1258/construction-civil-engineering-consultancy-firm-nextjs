import type { Metadata } from "next";
import AboutTemplet from "@/src/components/Ui/AboutPage/RootAboutPage/AboutTemplet";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meridian Engineering & Consultancy — our story, mission, values, team, and methodology.",
};

const AboutPage = () => {
  return <AboutTemplet />;
};

export default AboutPage;
