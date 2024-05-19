import React from "react";
import "./ProcessingButtonPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import ProcessingButton from "../../../components/Experiments/ProcessingButton/ProcessingButton.jsx";

const ProcessingButtonPage = () => {
  return (
    <div className="processing-page-button">
      <ExpPageTitle title="Processing Button" date="May 2024" />

      <div className="processing-button-demo-wrap">
        <ProcessingButton />

        <div className="demo-prompt">Tap on the button to proccess.</div>
      </div>
    </div>
  );
};

export default ProcessingButtonPage;
