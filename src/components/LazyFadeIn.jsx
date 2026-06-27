import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * LazyFadeIn - wraps children with a slide‑up + fade animation that triggers
 * when the component scrolls into view. Duration can be customized.
 */
export const LazyFadeIn = ({ children, duration = 0.6 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
