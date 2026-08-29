import ServicesHero from "@/src/components/Ui/ServicesPage/Hero/ServicesHero";
import ArchitectureSection from "@/src/components/Ui/ServicesPage/ArchitectureSection/ArchitectureSection";
import ServiceSplit from "@/src/components/Ui/ServicesPage/ServiceSplit/ServiceSplit";
import MepSection from "@/src/components/Ui/ServicesPage/MepSection/MepSection";
import DarkCta from "@/src/components/Ui/Shared/DarkCta/DarkCta";
import { STOCK } from "@/src/components/Ui/Shared/stockImages";

const ServicesTemplet = () => {
  return (
    <div>
      <ServicesHero />
      <ArchitectureSection />
      <ServiceSplit
        id="structural"
        index="02"
        eyebrow="Structural Engineering"
        heading="Structures Designed for Safety, Performance & Durability"
        imageSrc={STOCK.structuralEngineer}
        imageAlt="Structural engineer reviewing calculations"
        reverse
        alt
        columns
        items={[
          "Structural analysis",
          "Structural design",
          "Foundation design",
          "Steel structures",
          "Reinforced concrete structures",
          "Seismic analysis",
          "Structural assessment",
          "Structural rehabilitation",
        ]}
      />
      <ServiceSplit
        id="civil"
        index="03"
        eyebrow="Civil Engineering"
        heading="Civil Engineering"
        lede="Comprehensive civil engineering solutions for buildings and infrastructure, from earthworks through utility design."
        imageSrc={STOCK.civilConstructionSite}
        imageAlt="Civil engineering construction site"
        columns
        items={[
          "Site development",
          "Roads & pavements",
          "Drainage",
          "Water supply",
          "Sewerage",
          "Earthworks",
          "Infrastructure planning",
          "Utility design",
        ]}
      />
      <MepSection />
      <ServiceSplit
        id="project-management"
        index="05"
        eyebrow="Project Management & Supervision"
        heading="From Design to Successful Project Delivery"
        imageSrc={STOCK.teamMeeting}
        imageAlt="Project team in a planning meeting"
        reverse
        columns
        items={[
          "Project planning",
          "Scheduling",
          "Construction supervision",
          "Contractor coordination",
          "Quality control",
          "Progress monitoring",
          "Risk management",
          "Documentation",
        ]}
      />
      <ServiceSplit
        index="06"
        eyebrow="Survey & Investigation"
        heading="Survey & Site Investigation"
        imageSrc={STOCK.siteSurvey}
        imageAlt="Site survey and investigation equipment"
        alt
        items={[
          "Topographic survey",
          "Land survey",
          "Site investigation",
          "Soil testing",
          "Geotechnical assessment",
          "Existing structure assessment",
        ]}
      />
      <ServiceSplit
        index="07"
        eyebrow="BIM & Digital Engineering"
        heading="Smarter Design Through Digital Engineering"
        imageSrc={STOCK.digitalEngineering}
        imageAlt="Digital BIM model coordination"
        reverse
        columns
        items={[
          "BIM modeling",
          "3D coordination",
          "Clash detection",
          "Digital construction planning",
          "Quantity extraction",
          "Visualization",
          "Design coordination",
        ]}
      />
      <DarkCta
        eyebrow="Get Started"
        heading="Looking for the Right Engineering Partner?"
        buttonLabel="Request a Consultation"
      />
    </div>
  );
};

export default ServicesTemplet;
