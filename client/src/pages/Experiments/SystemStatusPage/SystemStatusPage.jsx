import React from "react";
import "./SystemStatusPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import SystemStatus from "../../../components/Experiments/SystemStatus/SystemStatus";
import DemoPopover from "../../../components/DemoPopover/DemoPopover";
import MoreExpBar from "../../../components/MoreExpBar/MoreExpBar";

const SystemStatusPage = () => {
  return (
    <div className="ss-page-wrap">
      <ExpPageTitle title="System Status" date="April, 2024" />
      <div className="ss-demo-wrap">
        <SystemStatus />
        <div className="demo-trigger">
          <DemoPopover
            src="https://imharsh.s3.eu-north-1.amazonaws.com/System_Status.mp4"
            title="System Status"
          />
        </div>
      </div>

      <div className="page-content">
        <p>
          This was a part of a dashboard widget exploration for system health
          monitoring at work. Built with data-attributes and some CSS.
        </p>
        <p>
          To simulate system health for the demo, the current time in the
          component is the same as when you view the component. Each bar
          represents the system’s health at a fixed interval. You can view the
          status for each interval by hovering over or tapping on the specific
          bar.
        </p>
      </div>
      <MoreExpBar
        leftTitle="Apple Notes Menu"
        leftLink="/exp/apple-notes-menu"
        rightTitle="Tab Switcher"
        rightLink="/exp/tab-switcher"
      />
    </div>
  );
};

export default SystemStatusPage;
