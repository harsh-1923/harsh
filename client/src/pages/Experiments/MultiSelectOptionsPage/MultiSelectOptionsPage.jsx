import React from "react";
import "./MultiSelectOptionsPage.css";

import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle.jsx";
import MultiSelectOptions from "../../../components/Experiments/MultiSelectOptions/MultiSelectOptions";
import DemoPopover from "../../../components/DemoPopover/DemoPopover.jsx";
const MultiSelectOptionsPage = () => {
  return (
    <div className="multi-select-page-wrap">
      <ExpPageTitle title="Multi Select Menu" date="May, 2024" />
      <div className="multi-select-demo-wrap">
        <MultiSelectOptions />
        <div className="demo-trigger">
          <DemoPopover
            src="https://imharsh.s3.eu-north-1.amazonaws.com/Multi_Select.mp4"
            title="Multi Select Menu"
          />
        </div>
      </div>
    </div>
  );
};

export default MultiSelectOptionsPage;
