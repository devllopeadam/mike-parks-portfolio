import ShowcaseSection from "./ShowcaseSection";
import { myProjects } from "../constants";

const Projects = () => {
  return (
    <ShowcaseSection
      sectionId="projects"
      title="My Selected Projects"
      items={myProjects}
      ctaHref="https://github.com/mike7418"
      ctaText="Visit GitHub for More Projects"
    />
  );
};

export default Projects;
