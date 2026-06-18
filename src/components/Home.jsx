'use client';

import { useState, useEffect, useRef, useContext } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { ThemeContext } from '../context/ThemeContext';
import dynamic from 'next/dynamic';

const ParticlesComponent = dynamic(() => import('./Particle'), { ssr: false });

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [showParticles, setShowParticles] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const headerElement = headerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowParticles(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (headerElement) observer.observe(headerElement);

    return () => {
      if (headerElement) observer.unobserve(headerElement);
    };
  }, []);

  return (
    <div
      name="home"
      ref={headerRef}
      className={`w-full h-screen relative ${
        theme === 'dark' ? 'bg-[#0a192f]' : 'bg-white'
      }`}
    >
      {showParticles && (
        <ParticlesComponent
          id="particles"
          className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none"
        />
      )}

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-8 flex flex-col justify-center h-full pt-20 sm:pt-0">
        <p className="text-pink-600 text-sm sm:text-base">Hi, my name is</p>
        <h1
          className={`text-3xl sm:text-7xl font-bold ${
            theme === 'dark' ? 'text-[#ccd6f6]' : 'text-gray-800'
          }`}
        >
          Sameer John
        </h1>
        <h2
          className={`text-lg sm:text-3xl mt-2 font-bold leading-snug ${
            theme === 'dark' ? 'text-[#8892b0]' : 'text-gray-600'
          }`}
        >
          React.js & Next.js Developer | TypeScript · Redux Toolkit · TanStack
          Query | MERN Stack
        </h2>
        <p
          className={`${
            theme === 'dark' ? 'text-[#8892b0]' : 'text-gray-600'
          } py-4 max-w-[700px] text-sm sm:text-base`}
        >
          Frontend-focused Full-Stack Developer with hands-on experience
          building scalable web applications. Specialized in React.js and
          Next.js with TypeScript, Redux Toolkit, and TanStack Query on the
          frontend — and Node.js with Express.js on the backend. I focus on
          clean component architecture, performance optimization, and seamless
          API integration to deliver user experiences that actually work well.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button
              className={`group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 ${
                theme === 'dark'
                  ? 'text-white border-white'
                  : 'text-gray-800 border-gray-800'
              }`}
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
