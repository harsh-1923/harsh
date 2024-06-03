import React from "react";
import "./CalendarAppPage.css";

import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import Calendar from "../../../components/Experiments/Calendar/Calendar";

const CalendarAppPage = () => {
  return (
    <div className="ca-page-wrap">
      <ExpPageTitle title="Calendar Events" date="June, 2024" />
      <div className="ca-demo-wrap">
        <Calendar />
      </div>
    </div>
  );
};

export default CalendarAppPage;
