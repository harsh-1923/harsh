import React from "react";
import "./Playground.css";
import Unmount from "../../components/Archive/Unmount/Unmount";
import ExpPageTitle from "../../components/ExpPageTitle/ExpPageTitle";
import IOSSimulator from "../../components/IOSSimulator/IOSSimulator";

const Playground = () => {
  return (
    <div className="playground-wrap">
      <ExpPageTitle title="Playground" />
      <div className="playground-demo-wrap">
        <IOSSimulator />
      </div>
    </div>
  );
};

export default Playground;
