import React, { useRef, useEffect } from "react";
import "./ExperimentSlider.css";
import ExperimentCard from "../ExperimentCard/ExperimentCard";

import EXPERIMENTS from "./experiments";

import { ChevronLeft, ChevronRight } from "lucide-react";

const ExperimentSlider = () => {
  const sliderRef = useRef(null);
  const SCROLL_AMOUNT = 350;

  const scrollLeft = () => {
    console.log("scroll left");
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= SCROLL_AMOUNT;
    }
  };

  const scrollRight = () => {
    console.log("scroll right");
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += SCROLL_AMOUNT;
    }
  };

  return (
    <div className="exp-slider-wrap">
      <div className="exp-slider-header-wrap">
        <h2
          style={{
            color: "inherit",
            fontSize: "22px",
            fontWeight: 500,
            margin: "var(--gap-xxl) 0",
          }}
        >
          Experiments
        </h2>
        <div className="exp-slider-button-tray">
          <button onClick={() => scrollLeft()} className="exp-slider-button">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => scrollRight()} className="exp-slider-button">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="exp-card-slider" ref={sliderRef}>
        <div className="exp-slider-inner">
          {EXPERIMENTS.map((exp, idx) => (
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
    </div>
  );
};

export default ExperimentSlider;
