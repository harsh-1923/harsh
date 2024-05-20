import React from "react";
import "./MoreExpBar.css";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MoreExpBar = ({
  leftTitle = "Vercel Feedback",
  leftLink = "/exp/vercel-feedback",
  rightTitle = "Apple Notes",
  rightLink = "/exp/apple-notes-menu",
}) => {
  return (
    <div className="more-exp-bar-wrap">
      <Link to={leftLink} className="more-exp-bar-left">
        <ArrowLeft size={16} /> <small>{leftTitle}</small>
      </Link>
      <Link to={rightLink} className="more-exp-bar-right">
        <small>{rightTitle}</small>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default MoreExpBar;
