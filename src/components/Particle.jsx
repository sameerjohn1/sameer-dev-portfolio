'use client';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useMemo, useState, useContext } from 'react';
import { loadSlim } from '@tsparticles/slim';
import { ThemeContext } from '../context/ThemeContext';

const ParticlesComponent = ({ id }) => {
  const { theme } = useContext(ThemeContext);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => {
    const particleColor = theme === 'dark' ? '#FFFFFF' : '#000000';

    return {
      background: { color: { value: '' } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'repulse' },
          onHover: { enable: true, mode: 'grab' },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 100 },
          repulse: { distance: 200 },
        },
      },
      particles: {
        color: { value: particleColor },
        links: {
          color: particleColor,
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: { default: 'bounce' },
          random: true,
          speed: 3,
          straight: false,
        },
        number: { density: { enable: true }, value: 150 },
        opacity: { value: 1.0 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    };
  }, [theme]);

  if (!init) return null;

  return (
    <Particles
      id={id}
      options={options}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default ParticlesComponent;
