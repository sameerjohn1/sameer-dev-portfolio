"use client";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";

export default function MainContent() {
  return (
    <div className="relative">
      <Navbar />
      <ScrollToTop />
      <main>
        <Home />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
