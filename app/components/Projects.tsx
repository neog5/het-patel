"use client";
import Image from "next/image";
import { motion } from "motion/react";

// 1. Data Interface
interface FeaturedProject {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  cover: string;
  cta?: string;
}

// 2. Mock Data (Replace with your Content)
const FEATURED_DATA: FeaturedProject[] = [
  {
    title: "Cirqle",
    description:
      "A web app that helps users track and organize job applications, collaborate with friends and match resume to job descriptions using AI.",
    tech: ["Next.js", "TailwindCSS", "Supabase", "PostgreSQL", "Gemini API"],
    github: "https://github.com",
    external: "https://vscode.com",
    cover: "/project.png",
  },
  {
    title: "PerryOps",
    description:
      "A pre-operative procedure management app that streamlines the process for patients and healthcare providers.",
    tech: ["Flutter", "FastAPI", "Firebase", "MedGemma", "Qwen-32B"],
    github: "",
    external: "https://course.com",
    cta: "https://course.com",
    cover: "/project.png",
  },
  {
    title: "Pic2Plate",
    description:
      "A mobile apps that suggests recipes based on ingredients from a photo of your fridge or pantry using image recognition and AI.",
    tech: ["Flutter", "FastAPI", "Python", "RapidAPI", "Gemini API"],
    github: "https://github.com",
    external: "https://spotify.com",
    cover: "/project.png",
  },
];

const Featured = () => {
  return (
    <section id="projects" className="max-w-[1000px] mx-auto py-24 px-6 ">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center text-3xl font-bold mb-10 w-full whitespace-nowrap after:content-[''] after:block after:h-[1px] after:bg-slate-700 after:w-full after:ml-5 after:relative after:top-[2px]"
      >
        <span className="font-mono text-accent text-xl mr-2">03.</span>
        Some Things I’ve Built
      </motion.h2>

      <ul className="flex flex-col gap-24">
        {FEATURED_DATA.map((project, i) => {
          const isEven = i % 2 === 0;

          return (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative grid grid-cols-12 items-center gap-2"
            >
              {/* --- Project Content (Text) --- */}
              <div
                className={`
                // Base Layout
                col-span-12 row-start-1 row-end-[-1] z-20 
                
                // Desktop Layout (Grid positioning)
                md:col-span-7 
                ${
                  isEven
                    ? "md:col-start-1 text-left"
                    : "md:col-start-6 md:text-right"
                }
                
                // Mobile Styling
                p-6 md:p-0 bg-bg-secondary md:bg-transparent rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none
              `}
              >
                <p className="font-mono text-accent text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-text font-bold text-2xl mb-5 hover:text-accent transition-colors">
                  <a href={project.external || project.github}>
                    {project.title}
                  </a>
                </h3>

                {/* Description Box */}
                <div
                  className={`
                  text-slate-600 text-[16px] md:bg-bg-secondary md:p-6 rounded md:shadow-xl
                  ${isEven ? "md:-mr-12" : "md:-ml-12"}
                  hover:shadow-2xl transition-shadow
                `}
                >
                  <p>{project.description}</p>
                </div>

                {/* Tech Stack */}
                <ul
                  className={`
                  flex flex-wrap gap-4 mt-6 text-slate-400 font-mono text-sm
                  ${isEven ? "justify-start" : "md:justify-end"}
                `}
                >
                  {project.tech.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>

                {/* Links */}
                <div
                  className={`
                  flex items-center gap-4 mt-6 text-slate-200
                  ${isEven ? "justify-start" : "md:justify-end"}
                `}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      className="hover:text-accent transition-colors"
                      aria-label="Github"
                    >
                      G
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      className="hover:text-accent transition-colors"
                      aria-label="External Link"
                    >
                      E
                    </a>
                  )}
                  {project.cta && (
                    <a
                      href={project.cta}
                      className="border border-accent text-accent px-4 py-1 rounded text-sm font-mono hover:bg-accent/10 transition-colors"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </div>

              {/* --- Project Image (Cover) --- */}
              <div
                className={`
                // Base Layout (Mobile: Full Background)
                col-span-12 row-start-1 row-end-[-1] z-10 h-full
                
                // Desktop Layout
                md:col-span-7 md:h-auto
                ${isEven ? "md:col-start-6" : "md:col-start-1"}
              `}
              >
                <a
                  href={project.external || project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-full block relative rounded bg-accent/40 md:hover:bg-transparent transition-all duration-300 group overflow-hidden"
                >
                  {/* The actual image with tinting effects */}
                  <div className="md:group-hover:opacity-100 md:opacity-70 transition-opacity duration-300 h-full">
                    {/* Note: Use Next.js Image component for production */}
                    <Image
                      src={project.cover}
                      alt={project.title}
                      className="w-full h-full object-cover rounded grayscale contrast-100 brightness-90 md:group-hover:filter-none md:group-hover:brightness-100 transition-all duration-300 mix-blend-multiply"
                      width={700}
                      height={400}
                    />
                    {/* Overlay for the green tint effect */}
                    <div className="absolute inset-0 bg-bg-secondary/30 mix-blend-screen hidden md:block group-hover:hidden transition-all duration-300"></div>
                  </div>
                </a>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Featured;
