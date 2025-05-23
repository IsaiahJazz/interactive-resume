import React from "react";

const NavBar: React.FC = () => {
  return (
    //Need to add an add to top button
    <nav className="bg-[linear-gradient(90deg,#FAD961,#F76B1C)] text-black py-4 px-8 flex justify-between sticky top-0 z-1">
      <div className="flex space-x-6">
        <a
          href="#about"
          className="font-semibold text-xl hover:text-white transition"
        >
          About
        </a>
        <a
          href="#skills"
          className="font-semibold text-xl hover:text-white transition"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="font-semibold text-xl hover:text-white transition"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="font-semibold text-xl hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
