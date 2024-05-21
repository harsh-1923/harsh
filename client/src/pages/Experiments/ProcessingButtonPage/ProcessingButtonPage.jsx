import React from "react";
import "./ProcessingButtonPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import ProcessingButton from "../../../components/Experiments/ProcessingButton/ProcessingButton.jsx";
import DemoPopover from "../../../components/DemoPopover/DemoPopover.jsx";
import MoreExpBar from "../../../components/MoreExpBar/MoreExpBar.jsx";

const ProcessingButtonPage = () => {
  return (
    <div className="processing-page-button">
      <ExpPageTitle title="Dynamic Button" date="May 2024" />

      <div className="processing-button-demo-wrap">
        <ProcessingButton />

        <div className="demo-prompt">Tap on the button to proccess.</div>

        <div className="demo-trigger">
          <DemoPopover
            src="https://imharsh.s3.eu-north-1.amazonaws.com/ProcessingButton.mp4"
            title="Dynamic Button"
          />
        </div>
      </div>

      <div className="page-content">
        <p>
          At Airbus, we often perform backend validations for connections that
          take a few seconds to process. I noticed that during these moments,
          users typically wait passively for the results.
        </p>

        <p>
          Seeing an opportunity to enhance the user experience, I experimented
          with dynamic buttons that provide clear and engaging feedback during
          the processing state. This makes the application feel a little faster
          and makes the transitions between different states a little less
          jarring.
        </p>
        <p>
          Additionally, I introduced audio cues for both success and failure
          outcomes to notify users in case they switch to other task, window or
          screen (or even turn around for a quick chat with other colleagues xD)
        </p>
      </div>

      <MoreExpBar
        leftTitle="Slider Button"
        leftLink="/exp/slider-button"
        rightTitle="Vercel Feedback"
        rightLink="/exp/vercel-feedback"
      />
    </div>
  );
};

export default ProcessingButtonPage;
