import React from "react";
import "./HomePage.css";
import gsap from "gsap";
import HeroSection from "./HeroSection/HeroSection";
import Timeline from "../../components/Timeline/Timeline";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ExperimentSlider from "../../components/ExperimentSlider/ExperimentSlider";

const HomePage = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".reveal-animation",
      {
        scale: 0.8,
        opacity: 0,
      },
      { y: 0, scale: 1, opacity: 1, duration: 0.5, stagger: 0.2 }
    );
  }, []);
  return (
    <div className="homepage-wrap">
      <HeroSection />
      <SectionHeader title="Experience" />
      <Timeline />
      <SectionHeader title="Experiments" />
      <ExperimentSlider />

      <div className="filler" />
    </div>
  );
};

export default HomePage;
