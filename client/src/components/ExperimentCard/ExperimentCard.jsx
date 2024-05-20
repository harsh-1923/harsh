import React from "react";
import "./ExperimentCard.css";

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ExperimentCard = ({ title = "Processing Buttons", tag, src, link }) => {
  return (
    <Link to={link}>
      <div className="exp-card-wrap">
        <button className="exp-card-link-icon-wrap">
          <ArrowUpRight size={28} strokeWidth="2" />
        </button>
        <div className="exp-card-content">
          <video
            className="exp-card-video"
            src={src}
            autoPlay
            loop
            muted
            controlsList="nofullscreen"
            disablePictureInPicture
            playsInline
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
