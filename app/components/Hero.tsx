"use client";
import { motion } from "motion/react";
import { heroSection } from "../utils/portfolio";

const Hero = () => {
  const { subtitle, title, tagline, description, specialText } = heroSection;

  return (
    <div
      id="hero"
      className="2xl:max-w-[1200px] xl:max-w-[1000px] lg:max-w-[800px] sm:max-w-[600px] max-w-[360px] mx-auto px-6 min-h-screen h-full flex flex-col justify-center gap-6 xs:gap-7 mt-12 xs:mt-0"
    >
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm md:text-base font-mono text-accent"
      >
        {subtitle}
      </motion.p>
      <div className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tighter max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-slate-900 capitalize mb-2 leading-[1.1]"
        >
          {title}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-slate-700 leading-[1.2]"
        >
          {tagline}
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-slate-700 max-w-xl text-base text-sm md:text-lg"
      >
        {description}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-xs md:text-sm font-mono text-sky-500"
      >
        {specialText}
      </motion.p>
    </div>
  );
};

export default Hero;
