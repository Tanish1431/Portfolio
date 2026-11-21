import React, {useEffect} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import About from "./about/About";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Education from "./education/Education";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.scss";

const Main = () => {
  useEffect(() => {
    try {
      window.localStorage.setItem("isDark", "false");
    } catch (e) {
      // Ignore
    }
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="main-content">
      <StyleProvider value={{isDark: false, changeTheme: () => {}}}>
        <Header />

        {/* 1. Hero Section */}
        <section className="section-white !py-0" id="greeting">
          <Greeting />
        </section>

        {/* 2. About Me */}
        <section className="section-alt" id="about">
          <About />
        </section>

        {/* 3. Technical Skills */}
        <section className="section-white" id="skills">
          <Skills />
        </section>

        {/* 4. Experience & Education */}
        <section className="section-alt" id="experience">
          <WorkExperience />
          <Education />
        </section>

        {/* 5. Projects */}
        <section className="section-white" id="projects">
          <StartupProject />
        </section>

        {/* 6. Achievements */}
        <section className="section-alt" id="achievements">
          <Achievement />
        </section>

        {/* 7. Contact & Footer */}
        <section className="section-white" id="contact">
          <Contact />
          <Footer />
        </section>

        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

export default Main;
