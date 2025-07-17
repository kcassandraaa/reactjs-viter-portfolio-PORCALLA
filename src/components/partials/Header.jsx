import React from "react";

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
            <h3 className="font-bold text-white">
              PORTFOLIO
            </h3>
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
    </>
  );
};

export default Header;
