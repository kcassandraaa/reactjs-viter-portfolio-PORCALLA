import React from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white sticky top-0 z-50 shadow-md py-4 ">
        <div className="container mx-auto flex items-center justify-between ">
          <div className="flex gap-3 items-center">
            <img
              src="./images/logo.webp"
              alt="logo"
              className="size-7 object-cover"
            />
            <h3 className="font-bold bg-gradient-to-r from-fuchsia-700 to-rose-500 text-transparent bg-clip-text text-xl">
              PORTFOLIO
            </h3>
          </div>

          <div className=" hidden md:flex gap-9 text-gray-700 font-semibold">
            <a href="#" className="hover:text-rose-500 transition">
              About
            </a>
            <a href="#skills" className="hover:text-rose-500 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-rose-500 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-rose-500 transition">
              Contact
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-xl font-semibold focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : "☰"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
