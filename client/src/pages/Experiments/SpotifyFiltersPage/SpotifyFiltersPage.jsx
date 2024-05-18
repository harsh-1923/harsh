import React from "react";
import "./SpotifyFiltersPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import SpotifyFilter from "../../../components/Experiments/SpotifyFilters/SpotifyFilters";

const SpotifyFiltersPage = () => {
  return (
    <div className="sf-page-wrap">
      <ExpPageTitle title="Spotify Filters" date="April, 2024" />
      <div className="sf-demo-wrap">
        <SpotifyFilter />
      </div>
    </div>
  );
};

export default SpotifyFiltersPage;
