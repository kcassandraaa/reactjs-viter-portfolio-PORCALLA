import React from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-rose-300 sticky top-0 z-50 shadow-md py-4 ">
        <div className="container mx-auto px-10 flex items-center justify-between ">
          <div className="flex gap-3 items-center">
            <a href="#" className="font-bold text-white">
              PORTFOLIO
            </a>
          </div>

          <div className=" hidden md:flex gap-9 text-white font-semibold">
            <a href="#about" className="hover:text-rose-500 transition">
              About
            </a>
            <a href="#skills" className="hover:text-rose-500 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-rose-500 transition">
              Projects
            </a>
            <a href="#contacts" className="hover:text-rose-500 transition">
              Contact
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-xl font-semibold text-white/90 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-gray-700 text-2xl">
          <a
            href="#"
            className="hover:text-rose-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-rose-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-rose-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-rose-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contacts"
            className="hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
