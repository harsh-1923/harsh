import React from "react";
import "./ExperimentCard.css";

import { Link } from "react-router-dom";

const ExperimentCard = ({ title = "Processing Buttons", tag, src, link }) => {
  return (
    <Link to={link}>
      <div className="exp-card-wrap">
        <div className="exp-card-content">
          <video
            className="exp-card-video"
            src={src}
            autoPlay
            loop
            muted
            showControls="false"
            controlsList="nofullscreen"
            disablePictureInPicture
          />
        </div>
        <div className="exp-card-info-wrap">
          <p className="exp-card-title">{title}</p>
          <p style={{ color: "var(--gray-11)", fontSize: "14px" }}>{tag}</p>
        </div>
      </div>
    </Link>
  );
};

export default ExperimentCard;
