import React from "react";
import "./AppleNotesMenuPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import AppleNotesMenu from "../../../components/Experiments/AppleNotesMenu/AppleNotesMenu";

const AppleNotesMenuPage = () => {
  return (
    <div className="apn-page-wrap">
      <ExpPageTitle title="Apple Notes Menu" date="April, 2024" />
      <div className="apn-demo-wrap">
        <AppleNotesMenu />
      </div>
    </div>
  );
};

export default AppleNotesMenuPage;
