import React from "react";
import "./VercelFeebbackPage.css";
import VercelFeedback from "../../../components/Experiments/VercelFeedback/VercelFeedback";
import MoreExpBar from "../../../components/MoreExpBar/MoreExpBar.jsx";

import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle.jsx";
import DemoPopover from "../../../components/DemoPopover/DemoPopover.jsx";
const VercelFeebbackPage = () => {
  return (
    <div className="vf-page-wrap">
      <ExpPageTitle title="Vercel Feedback" date="April, 2024" />
      <div className="vf-demo-wrap">
        <VercelFeedback />

        <div className="demo-trigger">
          <DemoPopover />
        </div>
      </div>

      <div className="vf-page-content page-content">
        <p>
          In my version of the feedback forms inspired by Vercel Docs, I chose
          to use Framer Motion since I wanted a little more fluidity in the
          animations.
        </p>

        <p>
          While the original textarea in Vercel's page supports markdown, I
          decided to exclude markdown support in my version to maintain a focus
          on the animations and overall user experience.
        </p>

        <p>
          Vercel's implementation restricts users from submitting feedback with
          only an emoji; it requires additional text. I found this limitation to
          be unconvincing from a user's perspective, as there are scenarios
          where one might wish to quickly express feedback through an emoji
          alone, similar to how ratings are given on the App Store.
        </p>

        <p>
          Therefore, I enabled the option for users to submit feedback using
          only an emoji, enhancing simplicity and user flexibility.
        </p>
      </div>

      <MoreExpBar
        leftTitle="Dynamic Button"
        leftLink="/exp/dynamic-button"
        rightTitle="Spotify Filters"
        rightLink="/exp/spotify-filters"
      />
    </div>
  );
};

export default VercelFeebbackPage;
