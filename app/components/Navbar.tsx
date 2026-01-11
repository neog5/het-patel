"use client";
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { navbarSection } from "../utils/portfolio";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !menuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-bg/85 backdrop-blur-md shadow-sm"
    >
      <div className="mx-auto px-6 lg:px-12 h-14 md:h-20 flex items-center justify-between">
        <a
          href="#hero"
          className="text-accent font-signature text-2xl md:text-4xl font-bold z-50 relative"
          onClick={() => setMenuOpen(false)}
        >
          Het Patel
        </a>

        <div className="hidden lg:flex items-center gap-8">
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

        {/* Mobile Menu Button */}
        <div className="lg:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-accent focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-bg h-screen w-screen flex flex-col items-center justify-center gap-8 lg:hidden z-40"
            >
              {navbarSection.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-mono text-text hover:text-accent transition-colors duration-300 capitalize flex flex-col items-center gap-2"
                >
                  <span className="text-accent text-sm">
                    0{navbarSection.navLinks.indexOf(link) + 1}.
                  </span>
                  {link.name}
                </a>
              ))}
              <a
                href={navbarSection.cta.url}
                target="_blank"
                onClick={() => setMenuOpen(false)}
                className="px-8 py-4 border border-accent text-accent rounded hover:bg-accent/10 transition-colors duration-300 font-mono text-lg capitalize mt-4"
              >
                {navbarSection.cta.title}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
