import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
const resumeLink = "https://drive.google.com/file/d/1Sqre3wQospJ_chdg7dq5tr-BCiAenwvP/view?usp=sharing";

const navLinks = [
  { name: "Home", href: "#greeting", id: "greeting" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("greeting");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["greeting", "about", "skills", "experience", "projects", "contact"];
      const scrollY = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#DCE2E9] shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-[#DCE2E9]/60"
      }`}
    >
      <div className="content-container flex items-center justify-between h-[68px]">
        {/* Personal Logo */}
        <a
          href="#greeting"
          onClick={(e) => handleNavClick(e, "#greeting")}
          className="flex items-center gap-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded-md py-1"
          aria-label="Tanish Khandelwal Home"
        >
          <span className="font-heading font-extrabold text-xl tracking-tight text-[#171C24]">
            TANISH<span className="text-[#0D9488]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] ${
                  isActive
                    ? "text-[#171C24] font-bold"
                    : "text-[#475569] hover:text-[#171C24]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#0D9488] rounded-full"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          {/* Resume Button */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
          >
            <Download className="w-3.5 h-3.5 text-white" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-lg text-[#171C24] hover:bg-[#F5F7FA] border border-[#DCE2E9] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#171C24]" />
            ) : (
              <Menu className="w-5 h-5 text-[#171C24]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-b border-[#DCE2E9] px-6 pt-3 pb-6 space-y-2 shadow-lg"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#F0FDFA] text-[#171C24] font-bold border-l-3 border-[#0D9488]"
                        : "text-[#475569] hover:text-[#171C24] hover:bg-[#F5F7FA]"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#DCE2E9]">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-semibold transition-colors"
              >
                <Download className="w-4 h-4 text-white" />
                <span>View Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
