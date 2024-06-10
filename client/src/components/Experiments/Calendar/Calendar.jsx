import React, { useState, useEffect } from "react";
import "./Calendar.css";

import { Video, X } from "lucide-react";

import EVENTS from "./events.js";

import { motion, useTransform, useMotionValue } from "framer-motion";
import AvatarTray from "../../AvatarTray/AvatarTray.jsx";

const Calendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const calendarRef = React.useRef(null);

  const THRESHOLD = 120;

  const y = useMotionValue(0);
  const scale = useTransform(y, [0, 2 * THRESHOLD], [1, 0.85]);
  const contentOpacity = useTransform(y, [0, THRESHOLD], [1, 0.6]);

  return (
    <div ref={calendarRef} className="ca-wrap">
      {selectedEvent && (
        <motion.div
          drag={true}
          dragConstraints={calendarRef}
          dragElastic={0.5}
          onDrag={(event, info) => {
            y.set(Math.max(Math.abs(info.offset.x), Math.abs(info.offset.y)));
          }}
          onDragEnd={(event, info) => {
            if (
              Math.abs(info.offset.y) > THRESHOLD ||
              Math.abs(info.offset.x) > THRESHOLD
            ) {
              setSelectedEvent(null);
            }
            y.set(0);
          }}
          style={{
            scale,
            backgroundImage:
              selectedEvent === 1 ? "var(--ca-ev-1)" : "var(--ca-ev-2)",
          }}
          layoutId={`event-${selectedEvent}-wrap`}
          className="ca-event-selected-wrap"
          transition={{ duration: 0.4, type: "spring", bounce: 0.35 }}
        >
          <motion.div layout className="ca-selected-action-tray">
            <button
              onClick={() => setSelectedEvent(null)}
              className="ca-selected-action-tray-cancel-btn"
            >
              Cancel
            </button>
            <button
              onClick={() => setSelectedEvent(null)}
              className="ca-selected-action-tray-mute-btn"
            >
              Mute
            </button>
          </motion.div>
          {/* <motion.p layout layoutId={`event-{selectedEvent}-title`}>
            {EVENTS[selectedEvent - 1].title}
          </motion.p> */}
          <motion.div layout className="ca-selected-header">
            <motion.p layout layoutId={`event-{selectedEvent}-title`}>
              {EVENTS[selectedEvent - 1].title}
            </motion.p>
            <motion.p layout layoutId={`event-{selectedEvent}-cross`}>
              {EVENTS[selectedEvent - 1].duration}
            </motion.p>
          </motion.div>
          <motion.div layout className="ca-selected-event-details-wrap">
            <motion.div className="ca-selected-event-detail">
              <Video /> <p>{EVENTS[selectedEvent - 1].link}</p>
            </motion.div>
            <motion.div className="ca-selected-event-detail">
              <Video /> <p>{EVENTS[selectedEvent - 1].link}</p>
            </motion.div>
            <motion.div className="ca-selected-event-detail">
              <Video /> <p>{EVENTS[selectedEvent - 1].link}</p>
            </motion.div>
            <motion.div className="ca-selected-event-detail">
              <Video /> <p>{EVENTS[selectedEvent - 1].link}</p>
            </motion.div>
          </motion.div>
          <motion.div className="ca-selected-avatars">
            <AvatarTray count="2" />
          </motion.div>
          {/* <motion.div
            style={{ contentOpacity }}
            layout
            classname="ca-selected-event-details-wrap"
          >
            <h3 style={{ fontWeight: 7000 }}>Event Details</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: EVENTS[selectedEvent - 1].details,
              }}
            ></p>
            <br />
            <h3 style={{ fontWeight: 7000 }}>Description</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: EVENTS[selectedEvent - 1].description,
              }}
            ></p>
            <br />
            <div className="ca-event-divider"></div>
            <div className="ca-event-calendar-details">
              <p style={{ fontWeight: 700 }}>Calendar</p>
              <p
                style={{ color: "rgba(239, 239, 239, 0.9)" }}
                className="ca-event-calendar"
              >
                harsh.ju.sharma@gmail.com
              </p>
            </div>
            <div className="ca-event-divider"></div>
            <div className="ca-event-calendar-details">
              <p style={{ fontWeight: 700 }}>Alert</p>
              <p
                style={{ color: "rgba(239, 239, 239, 0.9)" }}
                className="ca-event-calendar"
              >
                30 mins before
              </p>
            </div>
          </motion.div> */}
        </motion.div>
      )}
      <div className="ca-event-timeline">
        {Array(5)
          .fill()
          .map((_, idx) => (
            <div key={idx} className="ca-event-timeline-marker">
              {idx + 1} PM
              <div className="ca-event-timeline-divider"></div>
            </div>
          ))}
      </div>
      <div className="ca-event-event">
        <motion.div
          style={{ zIndex: selectedEvent === 1 ? 1100 : 800 }}
          onClick={() => setSelectedEvent(1)}
          key="event-1"
          layoutId="event-1-wrap"
          className="ca-event-1"
        >
          <motion.p key="event-1-title" layout layoutId="event-1-title">
            Hand-off Meeting
          </motion.p>
          <motion.p layout layoutId="event-1-cross">
            1h
          </motion.p>
        </motion.div>
        <motion.div
          style={{ zIndex: selectedEvent === 2 ? 1100 : 800 }}
          onClick={() => setSelectedEvent(2)}
          key="event-2"
          layoutId="event-2-wrap"
          className="ca-event-2"
        >
          <motion.p key="event-2-title" layoutId="event-2-title">
            Flight to Bangalore
          </motion.p>
          <motion.p layout layoutId="event-2-cross">
            2h 20m
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Calendar;
