import React from "react";
import "./SystemStatusPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import SystemStatus from "../../../components/Experiments/SystemStatus/SystemStatus";

const SystemStatusPage = () => {
  return (
    <div className="ss-page-wrap">
      <ExpPageTitle title="Spotify Filters" date="April, 2024" />
      <div className="ss-demo-wrap">
        <SystemStatus />
        {/* <p className="basic-text-muted">Hover or tap to interact</p> */}
      </div>
    </div>
  );
};

export default SystemStatusPage;
