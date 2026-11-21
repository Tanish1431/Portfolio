import React from "react";
import {motion, useReducedMotion} from "framer-motion";
import {Code2, Layout, Server, Database, Cloud, Wrench} from "lucide-react";
import {skillsSection} from "../../portfolio";
import "./Skills.scss";

const categoryMeta = {
  languages: {icon: <Code2 className="w-5 h-5 text-[#0D9488]" />},
  frontend: {icon: <Layout className="w-5 h-5 text-[#0D9488]" />},
  backend: {icon: <Server className="w-5 h-5 text-[#0D9488]" />},
  databases: {icon: <Database className="w-5 h-5 text-[#0D9488]" />},
  "cloud-devops": {icon: <Cloud className="w-5 h-5 text-[#0D9488]" />},
  tools: {icon: <Wrench className="w-5 h-5 text-[#0D9488]" />}
};

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  if (!skillsSection || !skillsSection.display) {
    return null;
  }

  const cardVariants = {
    hidden: {opacity: 0, y: shouldReduceMotion ? 0 : 20},
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.45,
        delay: shouldReduceMotion ? 0 : i * 0.07,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  return (
    <div className="content-container py-6 sm:py-10" id="skills">
      {/* Section Header */}
      <div className="mb-12 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDFA] border border-[#DCE2E9] text-[#0D9488] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
          Technical Expertise
        </div>
        <h2 className="font-heading font-bold text-[#171C24] tracking-tight text-2xl sm:text-3xl mb-2">
          {skillsSection.title}
        </h2>
        <p className="text-base sm:text-lg text-[#475569] max-w-2xl">
          {skillsSection.subTitle}
        </p>
      </div>

      {/* 6-Category Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsSection.categories.map((category, index) => {
          const meta = categoryMeta[category.id] || {
            icon: <Code2 className="w-5 h-5 text-[#0D9488]" />
          };

          return (
            <motion.div
              key={category.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, margin: "-40px"}}
              variants={cardVariants}
              whileHover={{
                y: shouldReduceMotion ? 0 : -3,
                transition: {duration: 0.2}
              }}
              className="rounded-xl border border-[#DCE2E9] bg-white p-6 flex flex-col justify-between shadow-card hover:shadow-card-hover hover:border-[#0D9488]/40 transition-all duration-300 text-left group"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F0FDFA] border border-[#DCE2E9] group-hover:border-[#0D9488]/30 transition-colors">
                    {meta.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border border-[#DCE2E9] bg-[#F5F7FA] text-[#64748B]">
                    {category.skills.length} skills
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#171C24] mb-4 tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skill Badges Flow */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-[#DCE2E9]">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F7FA] hover:bg-[#F0FDFA] border border-[#DCE2E9] hover:border-[#0D9488]/40 text-xs font-mono font-medium text-[#171C24] transition-all duration-200 cursor-default"
                  >
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
