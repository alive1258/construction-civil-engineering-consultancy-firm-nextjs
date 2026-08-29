import Hero from "@/src/components/Ui/HomePage/Hero/Hero";
import Introduction from "@/src/components/Ui/HomePage/Introduction/Introduction";
import StatsStrip from "@/src/components/Ui/HomePage/StatsStrip/StatsStrip";
import CoreServices from "@/src/components/Ui/HomePage/CoreServices/CoreServices";
import Expertise from "@/src/components/Ui/HomePage/Expertise/Expertise";
import Industries from "@/src/components/Ui/HomePage/Industries/Industries";
import ProjectApproach from "@/src/components/Ui/HomePage/ProjectApproach/ProjectApproach";
import FeaturedProjects from "@/src/components/Ui/HomePage/FeaturedProjects/FeaturedProjects";
import WhyChooseUs from "@/src/components/Ui/HomePage/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/src/components/Ui/HomePage/Testimonials/Testimonials";
import LatestInsights from "@/src/components/Ui/HomePage/LatestInsights/LatestInsights";
import FinalCta from "@/src/components/Ui/HomePage/FinalCta/FinalCta";

const RootTemplet = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <StatsStrip />
      <CoreServices />
      <Expertise />
      <Industries />
      <ProjectApproach />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <LatestInsights />
      <FinalCta />
    </div>
  );
};

export default RootTemplet;
