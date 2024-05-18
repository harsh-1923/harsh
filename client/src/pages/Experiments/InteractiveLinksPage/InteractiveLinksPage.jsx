import React from "react";
import "./InteractiveLinksPage.css";

import InteractiveLinks from "../../../components/Experiments/InteractiveLinks/InteractiveLinks.jsx";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle.jsx";

const InteractiveLinksPage = () => {
  return (
    <div className="interactive-link-page-wrap">
      <ExpPageTitle title="Interactive Links" date="April, 2024" />
      <div className="interactive-link-demo-wrap">
        <InteractiveLinks />
      </div>
    </div>
  );
};

export default InteractiveLinksPage;
