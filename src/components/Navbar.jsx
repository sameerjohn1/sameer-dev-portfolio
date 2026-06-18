"use client";

import { useState, useContext } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    "home",
    "about",
    "skills",
    "work",
    "projects",
    "testimonials",
    "contact",
  ];

  return (
    <div
      className={`fixed w-full h-[80px] flex justify-between z-[9999] items-center px-4 ${
        theme === "dark"
          ? "bg-[#0a192f] text-gray-300"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div>
        <h3 style={{ width: "50px", cursor: "pointer" }}>Sameer</h3>
      </div>

      {/* menu */}
      <ul className="hidden md:flex items-center">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li onClick={toggleTheme} className="cursor-pointer ml-4">
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : `fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-[9999] ${
                theme === "dark" ? "bg-[#0a192f]" : "bg-gray-100"
              }`
        }
      >
        <div
          onClick={handleClick}
          className="absolute top-5 right-5 cursor-pointer"
        >
          <FaTimes size={30} />
        </div>

        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="home" smooth duration={500}>
            Home
          </Link>
        </li>

        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="about" smooth duration={500}>
            About
          </Link>
        </li>

        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="skills" smooth duration={500}>
            Skills
          </Link>
        </li>

        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="work" smooth duration={500}>
            Work
          </Link>
        </li>

        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="projects" smooth duration={500}>
            Projects
          </Link>
        </li>

        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="testimonials" smooth duration={500}>
            Testimonials
          </Link>
        </li>

        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="contact" smooth duration={500}>
            Contact
          </Link>
        </li>

        {/* THEME TOGGLE */}
        <li onClick={toggleTheme} className="py-6 text-3xl cursor-pointer">
          {theme === "dark" ? <FaSun size={30} /> : <FaMoon size={30} />}
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <a href="https://www.linkedin.com/in/sameer-john-dev/">
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <span className="flex justify-between items-center w-full text-gray-300">
                Linkedin <FaLinkedin size={30} />
              </span>
            </li>
          </a>
          <a href="https://github.com/sameerjohn1">
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <span className="flex justify-between items-center w-full text-gray-300">
                Github
                <FaGithub size={30} />
              </span>
            </li>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sameerprogrammer5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <span className="flex justify-between items-center w-full text-gray-300">
                Gmail <HiOutlineMail size={30} />
              </span>
            </li>
          </a>
          <a
            href="https://wa.me/923296333301"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500">
              <span className="flex justify-between items-center w-full text-gray-300">
                WhatsApp <FaWhatsapp size={30} />
              </span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
