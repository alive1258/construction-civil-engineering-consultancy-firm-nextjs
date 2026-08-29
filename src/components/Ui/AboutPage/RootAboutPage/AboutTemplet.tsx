import AboutHero from "@/src/components/Ui/AboutPage/Hero/AboutHero";
import WhoWeAre from "@/src/components/Ui/AboutPage/WhoWeAre/WhoWeAre";
import MissionVision from "@/src/components/Ui/AboutPage/MissionVision/MissionVision";
import Values from "@/src/components/Ui/AboutPage/Values/Values";
import Team from "@/src/components/Ui/AboutPage/Team/Team";
import Certifications from "@/src/components/Ui/AboutPage/Certifications/Certifications";
import Methodology from "@/src/components/Ui/AboutPage/Methodology/Methodology";
import Sustainability from "@/src/components/Ui/AboutPage/Sustainability/Sustainability";
import AboutCta from "@/src/components/Ui/AboutPage/AboutCta/AboutCta";

const AboutTemplet = () => {
  return (
    <div>
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <Values />
      <Team />
      <Certifications />
      <Methodology />
      <Sustainability />
      <AboutCta />
    </div>
  );
};

export default AboutTemplet;
