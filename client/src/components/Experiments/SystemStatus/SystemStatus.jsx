import React, { useState } from "react";
import "./SystemStatus.css";
import { Ellipsis } from "lucide-react";

const statusData = [
  { report: "Elevated build time - no incidents", status: "Normal" },
  { report: "All systems normal", status: "Normal" },
  { report: "All systems normal", status: "Normal" },
  { report: "All systems normal", status: "Normal" },
  { report: "Elevated latency", status: "Warning" },
  { report: "Delayed build - no incidents reported", status: "Normal" },
  { report: "All systems normal", status: "Normal" },
  { report: "All systems normal", status: "Normal" },
  { report: "All systems normal", status: "Normal" },
  { report: "Missing build logs", status: "Critical" },
  { report: "Github Auth errors", status: "Warning" },
  { report: "All systems normal", status: "Normal" },
  { report: "All systems normal", status: "Normal" },
  { report: "All systems normal", status: "Normal" },
  { report: "All systems normal", status: "Normal" },
  { report: "All systems normal", status: "Normal" },
];

const variants = [
  {
    report: "All systems normal",
    status: "Normal",
  },
  {
    report: "Elevated edge fucntion errors",
    status: "Warning",
  },
  {
    report: "Scheduled maintenance",
    status: "Normal",
  },
];

const randomVariantIndex = Math.floor(Math.random() * variants.length);
const randomVariant = variants[randomVariantIndex];

statusData.push(randomVariant);

statusData.reverse();

statusData.reverse();

function calculateTimeBefore(hours) {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let timeBefore = currentHour - hours * 2;
  timeBefore = (timeBefore + 24) % 24;

  const formattedTimeBefore =
    timeBefore >= 12
      ? timeBefore === 12
        ? "12 PM"
        : timeBefore - 12 + " PM"
      : timeBefore === 0
      ? "12 AM"
      : Math.abs(timeBefore) + " AM";

  return formattedTimeBefore;
}

const SystemStatus = () => {
  const [highlight, setHighlight] = useState(false);
  const [active, setActive] = useState(statusData.length - 1);
  return (
    <div className="sys-status-wrap">
      <div className="sys-status-title-row">
        <p>System Status</p>
        <Ellipsis />
      </div>
      <div className="sys-status-history-row">
        <div
          onMouseEnter={() => setHighlight(true)}
          onMouseLeave={() => {
            setHighlight(false);
            setActive(statusData.length - 1);
          }}
          className="sys-status-bars"
        >
          {statusData.map((item, index) => (
            <div
              onMouseEnter={() => setActive(index)}
              onTouchStart={() => setActive(index)}
              data-highlight={`${highlight ? "true" : "false"}`}
              data-status={item.status.toLowerCase()}
              data-active={`${active === index ? "true" : "false"}`}
              className="sys-status-bar"
              key={index}
            ></div>
          ))}
        </div>
      </div>
      <div className="sys-status-report-row">
        <p
          data-report-status={statusData[active].status.toLowerCase()}
          className="status-report"
        >
          {statusData[active].report}
        </p>{" "}
        <p className="basic-text-muted sys-status-time">
          {calculateTimeBefore(statusData.length - 1 - active)}
        </p>
      </div>
    </div>
  );
};

export default SystemStatus;
