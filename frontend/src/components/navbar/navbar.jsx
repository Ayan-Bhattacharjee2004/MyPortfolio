import React from 'react';
import './navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="logo-container">PortFolio</div>
      <ul>
        <li><a onClick={() => scrollToSection("home")}>Home</a></li>
        <li><a onClick={() => scrollToSection("about")}>About</a></li>
        <li><a onClick={() => scrollToSection("projects")}>Projects</a></li>
        <li><a onClick={() => scrollToSection("contact")}>Contact</a></li>
        <li>
          <a onClick={() => scrollToSection("contact")} className="talk-btn">
            Let's Talk
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
