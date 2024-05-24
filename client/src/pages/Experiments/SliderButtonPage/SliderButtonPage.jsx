import React from "react";
import "./SliderButtonPage.css";

import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle.jsx";
import SliderButton from "../../../components/Experiments/SliderButton/SliderButton.jsx";
import DemoPopover from "../../../components/DemoPopover/DemoPopover.jsx";
import MoreExpBar from "../../../components/MoreExpBar/MoreExpBar.jsx";
import { Link } from "react-router-dom";

const SliderButtonPage = () => {
  return (
    <div className="sb-page-wrap">
      <ExpPageTitle title="Slider Button" date="May, 2024" />
      <div className="sb-demo-wrap">
        <SliderButton />

        <div className="demo-trigger">
          <DemoPopover
            src="https://imharsh.s3.eu-north-1.amazonaws.com/Slider_Button.mp4"
            title="Slider Button"
          />
        </div>
      </div>

      <div className="page-content">
        <p>
          I frequently use the <span> slide-to-confirm button </span> on{" "}
          <a
            className="inline-links"
            href="https://www.swiggy.com"
            target="_blank"
          >
            Swiggy
          </a>
          , an Indian food delivery service, and wanted to make something
          similar - but for the web. Initially, I planned to use JavaScript for
          this, but I decided to experiment with Framer Motion instead.
        </p>
        <p>
          I utilized the drag gesture from Framer Motion to create a draggable
          div that can be tapped and dragged along the x-axis only. The content
          of the div changes to a Chevron Right Icon when the offset crosses 80%
          of the button width, and to a Check Mark Icon when it reaches the
          maximum possible drag distance. Once it reaches the maximum offset,
          the state changes to "processing," and a Loader Icon replaces the
          Chevron Icon.
        </p>
        <p>
          When the payment is confirmed by the server, the draggable div, which
          now displays the Loader Icon, morphs into a confirmation message that
          occupies the entire button. This animation is supported by Framer
          Motion's{" "}
          <a
            className="inline-links"
            href="https://www.framer.com/motion/layout-animations/#shared-layout-animations"
            target="_blank"
          >
            Shared Layout Animations.
          </a>
        </p>
      </div>
      <MoreExpBar
        leftTitle="Multi Select Menu"
        leftLink="/exp/multi-select"
        rightTitle="Dynamic Button"
        rightLink="/exp/dynamic-button"
      />
    </div>
  );
};

export default SliderButtonPage;
