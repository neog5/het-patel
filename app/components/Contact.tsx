"use client";

import { motion } from "motion/react";
// import { email } from '@config';
import { author } from "../utils/portfolio";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="max-w-[600px] mx-auto mb-24 text-center md:mb-12 xs:py-24 md:py-32 lg:py-36"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Overline / Numbered Heading */}
      <p className="block mb-5 text-accent font-mono font-normal">
        05. What’s Next?
      </p>

      {/* Title with Clamp */}
      <h2 className="font-bold text-text text-4xl md:text-6xl mb-6 leading-[1.1]">
        Get In Touch
      </h2>

      {/* Description Paragraph */}
      <p className="text-slate-400 text-lg leading-relaxed mb-12">
        I am currently open to new opportunities and collaborations. Whether you
        have a question, a project idea, or just want to say hello, feel free to
        reach out. I look forward to connecting with you!
      </p>

      {/* Big Button */}
      <a
        className="inline-block border border-accent text-accent bg-transparent rounded px-7 py-4 text-sm font-mono mt-4 hover:bg-accent/10 transition-colors duration-300"
        href={`mailto:${author.email}`}
      >
        Say Hello
      </a>
    </motion.section>
  );
};

export default Contact;
