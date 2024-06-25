import React from "react";
import "./StackedModalPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import StackedModal from "../../../components/Experiments/StackedModal/StackedModal";

const StackedModalPage = () => {
  return (
    <div className="smp-wrap">
      <ExpPageTitle title="Stacked Modals" date="June 2024" />
      <div className="sm-demo-wrap">
        <div className="sm_demo-container">
          <StackedModal />
        </div>
      </div>
    </div>
  );
};

export default StackedModalPage;
