import React from "react";
import "./HeroSection.css";

import BG_HERO from "../../../assets/BG_HERO.jpg";
import { MoveRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div
      style={{ backgroundImage: `url(${BG_HERO})` }}
      className="hero-section-wrap reveal-animation"
    >
      <div className="hero-section-overlay"></div>
      <div className="hero-section-content">
        <p className="hero-section-header reveal-animation">
          Software Developer
        </p>
        <p className="hero-section-header reveal-animation">
          & Design Enthusiast.
        </p>

        <p className="hero-section-tagline reveal-animation">
          Experimenting with user experience, interaction design and other web
          technologies.
        </p>

        <button
          className="hero-section-cta reveal-animation"
          onClick={() => scrollToContact()}
        >
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
