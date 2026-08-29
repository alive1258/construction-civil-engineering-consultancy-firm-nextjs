import ProjectsHero from "@/src/components/Ui/ProjectsPage/Hero/ProjectsHero";
import CategoryTabs from "@/src/components/Ui/ProjectsPage/CategoryTabs/CategoryTabs";
import FeaturedProject from "@/src/components/Ui/ProjectsPage/FeaturedProject/FeaturedProject";
import ProjectGrid from "@/src/components/Ui/ProjectsPage/ProjectGrid/ProjectGrid";
import Statistics from "@/src/components/Ui/ProjectsPage/Statistics/Statistics";
import CaseStudy from "@/src/components/Ui/ProjectsPage/CaseStudy/CaseStudy";
import TechnicalExcellence from "@/src/components/Ui/ProjectsPage/TechnicalExcellence/TechnicalExcellence";
import ClientLogos from "@/src/components/Ui/ProjectsPage/ClientLogos/ClientLogos";
import DarkCta from "@/src/components/Ui/Shared/DarkCta/DarkCta";

const ProjectsTemplet = () => {
  return (
    <div>
      <ProjectsHero />
      <CategoryTabs />
      <FeaturedProject />
      <ProjectGrid />
      <Statistics />
      <CaseStudy />
      <TechnicalExcellence />
      <ClientLogos />
      <DarkCta
        eyebrow="Let's Talk"
        heading="Let's Make Your Next Project a Success"
        buttonLabel="Start a Conversation"
      />
    </div>
  );
};

export default ProjectsTemplet;
