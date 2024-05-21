import React from "react";
import "./ExperimentSlider.css";
import ExperimentCard from "../ExperimentCard/ExperimentCard";

const experiments = [
  {
    title: "Slider Button",
    link: "/exp/slider-button",
    tag: "Slide to confirm button.",
    src: "https://imharsh.s3.eu-north-1.amazonaws.com/Slider_Button.mp4",
  },
  {
    title: "Dynamic Button",
    link: "/exp/dynamic-button",
    tag: "State specific button states.",
    src: "https://imharsh.s3.eu-north-1.amazonaws.com/ProcessingButton.mp4",
  },
  {
    title: "Vercel Feedback",
    link: "/exp/vercel-feedback",
    tag: "Feedback forms from Vercel.",
    src: "https://imharsh.s3.eu-north-1.amazonaws.com/Vercel_Feedback.mp4",
  },
  {
    title: "Spotify Filters",
    link: "/exp/spotify-filters",
    tag: "Filters from Spotify Web.",
    src: "https://imharsh.s3.eu-north-1.amazonaws.com/Spotify_FIlters.mp4",
  },
  {
    title: "Apple Notes Menu",
    link: "/exp/apple-notes-menu",
    tag: "Menu bar from Apple Notes.",
    src: "https://imharsh.s3.eu-north-1.amazonaws.com/Apple_Notes_Menu.mp4",
  },
  {
    title: "System Status",
    link: "/exp/system-status",
    tag: "System status dashboard widget",
    src: "https://imharsh.s3.eu-north-1.amazonaws.com/System_Status.mp4",
  },
  {
    title: "Tab Switcher",
    link: "/exp/tab-switcher",
    tag: "Dynamic tab indicators",
    src: "https://imharsh.s3.eu-north-1.amazonaws.com/Tab_Switcher.mp4",
  },
  {
    title: "Interactive Links",
    link: "/exp/interactive-links",
    tag: "Interactive links from Cuberto Design",
    src: "https://imharsh.s3.eu-north-1.amazonaws.com/Interactive_Links.mp4",
  },
];

const ExperimentSlider = () => {
  return (
    <div className="exp-slider-wrap">
      <div className="exp-slider-inner">
        {experiments.map((exp, idx) => (
          <ExperimentCard
            key={idx}
            src={exp.src}
            title={exp.title}
            tag={exp.tag}
            link={exp.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperimentSlider;
