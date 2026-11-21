import React from "react";
import {motion, useReducedMotion} from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  Layers,
  ArrowRight,
  Code2,
  Cloud,
  Cpu
} from "lucide-react";
import {aboutSection} from "../../portfolio";
import "./About.scss";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  if (!aboutSection || !aboutSection.display) {
    return null;
  }

  const fadeIn = (delay = 0, y = 20) => ({
    initial: {opacity: 0, y: shouldReduceMotion ? 0 : y},
    whileInView: {opacity: 1, y: 0},
    viewport: {once: true, margin: "-40px"},
    transition: {
      duration: shouldReduceMotion ? 0.1 : 0.5,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.25, 0.1, 0.25, 1]
    }
  });

  const handleScrollToSkills = e => {
    e.preventDefault();
    const target = document.getElementById("skills");
    if (target) {
      const offsetTop =
        target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({top: offsetTop, behavior: "smooth"});
    }
  };

  return (
    <div className="content-container py-6 sm:py-10" id="about">
      {/* Section Header */}
      <motion.div {...fadeIn(0.1, 15)} className="mb-10 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDFA] border border-[#DCE2E9] text-[#0D9488] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
          About Me
        </div>
        <h2 className="font-heading font-bold text-[#171C24] tracking-tight text-2xl sm:text-3xl">
          {aboutSection.title}
        </h2>
        <p className="text-sm font-mono text-[#64748B] mt-1">
          {aboutSection.subtitle}
        </p>
      </motion.div>

      {/* Editorial Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Narrative & Engineering Approach */}
        <motion.div
          {...fadeIn(0.2, 20)}
          className="lg:col-span-7 space-y-5 text-left"
        >
          <p className="text-base sm:text-lg leading-relaxed text-[#171C24] font-medium font-sans">
            {aboutSection.description}
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-[#475569] font-sans">
            {aboutSection.descriptionSecondary}
          </p>

          {/* Core Focus Badges */}
          <div className="pt-3">
            <span className="text-xs font-mono text-[#708090] font-medium block mb-3">
              Core Technical Focus Areas:
            </span>
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-[#DCE2E9] text-xs font-mono font-medium text-[#171C24] shadow-xs hover:border-[#0D9488]/40 transition-colors">
                <Code2 className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Full-Stack Web Architecture</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-[#DCE2E9] text-xs font-mono font-medium text-[#171C24] shadow-xs hover:border-[#0D9488]/40 transition-colors">
                <Cloud className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Cloud Computing &amp; DevOps</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-[#DCE2E9] text-xs font-mono font-medium text-[#171C24] shadow-xs hover:border-[#0D9488]/40 transition-colors">
                <Cpu className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Problem Solving &amp; System Design</span>
              </span>
            </div>
          </div>

          {/* Context Navigation Link */}
          <div className="pt-4">
            <a
              href="#skills"
              onClick={handleScrollToSkills}
              className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-[#0D9488] hover:text-[#0F766E] transition-colors group"
            >
              <span>Explore My Technical Competencies</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Academic & Technical Highlight Cards */}
        <motion.div
          {...fadeIn(0.3, 20)}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full"
        >
          {aboutSection.highlights.map((item, index) => {
            const icons = {
              0: <GraduationCap className="w-5 h-5 text-[#0D9488]" />,
              1: <Award className="w-5 h-5 text-[#0D9488]" />,
              2: <Calendar className="w-5 h-5 text-[#0D9488]" />,
              3: <Layers className="w-5 h-5 text-[#0D9488]" />
            };

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: shouldReduceMotion ? 0 : -3,
                  transition: {duration: 0.2}
                }}
                className="p-5 rounded-xl border border-[#DCE2E9] bg-white shadow-card hover:shadow-card-hover hover:border-[#0D9488]/40 transition-all duration-200 text-left group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 rounded-lg bg-[#F0FDFA] border border-[#DCE2E9]">
                    {icons[index]}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#F5F7FA] text-[#475569] border border-[#DCE2E9] font-medium">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-[#708090] font-medium mb-1">
                  {item.title}
                </div>

                <div className="font-heading font-bold text-base sm:text-lg text-[#171C24] mb-1">
                  {item.value}
                </div>

                <div className="text-xs text-[#475569] font-sans">
                  {item.detail}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
