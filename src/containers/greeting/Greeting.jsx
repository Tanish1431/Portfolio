import React from "react";
import {motion, useReducedMotion} from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Terminal,
  Code2,
  Sparkles
} from "lucide-react";
const resumeLink =
  "https://drive.google.com/file/d/1Sqre3wQospJ_chdg7dq5tr-BCiAenwvP/view?usp=sharing";
import {greeting, socialMediaLinks} from "../../portfolio";
import "./Greeting.scss";

export default function Greeting() {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = (delay = 0, y = 20) => ({
    initial: {opacity: 0, y: shouldReduceMotion ? 0 : y},
    animate: {opacity: 1, y: 0},
    transition: {
      duration: shouldReduceMotion ? 0.1 : 0.5,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.25, 0.1, 0.25, 1]
    }
  });

  const handleScrollToProjects = e => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({top, behavior: "smooth"});
    }
  };

  const handleScrollDown = e => {
    e.preventDefault();
    const target = document.getElementById("about");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({top, behavior: "smooth"});
    }
  };

  return (
    <div
      className="relative min-h-[calc(100vh-68px)] flex flex-col justify-between pt-16 sm:pt-20 lg:pt-24 pb-8 overflow-hidden bg-white"
      id="greeting"
    >
      {/* Main Content Grid */}
      <div className="content-container my-auto z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Information */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Availability Status Pill */}
            <motion.div
              {...fadeIn(0.1, 15)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-800 text-xs font-mono font-medium tracking-wide mb-5 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span>Available for Opportunities</span>
            </motion.div>

            {/* Professional Identity Banner */}
            <motion.div
              {...fadeIn(0.18, 15)}
              className="text-xs sm:text-sm font-mono text-[#0D9488] font-semibold mb-3 flex flex-wrap items-center gap-2"
            >
              <span>Full-Stack Developer</span>
              <span className="text-[#C5CFDA]">•</span>
              <span>Software Engineer</span>
              <span className="text-[#C5CFDA]">•</span>
              <span>Cloud &amp; DevOps Enthusiast</span>
            </motion.div>

            {/* Hero Main Headline */}
            <motion.h1
              {...fadeIn(0.25, 20)}
              className="type-hero text-[#171C24] tracking-tight mb-5"
            >
              Building Digital Experiences Through{" "}
              <span className="text-[#0D9488]">Code.</span>
            </motion.h1>

            {/* Narrative Introduction */}
            <motion.p
              {...fadeIn(0.35, 20)}
              className="type-body text-[#475569] text-base sm:text-lg max-w-xl leading-relaxed mb-8"
            >
              {greeting.subTitle}
            </motion.p>

            {/* Primary & Secondary CTA Buttons */}
            <motion.div
              {...fadeIn(0.45, 20)}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <motion.a
                whileHover={{y: shouldReduceMotion ? 0 : -2}}
                whileTap={{y: 0}}
                href="#projects"
                onClick={handleScrollToProjects}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white font-heading font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                whileHover={{y: shouldReduceMotion ? 0 : -2}}
                whileTap={{y: 0}}
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-[#DCE2E9] bg-white hover:bg-[#F5F7FA] text-[#171C24] font-heading font-semibold text-sm transition-all duration-200 hover:border-[#C5CFDA] shadow-sm"
              >
                <Download className="w-4 h-4 text-[#0D9488]" />
                <span>View Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Channels Strip */}
            <motion.div
              {...fadeIn(0.55, 20)}
              className="flex items-center gap-3 pt-6 border-t border-[#DCE2E9] w-full max-w-lg"
            >
              <span className="text-xs font-mono text-[#708090] mr-2">
                Connect:
              </span>

              {socialMediaLinks.github && (
                <motion.a
                  whileHover={{y: shouldReduceMotion ? 0 : -2}}
                  href={socialMediaLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-[#475569] hover:text-[#0D9488] hover:bg-[#F0FDFA] border border-[#DCE2E9] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-[#171C24]" />
                </motion.a>
              )}

              {socialMediaLinks.linkedin && (
                <motion.a
                  whileHover={{y: shouldReduceMotion ? 0 : -2}}
                  href={socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-[#475569] hover:text-[#0D9488] hover:bg-[#F0FDFA] border border-[#DCE2E9] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                </motion.a>
              )}

              {socialMediaLinks.gmail && (
                <motion.a
                  whileHover={{y: shouldReduceMotion ? 0 : -2}}
                  href={`mailto:${socialMediaLinks.gmail}`}
                  className="p-2.5 rounded-lg text-[#475569] hover:text-[#0D9488] hover:bg-[#F0FDFA] border border-[#DCE2E9] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                  aria-label="Email Tanish"
                >
                  <Mail className="w-4 h-4 text-[#ea4335]" />
                </motion.a>
              )}
            </motion.div>
          </div>

          {/* Right Column: Light Code Editor Terminal Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.96,
                y: shouldReduceMotion ? 0 : 20
              }}
              animate={{opacity: 1, scale: 1, y: 0}}
              transition={{
                duration: shouldReduceMotion ? 0.1 : 0.6,
                delay: 0.3
              }}
              whileHover={{
                y: shouldReduceMotion ? 0 : -4,
                transition: {duration: 0.25}
              }}
              className="relative w-full max-w-lg"
            >
              {/* Developer Terminal Card — Light Editor Style */}
              <div className="relative rounded-xl border border-[#DCE2E9] bg-white shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden text-left">
                {/* Titlebar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#DCE2E9] bg-[#F5F7FA]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#708090]">
                    <Terminal className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>tanish.config.ts</span>
                  </div>

                  <span className="text-[10px] font-mono font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                    active
                  </span>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto space-y-2">
                  <div className="text-[#64748B]">
                    <span className="text-[#0D9488] font-bold">
                      export const
                    </span>{" "}
                    <span className="text-[#171C24] font-semibold">
                      engineer
                    </span>{" "}
                    = &#123;
                  </div>

                  <div className="pl-4">
                    <span className="text-[#64748B]">name:</span>{" "}
                    <span className="text-[#15803D] font-medium">
                      "Tanish Khandelwal"
                    </span>
                    ,
                  </div>

                  <div className="pl-4">
                    <span className="text-[#64748B]">role:</span>{" "}
                    <span className="text-[#15803D] font-medium">
                      "Full-Stack Software Engineer"
                    </span>
                    ,
                  </div>

                  <div className="pl-4">
                    <span className="text-[#64748B]">focus:</span>{" "}
                    <span className="text-[#171C24]">[</span>
                    <span className="text-[#B45309]">
                      "Scalable Architecture"
                    </span>
                    , <span className="text-[#B45309]">"Cloud"</span>,{" "}
                    <span className="text-[#B45309]">"DevOps"</span>
                    <span className="text-[#171C24]">]</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-[#64748B]">coreStack:</span> &#91;
                    <div className="pl-2 flex flex-wrap gap-1.5 my-2">
                      {[
                        "Java",
                        "React",
                        "Node.js",
                        "MongoDB",
                        "Docker",
                        "Kubernetes",
                        "AWS"
                      ].map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#F5F7FA] border border-[#DCE2E9] text-xs font-medium text-[#171C24]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="text-[#171C24]">&#93;,</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-[#64748B]">values:</span> &#123;
                    <div className="pl-4 text-xs text-[#475569]">
                      cleanCode:{" "}
                      <span className="text-[#0D9488] font-semibold">true</span>
                      ,
                      <br />
                      performanceFirst:{" "}
                      <span className="text-[#0D9488] font-semibold">true</span>
                    </div>
                    <span className="text-[#171C24]">&#125;</span>
                  </div>

                  <div className="text-[#171C24]">&#125;;</div>
                </div>

                {/* Terminal Status Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-t border-[#DCE2E9] bg-[#F5F7FA] text-[11px] font-mono text-[#708090]">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span className="font-medium text-[#475569]">
                      Full-Stack Systems
                    </span>
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-emerald-700">
                    <Sparkles className="w-3 h-3" />
                    <span>Building &amp; Learning</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.8, duration: 0.5}}
        className="flex justify-center pt-8 pb-2 z-10"
      >
        <a
          href="#about"
          onClick={handleScrollDown}
          aria-label="Scroll to About Section"
          className="group flex flex-col items-center gap-1.5 text-xs font-mono text-[#708090] hover:text-[#171C24] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded-md p-1"
        >
          <span className="tracking-widest text-[10px] text-[#708090] group-hover:text-[#171C24] transition-colors">
            Explore
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#0D9488]" />
        </a>
      </motion.div>
    </div>
  );
}
