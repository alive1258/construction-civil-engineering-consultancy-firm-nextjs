import type { Metadata } from "next";
import ProjectsTemplet from "@/src/components/Ui/ProjectsPage/RootProjectsPage/ProjectsTemplet";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected engineering, architecture, and infrastructure projects delivered by Meridian Engineering & Consultancy.",
};

const ProjectsPage = () => {
  return <ProjectsTemplet />;
};

export default ProjectsPage;
