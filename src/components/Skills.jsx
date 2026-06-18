'use client';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Image from 'next/image';

const skills = [
  { imageUrl: '/assets/icons/javascript.svg', name: 'JavaScript', type: 'Frontend' },
  { imageUrl: '/assets/icons/react.svg', name: 'React', type: 'Frontend' },
  { imageUrl: '/assets/icons/nextjs.svg', name: 'Next.js', type: 'Frontend' },
  { imageUrl: '/assets/icons/redux.svg', name: 'Redux', type: 'State Management' },
  { imageUrl: '/assets/icons/tailwindcss.svg', name: 'Tailwind CSS', type: 'Frontend' },
  { imageUrl: '/assets/icons/css.svg', name: 'CSS', type: 'Frontend' },
  { imageUrl: '/assets/icons/github.svg', name: 'GitHub', type: 'Version Control' },
  { imageUrl: '/assets/icons/express.svg', name: 'Express', type: 'Backend' },
  { imageUrl: '/assets/icons/git.svg', name: 'Git', type: 'Version Control' },
  { imageUrl: '/assets/icons/html.svg', name: 'HTML', type: 'Frontend' },
  { imageUrl: '/assets/icons/mongodb.svg', name: 'MongoDB', type: 'Database' },
  { imageUrl: '/assets/icons/motion.svg', name: 'Motion', type: 'Animation' },
  { imageUrl: '/assets/icons/mui.svg', name: 'Material-UI', type: 'Frontend' },
  { imageUrl: '/assets/icons/nodejs.svg', name: 'Node.js', type: 'Backend' },
];

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      name="skills"
      className={`w-full py-20 ${
        theme === 'dark' ? 'bg-[#0a192f] text-gray-300' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-4">These are the technologies I&apos;ve worked with</p>
        </div>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name} title={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
