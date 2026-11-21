import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { educationInfo } from "../../portfolio";
import "./Education.scss";

export default function Education() {
  const shouldReduceMotion = useReducedMotion();

  if (!educationInfo.display) return null;

  const fadeIn = (delay = 0, y = 20) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: {
      duration: shouldReduceMotion ? 0.1 : 0.5,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  });

  return (
    <div className="content-container py-6 sm:py-10" id="education">
      <motion.div {...fadeIn(0.1, 15)} className="mb-10 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDFA] border border-[#DCE2E9] text-[#0D9488] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
          Education
        </div>
        <h2 className="font-heading font-bold text-[#171C24] tracking-tight text-2xl sm:text-3xl">
          Academic Background
        </h2>
      </motion.div>

      <div className="space-y-6">
        {educationInfo.schools.map((school, i) => (
          <motion.div
            key={i}
            {...fadeIn(0.15 + i * 0.1, 20)}
            whileHover={{ y: shouldReduceMotion ? 0 : -3, transition: { duration: 0.2 } }}
            className="p-6 sm:p-8 rounded-xl border border-[#DCE2E9] bg-white shadow-card hover:shadow-card-hover hover:border-[#0D9488]/40 transition-all text-left"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Icon area */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-[#F0FDFA] border border-[#DCE2E9] flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-[#0D9488]" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-heading font-bold text-[#171C24] text-xl mb-1">
                  {school.schoolName}
                </h3>
                <p className="text-base font-semibold text-[#475569] mb-2">
                  {school.subHeader}
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#708090]">
                    <Calendar className="w-3.5 h-3.5 text-[#708090]" />
                    <span>{school.duration}</span>
                  </div>
                  {school.desc && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDFA] border border-[#0D9488]/25 text-[#0D9488] text-xs font-mono font-bold">
                      <Award className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>{school.desc}</span>
                    </div>
                  )}
                </div>

                {school.descBullets && school.descBullets.length > 0 && (
                  <ul className="space-y-2 mt-3 pt-3 border-t border-[#DCE2E9]/60">
                    {school.descBullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#475569]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
