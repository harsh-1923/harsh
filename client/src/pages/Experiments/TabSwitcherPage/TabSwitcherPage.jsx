import React from "react";
import "./TabSwitcherPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import TabSwitcher from "../../../components/Experiments/TabSwitcher/TabSwitcher";
import DemoPopover from "../../../components/DemoPopover/DemoPopover.jsx";
import MoreExpBar from "../../../components/MoreExpBar/MoreExpBar.jsx";

const TabSwitcherPage = () => {
  return (
    <div className="tab-switcher-page-wrap">
      <ExpPageTitle title="Tab Switcher" date="April, 2024" />
      <div className="tab-switcher-demo-wrap">
        <TabSwitcher />
        <div className="demo-trigger">
          <DemoPopover
            src="https://imharsh.s3.eu-north-1.amazonaws.com/Tab_Switcher.mp4"
            title="Tab Swithcer"
          />
        </div>
      </div>
      <MoreExpBar
        leftTitle="System Status"
        leftLink="/exp/system-status"
        rightTitle="Interactive Links"
        rightLink="/exp/interactive-links"
      />
    </div>
  );
};

export default TabSwitcherPage;
