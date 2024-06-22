import React from "react";
import "./SliderGalleryPage.css";
import SliderGallery from "../../../components/ui/SliderGallery/SliderGallery";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle.jsx";

import F1 from "./F1.jsx";
import MoreExpBar from "../../../components/MoreExpBar/MoreExpBar.jsx";
import DemoPopover from "../../../components/DemoPopover/DemoPopover.jsx";

const SliderGalleryPage = () => {
  return (
    <div className="sgp-wrap">
      <ExpPageTitle title="Gallery" date="June 2024" />
      <div className="sgp-demo-wrap">
        <F1 />
        <h3>Tap on any image to expand.</h3>
        <SliderGallery />
        {/* <div className="demo-trigger">
          <DemoPopover
            src="https://imharsh.s3.eu-north-1.amazonaws.com/F1Gallery.mp4"
            title="F1 Gallery"
          />
        </div> */}
      </div>
      <MoreExpBar
        leftTitle="Instagram Options"
        leftLink="/exp/ig-chat-options"
        rightTitle="Apple Notes Menu"
        rightLink="/exp/apple-notes-menu"
      />
    </div>
  );
};

export default SliderGalleryPage;
