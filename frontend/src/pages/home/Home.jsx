import React, { useState, useEffect } from "react";
import "./home.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

const words = ["Developer", "Student", "Gamer", "Learner"]; // Words to cycle through

const Home = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 1000; // Pause before deleting
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      typingSpeed = 500; // Pause before typing next word
    }

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div id="home" className="home-container">
      <div className="content-wrapper">
        <div className="left-content">
          <div className="name-badge">Ayan Bhattacharjee</div>

          <h1 className="headline">
            HEY! I'M AYAN
            <br />
            <span className="developer-text">I'M A {text}</span>
          </h1>

          <p className="description">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
          </p>

          <div className="cta-section">
            <button className="get-in-touch-btn" onClick={() => scrollToSection("contact")}>
              GET IN TOUCH <span className="arrow">→</span>
            </button>

            <div className="social-icons">
              <a href="#" className="social-icon facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon dribbble">
                <FaDribbble />
              </a>
              <a href="#" className="social-icon linkedin">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="right-content">
          <div className="image-container">
            <img src="/photo.png" alt="Ayan Bhattacharjee" className="profile-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
