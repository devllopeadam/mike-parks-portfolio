import React from "react";
import ApproachCard from "./ui/ApproachCard";

const Approach = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-8">
        <ApproachCard
          title="Discovery & Strategy"
          phase="Phase 1"
          description="We map out business goals, target audience, platform fit, content structure, SEO needs, and the website experience required to support conversions."
          cardType={1}
        />

        <ApproachCard
          title="Build & Optimization"
          phase="Phase 2"
          description="Once the plan is clear, I build the site, customize the CMS, improve responsiveness, tune performance, and keep communication practical and consistent."
          cardType={2}
        />

        <ApproachCard
          title="Launch & Support"
          phase="Phase 3"
          description="After QA and final refinements, I help launch the site cleanly, support handoff, and make sure the website is ready for search visibility, speed, and daily use."
          cardType={3}
        />
      </div>
    </section>
  );
};

export default Approach;
