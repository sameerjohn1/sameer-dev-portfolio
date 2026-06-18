'use client';

import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Cursor = () => {
  const { theme } = useContext(ThemeContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const cursorColor = 'rgba(219, 39, 119, 0.9)';
  const glowColor = 'rgba(219, 39, 119, 0.5)';

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 2147483647,
        opacity: visible ? 1 : 0,
        transform: clicked
          ? 'translate(-50%, -50%) scale(1.8)'
          : 'translate(-50%, -50%) scale(1)',
        transition: 'transform 0.15s ease-out, box-shadow 0.25s ease',
        background: `radial-gradient(circle, ${cursorColor} 0%, transparent 70%)`,
        boxShadow: clicked
          ? `0 0 18px ${glowColor}, 0 0 35px ${glowColor}`
          : `0 0 8px ${glowColor}`,
      }}
    />
  );
};

export default Cursor;
