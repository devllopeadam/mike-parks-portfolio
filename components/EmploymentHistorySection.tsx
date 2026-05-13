import ShowcaseSection from "./ShowcaseSection";
import { employmentHistoryItems } from "../constants";

const EmploymentHistorySection = () => {
  return (
    <ShowcaseSection
      sectionId="employment-history"
      title="CMS Experience"
      items={employmentHistoryItems}
    />
  );
};

export default EmploymentHistorySection;