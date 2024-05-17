import React from "react";
import "./ExperimentSlider.css";
import ExperimentCard from "../ExperimentCard/ExperimentCard";

const ExperimentSlider = () => {
  return (
    <div className="exp-slider-wrap reveal-animation">
      <div className="exp-slider-inner">
        {Array(5)
          .fill(null)
          .map((_, idx) => (
            <ExperimentCard key={idx} />
          ))}
      </div>
    </div>
  );
};

export default ExperimentSlider;
