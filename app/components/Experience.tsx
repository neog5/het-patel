"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { timelineData } from "../utils/portfolio";
import ExperienceCard from "./sub/ExperienceCard";
// import { GraduationCap, Briefcase, Code, Terminal } from "lucide-react";

const ExperienceTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Transform scroll progress into vertical distance for the moving head
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="min-h-screen py-20 relative overflow-hidden max-w-[1200px] mx-auto px-6 "
      id="experience"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* <h2 className="">
            <span className="heading-secondary">My Journey</span>
          </h2> */}
          <h2 className="flex items-center text-3xl font-bold mb-10 w-full whitespace-nowrap after:content-[''] after:block after:h-[1px] after:bg-slate-700 after:w-full after:ml-5 after:relative after:top-[2px] before:content-[''] before:block before:h-[1px] before:bg-slate-700 before:w-full before:mr-5 before:relative before:top-[2px]">
            <span className="font-mono text-accent text-xl mr-2">02.</span>
            My Journey
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* THE CENTRAL LINE (Static Background) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-text -translate-x-1/2 rounded-full" />

          {/* THE MOVING LINE (Fills up as you scroll) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-accent -translate-x-1/2 rounded-full z-10"
          />

          {/* THE SCROLLING HEAD (Your Photo) */}
          <motion.div
            style={{ top: lineHeight }}
            className="absolute left-8 md:left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 z-20 shadow-[0_0_20px_rgba(59,130,246,0.5)] rounded-full border-4 border-gray-950 bg-gray-900 overflow-hidden"
          >
            {/* Replace with your actual image path */}
            <Image
              src="/het-patel.jpg"
              alt="Head"
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </motion.div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-0">
            {timelineData.map((item, index) => (
              <ExperienceCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
