"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { navbarSection } from "../utils/portfolio";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-bg/50 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a
          href="#hero"
          className="text-accent font-signature text-4xl font-bold"
        >
          Het Patel
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navbarSection.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-sm font-mono text-text hover:text-accent transition-colors duration-300 capitalize"
            >
              <span className="text-accent mr-1">
                0{navbarSection.navLinks.indexOf(link) + 1}.
              </span>
              {link.name}
            </a>
          ))}
          <a
            href={navbarSection.cta.url}
            target="_blank"
            className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-colors duration-300 font-mono text-sm capitalize"
          >
            {navbarSection.cta.title}
          </a>
        </div>

        {/* Mobile Menu Button (Placeholder for now) */}
        <div className="md:hidden">
          {/* You can add a hamburger menu here if needed */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
