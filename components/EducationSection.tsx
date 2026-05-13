import ShowcaseSection from "./ShowcaseSection";
import { educationItems } from "../constants";

const EducationSection = () => {
  return (
    <ShowcaseSection
      sectionId="education"
      title="Education"
      items={educationItems}
    />
  );
};

export default EducationSection;