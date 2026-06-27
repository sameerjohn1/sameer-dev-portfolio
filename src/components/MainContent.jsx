"use client";

import React, { Suspense, lazy } from "react";
import { LazyFadeIn } from "./LazyFadeIn";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

// Lazy-loaded components
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Skills = lazy(() => import("./Skills"));
const Work = lazy(() => import("./Work"));
const Projects = lazy(() => import("./Projects"));
const Testimonials = lazy(() => import("./Testimonials"));
const Contact = lazy(() => import("./Contact"));

export default function MainContent() {
  return (
    <div className="relative">
      <Navbar />
      <ScrollToTop />
      <main>
        <Suspense fallback={<div>Loading Home...</div>}>
          <LazyFadeIn>
            <Home />
          </LazyFadeIn>
        </Suspense>
        <Suspense fallback={<div>Loading About...</div>}>
          <LazyFadeIn>
            <About />
          </LazyFadeIn>
        </Suspense>
        <Suspense fallback={<div>Loading Skills...</div>}>
          <LazyFadeIn>
            <Skills />
          </LazyFadeIn>
        </Suspense>
        <Suspense fallback={<div>Loading Work...</div>}>
          <LazyFadeIn>
            <Work />
          </LazyFadeIn>
        </Suspense>
        <Suspense fallback={<div>Loading Projects...</div>}>
          <LazyFadeIn>
            <Projects />
          </LazyFadeIn>
        </Suspense>
        <Suspense fallback={<div>Loading Testimonials...</div>}>
          <LazyFadeIn>
            <Testimonials />
          </LazyFadeIn>
        </Suspense>
        <Suspense fallback={<div>Loading Contact...</div>}>
          <LazyFadeIn>
            <Contact />
          </LazyFadeIn>
        </Suspense>
      </main>
    </div>
  );
}
