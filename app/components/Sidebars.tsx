"use client";

import React from "react";
import { motion } from "motion/react";
import { author } from "../utils/portfolio";
import { Github, Linkedin, Instagram } from "lucide-react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const iconList = [
  { Icon: Github, href: "https://github.com/neog5" },
  { Icon: Linkedin, href: "https://linkedin.com/in/het-dilip-patel" },
  { Icon: Instagram, href: "https://instagram.com/neo_g5" },
];

const Sidebars = ({ children, className = "" }: Props) => {
  return (
    <>
      <motion.div
        //   variants={fadeIn(2.75)}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed bottom-0 flex-col gap-4 items-center md:flex left-6 xl:left-12 ${className}`}
      >
        {iconList.map((icon, i) => (
          <a
            key={i}
            href={icon.href}
            target="_blank"
            className={`block text-sm p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200`}
          >
            {<icon.Icon />}
          </a>
        ))}{" "}
        <div className="bg-slate-500 h-24 w-0.5 mt-5"></div>
      </motion.div>
      {children}
      <motion.div
        //   variants={fadeIn(2.75)}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed bottom-0 flex-col items-center md:flex right-6 xl:right-12`}
      >
        <a
          href={`mailto:${author.email}`}
          target="_blank"
          className={`block text-sm p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 [writing-mode:vertical-lr] font-mono tracking-widest text-xs`}
        >
          {author.email}
        </a>
        <div className="bg-slate-500 h-24 w-0.5 mt-5"></div>
      </motion.div>
    </>
  );
};

export default Sidebars;
