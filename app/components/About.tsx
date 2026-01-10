"use client";
// import { useEffect, useState } from "react";
// // import { HeroImage, ListItem, Wrapper, Link } from "../components";
import { aboutSection, author } from "../utils/portfolio";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// import { getId } from "../utils/helper";

const About = () => {
  const { img, list } = aboutSection;
  return (
    <motion.div
      id="about"
      className="2xl:max-w-[1200px] xl:max-w-[1000px] lg:max-w-[800px] sm:max-w-[600px] max-w-[360px] mx-auto px-6 py-20 xs:py-24 md:py-32 lg:py-36"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-4 sm:mb-10 w-full whitespace-nowrap after:content-[''] after:block after:h-[1px] after:bg-slate-700 after:w-full after:ml-5 after:relative after:top-[2px]">
        <span className="font-mono text-accent text-xl mr-2">01.</span>
        About Me
      </h2>
      <main className="flex text-sm gap-8 sm:gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-2 sm:space-y-4 lg:w-3/5">
          <p>
            I enjoy creating things that can make daily life easier and more
            enjoyable. My journey into programming began in high school when I
            started learning C++.
          </p>
          <p>
            Fast-forward to today, I’ve had the privilege of working in the
            industry for 2 years. With experience building web applications at
            companies like{" "}
            <Link
              href="https://www.udchalo.com/"
              target="_blank"
              className="group relative text-accent"
            >
              udChalo
              <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:w-full bg-accent duration-300 ease-in-scroll"></span>
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.slb.com/"
              target="_blank"
              className="group relative text-accent"
            >
              SLB
              <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:w-full bg-accent duration-300 ease-in-scroll"></span>
            </Link>
            .
          </p>
          <p>
            I specialize in building full-stack web applications using modern
            technologies like Next.js for web and Flutter for mobile apps. I’m
            passionate about learning new technologies and continuously
            improving my skills.
          </p>
          <p>
            I recently graduated with a Masters degree in Computer Science and
            now lookng for new opportunities to contribute and grow as a
            developer.
          </p>
          <p>
            My goal is to always build products that provide real value to
            users.
          </p>
          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm font-mono gap-1 grid grid-cols-2 w-2/3">
                {list.items.map((item, i) => (
                  <div key={i}>
                    {/* <ListItem key={getId()}>{item}</ListItem> */}
                    <li
                      className={`before:content-['▹'] flex before:mr-3 before:text-accent before:block`}
                    >
                      {item}
                    </li>
                  </div>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="relative group w-64 h-64 sm:w-auto sm:h-auto">
          <Image
            src={img}
            alt={author.name}
            width={300}
            height={300}
            className="relative rounded shadow-xl z-20"
          />
          <div className="absolute inset-0 border-[3px] rounded border-accent translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 duration-150 hidden sm:block"></div>
        </div>
      </main>
    </motion.div>
  );
};

export default About;
