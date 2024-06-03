import React from "react";
import "./IOSSimulator.css";

const IOSSimulator = ({ children }) => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${2}0`;
  };

  return (
    <div className="ios-sim-wrap">
      <div className="ios-sim-banner">
        <p className="ios-sim-time">{getCurrentTime()}</p>
        <div className="ios-sim-dynamic-island"></div>
        <div className="ios-sim-network-wrap"></div>
      </div>
    </div>
  );
};

export default IOSSimulator;
