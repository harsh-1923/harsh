import React from "react";
import "./AppleNotesMenuPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import AppleNotesMenu from "../../../components/Experiments/AppleNotesMenu/AppleNotesMenu";
import DemoPopover from "../../../components/DemoPopover/DemoPopover.jsx";
import MoreExpBar from "../../../components/MoreExpBar/MoreExpBar.jsx";

const AppleNotesMenuPage = () => {
  return (
    <div className="apn-page-wrap">
      <ExpPageTitle title="Apple Notes Menu" date="April, 2024" />
      <div className="apn-demo-wrap">
        <AppleNotesMenu />

        <div className="demo-trigger">
          <DemoPopover
            src="https://imharsh.s3.eu-north-1.amazonaws.com/Apple_Notes_Menu.mp4"
            title="Apple Notes Menu"
          />
        </div>
      </div>

      <MoreExpBar
        leftTitle="Spotify Filters"
        leftLink="/exp/spotify-filters"
        rightTitle="System Status"
        rightLink="/exp/system-status"
      />
    </div>
  );
};

export default AppleNotesMenuPage;
