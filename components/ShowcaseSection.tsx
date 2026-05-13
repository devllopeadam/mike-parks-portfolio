import { useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { FaLocationArrow } from "react-icons/fa6";

import Project from "./Project";
import type { ShowcaseItem } from "../constants";

interface ShowcaseSectionProps {
  sectionId: string;
  title: string;
  items: ShowcaseItem[];
  ctaHref?: string;
  ctaText?: string;
}

const ShowcaseSection = ({
  sectionId,
  title,
  items,
  ctaHref,
  ctaText,
}: ShowcaseSectionProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const [preview, setPreview] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  return (
    <section
      id={sectionId}
      onMouseMove={handleMouseMove}
      className="relative px-4 sm:px-6 md:px-8 lg:px-10 xl:px-15 min-h-screen mt-20 md:mt-30 max-w-7xl mx-auto"
    >
      <h2 className="font-bold text-3xl md:text-4xl">{title}</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {items.map((item) => (
        <Project
          key={item.id}
          {...item}
          setPreview={setPreview}
          subDescription={item.subDescription ?? []}
        />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}

      {ctaHref && ctaText && (
        <div className="flex justify-center mt-12">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
          >
            <span className="relative z-10">{ctaText}</span>
            <FaLocationArrow className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out rounded-full"></div>
          </a>
        </div>
      )}
    </section>
  );
};

export default ShowcaseSection;