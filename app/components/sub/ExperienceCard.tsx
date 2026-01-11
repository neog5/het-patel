import { motion } from "motion/react";

interface TimelineEntry {
  year: string;
  title: string;
  place: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const ExperienceCard = ({
  item,
  index,
}: {
  item: TimelineEntry;
  index: number;
}) => {
  // Determine alignment: even indexes left, odd indexes right (on desktop)
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-center justify-between md:gap-8 mb-6 md:mb-12 ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* 1. Empty Spacer for the other side (Desktop only) */}
      <div className="hidden md:block w-5/12" />

      {/* 2. The Dot on the line (Visual Anchor) */}
      <div className="absolute hidden md:block left-8 top-1/2 md:left-1/2 w-4 h-4 bg-bg-secondary border-2 border-accent rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />

      {/* 3. The Content Card */}
      <div className="w-full md:w-5/12">
        <div className="bg-bg-secondary backdrop-blur-sm shadow-md p-6 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 group">
          {/* Header with Icon */}
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-accent-light rounded-lg text-accent group-hover:scale-101 transition-all">
              {item.icon}
            </div>
            <span className="text-xs md:text-sm font-mono text-accent">
              {item.year}
            </span>
          </div>

          <h3 className="text-base md:text-xl font-bold text-dark-1 mb-1">
            {item.title}
          </h3>
          <p className="text-xs md:text-sm text-text mb-3 font-medium">
            {item.place}
          </p>
          <p className="text-text leading-relaxed text-xs md:text-sm mb-4">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-md bg-accent-light text-slate-600 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Arrow pointing to center (Optional Decoration) */}
          <div
            className={`hidden md:block shadow-md absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-bg-secondary transform 
            ${isLeft ? "-right-2 -rotate-45" : "-left-2 rotate-45"}
          `}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
