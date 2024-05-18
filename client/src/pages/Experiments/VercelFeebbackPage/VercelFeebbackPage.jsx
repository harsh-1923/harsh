import React from "react";
import "./VercelFeebbackPage.css";
import VercelFeedback from "../../../components/Experiments/VercelFeedback/VercelFeedback";

import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle.jsx";
const VercelFeebbackPage = () => {
  return (
    <div className="vf-page-wrap">
      <ExpPageTitle title="Vercel Feedback" date="April, 2024" />
      <div className="vf-demo-wrap">
        <VercelFeedback />
      </div>
    </div>
  );
};

export default VercelFeebbackPage;
