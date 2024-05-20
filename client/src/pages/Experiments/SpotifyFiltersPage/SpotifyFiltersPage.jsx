import React from "react";
import "./SpotifyFiltersPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import SpotifyFilter from "../../../components/Experiments/SpotifyFilters/SpotifyFilters";
import DemoPopover from "../../../components/DemoPopover/DemoPopover";
import MoreExpBar from "../../../components/MoreExpBar/MoreExpBar";

const SpotifyFiltersPage = () => {
  return (
    <div className="sf-page-wrap">
      <ExpPageTitle title="Spotify Filters" date="April, 2024" />
      <div className="sf-demo-wrap">
        <SpotifyFilter />
        <div className="demo-trigger">
          <DemoPopover
            src="https://imharsh.s3.eu-north-1.amazonaws.com/Spotify_FIlters.mp4"
            title="Spotify Filters"
          />
        </div>
      </div>

      <MoreExpBar
        leftTitle="Vercel Feedback"
        leftLink="/exp/vercel-feedback"
        rightTitle="Apple Notes Menu"
        rightLink="/exp/apple-notes-menu"
      />
    </div>
  );
};

export default SpotifyFiltersPage;
