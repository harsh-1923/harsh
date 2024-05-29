import React, { useRef } from "react";
import "./InstagramOptionsPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle.jsx";
import InstagramOptions from "../../../components/Experiments/InstagramOptions/InstagramOptions.jsx";
import DemoPopover from "../../../components/DemoPopover/DemoPopover.jsx";
import MoreExpBar from "../../../components/MoreExpBar/MoreExpBar.jsx";

const InstagramOptionsPage = () => {
  const testRef = useRef(null);
  return (
    <div className="igo-page-wrap">
      <ExpPageTitle title="Instagram Chat Options" date="May, 2024" />
      <div className="igo-page-banner">Tap on any text to reveal options.</div>
      <div ref={testRef} className="ig-demo-wrap">
        <InstagramOptions ref={testRef} />
        <div className="demo-trigger">
          <DemoPopover
            src="https://imharsh.s3.eu-north-1.amazonaws.com/IG_CHAT_OPTIONS.mp4"
            title="Instagram Chat Options"
          />
        </div>
      </div>
      <MoreExpBar
        leftTitle="Vercel Feedback"
        leftLink="/exp/vercel-feedback"
        rightTitle="Multi Select Menu"
        rightLink="/exp/multi-select"
      />
    </div>
  );
};

export default InstagramOptionsPage;
