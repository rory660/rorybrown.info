import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollFloat from "../../components/ScrollFloat";
import { TechnologiesGrid } from "./TechnologiesGrid";

export const TechnologiesSection = () => {
  const sectionRef = useRef(null); // Reference to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef, // Track the visibility of this section
    offset: ["start end", "end start"], // When the section starts and ends in the viewport
  });

  // Map the scroll progress (0 to 1) to a rotation value (0 to 10 degrees)
  const rotation = useTransform(scrollYProgress, [0.05, 0.4], [0, -10]);

  return (
    <div className="w-full font-primary text-8xl relative z-10 mb-30 overflow-hidden">
      <div className="w-full h-[50vh] flex flex-col items-center justify-center mt-50">
        <ScrollFloat textClassName="font-extrabold">
          Hey, I'm Rory! I'm a senior full stack web developer!
        </ScrollFloat>
        <div className="text-4xl">
          <ScrollFloat textClassName="font-extrabold !font-2xl">
            Here's some of what I can do
          </ScrollFloat>
        </div>
      </div>
      {/* Use motion.div for the rotating container */}
      <div className="w-full overflow-visible">
        <motion.div
          ref={sectionRef} // Attach the ref to track this section
          style={{
            rotate: rotation, // Bind the rotation value to the rotate property
          }}
          className="transition-transform ease-out overflow-visible"
        >
          <TechnologiesGrid />
        </motion.div>
      </div>
    </div>
  );
};
