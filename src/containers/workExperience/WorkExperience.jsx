import React from "react";
import {motion, useReducedMotion} from "framer-motion";
import {Briefcase, Calendar, ChevronRight} from "lucide-react";
import {workExperiences} from "../../portfolio";
import "./WorkExperience.scss";

export default function WorkExperience() {
  const shouldReduceMotion = useReducedMotion();

  if (!workExperiences.display) return null;

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

  return (
    <div className="content-container py-6 sm:py-10">
      {/* Section Header */}
      <motion.div {...fadeIn(0.1, 15)} className="mb-10 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDFA] border border-[#DCE2E9] text-[#0D9488] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
          Professional Experience
        </div>
        <h2 className="font-heading font-bold text-[#171C24] tracking-tight text-2xl sm:text-3xl">
          Work Experience
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 sm:left-6 top-2 bottom-4 w-px bg-[#DCE2E9]" />

        <div className="space-y-8">
          {workExperiences.experience.map((exp, i) => (
            <motion.div
              key={i}
              {...fadeIn(0.12 + i * 0.1, 20)}
              className="relative pl-12 sm:pl-16 text-left"
            >
              {/* Timeline marker with spring entrance */}
              <motion.div
                initial={{scale: shouldReduceMotion ? 1 : 0}}
                whileInView={{scale: 1}}
                viewport={{once: true}}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  delay: 0.15 + i * 0.1
                }}
                className="absolute left-2.5 sm:left-4 top-2 w-3.5 h-3.5 rounded-full bg-[#0D9488] border-2 border-white shadow-sm ring-4 ring-[#F0FDFA]"
              />

              {/* Experience Card */}
              <motion.div
                whileHover={{
                  y: shouldReduceMotion ? 0 : -3,
                  transition: {duration: 0.2}
                }}
                className="p-5 sm:p-6 rounded-xl border border-[#DCE2E9] bg-white shadow-card hover:shadow-card-hover hover:border-[#0D9488]/40 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-[#171C24] text-lg">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span className="text-sm font-semibold text-[#0D9488]">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#708090] mt-1 sm:mt-0">
                    <Calendar className="w-3.5 h-3.5 text-[#708090]" />
                    <span>{exp.date}</span>
                  </div>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed mb-3">
                  {exp.desc}
                </p>

                {exp.descBullets && (
                  <ul className="space-y-2 pt-2 border-t border-[#DCE2E9]/60">
                    {exp.descBullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-[#475569]"
                      >
                        <ChevronRight className="w-4 h-4 text-[#0D9488] mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
