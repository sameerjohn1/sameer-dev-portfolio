"use client";

import { useEffect, useState } from "react";

const text =
  "React.js & Next.js Developer | TypeScript · Redux Toolkit · TanStack Query | MERN Stack";

const Typewriter = () => {
  const [displayText, setDisplayText] = useState("");

  const [isDeleting, setIsDeleting] = useState(false);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index + 1));

        setIndex(index + 1);
      }, 60);
    } else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Pause after typing
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index - 1));

        setIndex(index - 1);
      }, 30);
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500); // Pause before typing again
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <>
      {displayText}

      <span className="animate-pulse">|</span>
    </>
  );
};

export default Typewriter;
