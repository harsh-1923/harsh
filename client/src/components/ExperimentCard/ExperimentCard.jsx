import React from "react";
import "./ExperimentCard.css";

import { Link } from "react-router-dom";

const ExperimentCard = ({
  title = "Processing Buttons",
  subtitle,
  src = "https://imharsh.s3.eu-north-1.amazonaws.com/ProcessingButton.mp4",
  link = "/exp/processing-button",
}) => {
  return (
    <Link to={link}>
      <div className="exp-card-wrap">
        <div className="exp-card-content">
          <video className="exp-card-video" src={src} autoPlay loop />
        </div>
        <div className="exp-card-info-wrap">
          <p className="exp-card-title">{title}</p>
          <small style={{ color: "var(--gray-11)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing
          </small>
        </div>
      </div>
    </Link>
  );
};

export default ExperimentCard;
