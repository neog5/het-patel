"use client";
import Image from "next/image";
import { skillsData } from "../utils/portfolio";
import { motion } from "motion/react";

export default function Skills() {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5 },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };
  return (
    <div
      id="skills"
      className="2xl:max-w-[1200px] xl:max-w-[1000px] mx-auto px-6 py-12 md:py-24"
    >
      <div className="py-20 xs:py-24 md:py-32 lg:py-36">
        {/* <h2 className="heading-secondary">Skills</h2> */}
        <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-10 w-full whitespace-nowrap after:content-[''] after:block after:h-[1px] after:bg-slate-700 after:w-1/2 after:ml-5 after:relative after:top-[2px]">
          <span className="font-mono text-accent text-base md:text-xl mr-2">
            04.
          </span>
          Technologies I Use
        </h2>
        <div className="w-full flex justify-evenly flex-wrap gap-x-2 md:gap-x-4 gap-y-10 max-lg:gap-y-6">
          {skillsData.map((item, i) => (
            <motion.div
              custom={i}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.1 }}
              viewport={{ margin: "50px", once: true }}
              key={i}
              className="flex items-center justify-center bg-bg-secondary shadow-md  gap-x-2 md:gap-x-4 rounded-xl px-5 py-2 max-lg:px-2"
            >
              <Image
                src={item.icon}
                alt={`${item.name} Skills Image`}
                width={100}
                height={100}
                className="h-auto w-[30px] md:w-[40px]"
              />
              <p className="text-xs md:text-sm">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
