import React from "react";
import "./RadialMenuPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle.jsx";
import RadialMenu from "../../../components/Experiments/RadialMenu/RadialMenu";
import MoreExpBar from "../../../components/MoreExpBar/MoreExpBar.jsx";

const RadialMenuPage = () => {
  return (
    <div className="radial-menu-wrap">
      <ExpPageTitle title="Radial Menu" date="June, 2024" />
      <div className="radial-menu-demo-wrap">
        <RadialMenu />

        <h3 className="radial-menu-hint">
          Tap on the Plus icon on the bottom right to reveal options.
        </h3>
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

export default RadialMenuPage;
