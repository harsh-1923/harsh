import React from "react";
import "./ProgressiveBlur.css";

const ProgressiveBlur = ({ stops = 6 }) => {
  const l = [0.5, 1, 2, 4, 8, 16, 32, 64];
  return (
    <div className="pb-wrap">
      <div className="pb-blur">
        {Array(Math.min(stops, 6))
          .fill()
          .map((_, idx) => (
            <div key={idx}></div>
          ))}
      </div>
    </div>
  );
};

export default ProgressiveBlur;

/* {Array(stops)
        .fill()
        .map((_, idx) => (
          <div
            style={{
              zIndex: idx,
              backdropFilter: `blur(${l[idx]}px)`,
              mask: `linear-gradient(to bottom, rgba(0, 0, 0, 0) ${
                idx * 12.5
              }, rgba(0, 0, 0, 1) ${idx * 12.5 + 12.5}, rgba(0, 0, 0, 1) ${
                idx * 12.5 + 25
              }, rgba(0, 0, 0, 0) ${(idx * 12.5, 37.5)})`,
            }}
            className="pb-blur"
            key={idx}
          ></div>
        ))} */
