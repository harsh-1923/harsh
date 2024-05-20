import React from "react";
import "./InteractiveLinksPage.css";

import InteractiveLinks from "../../../components/Experiments/InteractiveLinks/InteractiveLinks.jsx";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle.jsx";
import DemoPopover from "../../../components/DemoPopover/DemoPopover.jsx";
import MoreExpBar from "../../../components/MoreExpBar/MoreExpBar.jsx";

const InteractiveLinksPage = () => {
  return (
    <div className="interactive-link-page-wrap">
      <ExpPageTitle title="Interactive Links" date="April, 2024" />
      <div className="interactive-link-demo-wrap">
        <InteractiveLinks />

        <div className="demo-trigger">
          <DemoPopover
            src="https://imharsh.s3.eu-north-1.amazonaws.com/Interactive_Links.mp4"
            title="Interactive Links"
          />
        </div>
      </div>

      <MoreExpBar
        leftTitle="Tab Switcher"
        leftLink="/exp/tab-switcher"
        rightTitle="Dynamic Button"
        rightLink="/exp/dynamic-button"
      />
    </div>
  );
};

export default InteractiveLinksPage;
