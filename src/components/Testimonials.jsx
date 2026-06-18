'use client';

import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sara Mohamed',
    location: 'Jakarta',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly and easy to use.",
  },
  {
    name: 'Atend John',
    location: 'California',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'I had a last-minute business trip, and the system helped me find a good hotel quickly with a smooth booking process.',
  },
];

export default function Testimonials() {
  const { theme } = useContext(ThemeContext);
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const current = testimonials[index];

  return (
    <div
      name="testimonials"
      className={`py-16 px-4 md:px-16 z-[50] ${
        theme === 'dark' ? 'bg-[#0a192f] text-gray-300' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col md:flex-row gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2">
          <span
            className={`text-sm px-4 py-1 rounded-full inline-block mb-4 ${
              theme === 'dark'
                ? 'bg-white/10 text-gray-300'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            Testimonials
          </span>

          <h2
            className={`text-2xl md:text-4xl font-semibold leading-tight mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            What our clients are saying about us?
          </h2>

          <p
            className={`text-sm md:text-base ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Discover real feedback from users about their experience with our platform.
          </p>

          <div className="flex gap-3 mt-6 relative z-[50]">
            <button
              type="button"
              onClick={prev}
              className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition ${
                theme === 'dark'
                  ? 'bg-[#112240] text-white hover:bg-[#1a3356]'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={next}
              className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition ${
                theme === 'dark'
                  ? 'bg-[#112240] text-white hover:bg-[#1a3356]'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex justify-center z-[50]">
          <div
            className={`w-full max-w-sm rounded-xl p-6 shadow-lg ${
              theme === 'dark' ? 'bg-[#112240] text-white' : 'bg-white text-black'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Image
                  src={current.image}
                  alt={current.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-sm">{current.name}</h4>
                  <p
                    className={`text-xs ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {current.location}
                  </p>
                </div>
              </div>

              <div className="flex text-yellow-400">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
            </div>

            <p
              className={`text-sm leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {current.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
