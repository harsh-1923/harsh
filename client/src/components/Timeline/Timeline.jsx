import React, { useRef, useState, useEffect } from "react";
import "./Timeline.css";

const parseDate = (dateString) => {
  const [month, year] = dateString.split("/").map(Number);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const parsedYear = year + Math.floor(currentMonth / 12);
  return new Date(parsedYear, month - 1);
};

const getMonthCount = (startDateString, endDateString) => {
  const startDate = parseDate(startDateString);
  const endDate = parseDate(endDateString);

  const diffMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    endDate.getMonth() -
    startDate.getMonth();

  return diffMonths;
};

const TimelineItem = ({
  startDate = "04/22",
  endDate = "07/23",
  color = "red",
  presentDate,
  children,
}) => {
  const [months, setMonths] = useState(0);

  const addMonthsToDate = (monthsToAdd) => {
    const [startMonth, startYear] = startDate.split("/").map(Number);
    let newMonth = startMonth + monthsToAdd;
    let newYear = startYear + Math.floor(newMonth / 12);
    newMonth %= 12;
    if (newMonth === 0) {
      newMonth = 12;
      newYear -= 1;
    }
    return `${newMonth.toString().padStart(2, "0")}/${newYear}`;
  };

  useEffect(() => {
    setMonths(getMonthCount(startDate, endDate));
  }, []);

  return (
    <div className="timeline-item">
      <div className="timeline-item-content">{children}</div>
      <div className="months">
        {Array(months)
          .fill()
          .map((item, idx) => (
            <div key={idx} className="month">
              <div
                data-month={addMonthsToDate(idx)}
                className="month-marker"
                style={{ backgroundColor: color, color: color }}
              ></div>
              <div
                style={{ backgroundColor: color }}
                className="week-marker"
              ></div>
              <div
                style={{ backgroundColor: color }}
                className="week-marker"
              ></div>
              <div
                style={{ backgroundColor: color }}
                className="week-marker"
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - timelineRef.current.offsetLeft);
    setScrollLeft(timelineRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = x - startX;
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.scrollLeft = timelineRef.current.scrollWidth;
    }
  }, []);

  return (
    <div className="timeline-ctr reveal-animation">
      <div className="timeline-gradient"></div>
      <div
        className="timeline-wrap"
        ref={timelineRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="timeline">
          <TimelineItem startDate="05/22" endDate="08/22" color="#7CD3FFEF">
            <AirbusInternItem />
          </TimelineItem>
          <TimelineItem
            startDate="08/22"
            endDate="06/23"
            color="#a0d490
        "
          >
            <SlangLabsItem />
          </TimelineItem>

          <TimelineItem startDate="07/23" endDate="06/24" color="#7CD3FFEF">
            <AirbusItem />
          </TimelineItem>
        </div>
      </div>
    </div>
  );
};

const AirbusInternItem = () => {
  return (
    <div className="airbus-item">
      <div
        style={{ textAlign: "right", paddingRight: "5px", color: "#7CD3FFEF" }}
        className="airbus-item-header"
      >
        Airbus
      </div>
      <small
        style={{
          marginBottom: "10px",
          textAlign: "right",
          paddingRight: "5px",
        }}
      >
        Software Engineer - Intern, <br></br>Simulation and Physical System
      </small>
      <div className="airbus-item-content">
        <Phase startDate="05/22" endDate="08/22" color="#7CD3FFEF">
          <p>• Analyzing database performance for Simulation Applications</p>
        </Phase>
      </div>
    </div>
  );
};

const SlangLabsItem = () => {
  return (
    <div className="airbus-item">
      <div
        style={{ textAlign: "right", paddingRight: "5px", color: "#89FF9FCD" }}
        className="airbus-item-header"
      >
        Slang Labs
      </div>
      <small
        style={{
          marginBottom: "10px",
          textAlign: "right",
          paddingRight: "5px",
        }}
      >
        Software Engineer - Intern, <br></br>WebSDK and Console
      </small>
      <div className="airbus-item-content">
        <Phase startDate="07/23" endDate="11/23" color="#89FF9FCD">
          <p>• WebSDK migration to TypeScript and code refactoring</p>
          <p>• Disamgiuation Search UI for Slang Voice Assistants</p>
        </Phase>

        <Phase startDate="11/23" endDate="05/24" color="#89FF9FCD">
          <p>
            • Developed Slang Console V3, a dashboard used by Product Managers
            at Nykaa, redBus, Tata Digital, etc accumulating over 200k MAUs
          </p>
        </Phase>
      </div>
    </div>
  );
};

const AirbusItem = () => {
  return (
    <div className="airbus-item">
      <div
        style={{
          textAlign: "right",
          paddingRight: "5px",
          color: "#7CD3FFEF",
        }}
        className="airbus-item-header"
      >
        Airbus
      </div>
      <small
        style={{
          marginBottom: "10px",
          textAlign: "right",
          paddingRight: "5px",
        }}
      >
        Software Engineer - E1, <br></br>Advanced Engineering and System Studies
      </small>
      <div className="airbus-item-content">
        <Phase startDate="06/23" endDate="09/23">
          <p>• Competency Development</p>
          <p>• General familiarization with Simulation Applications</p>
        </Phase>
        <Phase startDate="10/23" endDate="01/24" color="#7CD3FFEF">
          <p>• Bug fixes, feature stabilization, etc </p>
          <p>• Documentation and test cases</p>
        </Phase>
        <Phase startDate="1/24" endDate="06/24" color="#7CD3FFEF">
          <p>• Major feature development</p>
          <p>
            • Variants Development, enabling reuse of models across different
            Aircraft configurations
          </p>
        </Phase>
      </div>
    </div>
  );
};

const Phase = ({ startDate, endDate, color = "#7CD3FFEF", children }) => {
  return (
    <div
      data-color={"red"}
      style={{
        width: `${getMonthCount(startDate, endDate) * 68 - 5}px`,
      }}
      className="timeline-phase"
    >
      <div style={{ backgroundColor: color }} className="phase-marker"></div>
      {children}
    </div>
  );
};

export default Timeline;
