'use client';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { projectData } from '../data/projects';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      name="projects"
      className={`w-full py-20 z-[9999] ${
        theme === 'dark' ? 'bg-[#0a192f] text-gray-300' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full">
        <div className="pb-8">
          <p
            className={`text-4xl font-bold inline border-b-4 border-pink-600 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
            }`}
          >
            Projects
          </p>
          <p className="py-6">Here are some of my personal projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="group relative rounded-xl overflow-hidden bg-white/10 shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.03] cursor-pointer border border-white/10"
            >
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-4">
                <h3
                  className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>
              </div>

              <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
