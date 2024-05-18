import React, { useEffect, useRef } from "react";
import "./InfiniteSlider.css";

const InfiniteSlider = ({ children, items = 10, duration = 2000 }) => {
  const sliderRef = useRef(null);
  useEffect(() => {
    if (sliderRef.current)
      sliderRef.current.style.setProperty("--duration", `${duration}ms`);
  }, []);
  return (
    <div ref={sliderRef} className="is-wrap">
      {Array(items)
        .fill()
        .map((item, idx) => {
          return (
            <div key={idx} className="is-span">
              {children}
            </div>
          );
        })}

      {Array(items)
        .fill()
        .map((item, idx) => {
          return (
            <div key={idx} className="is-span">
              {children}
            </div>
          );
        })}
    </div>
  );
};

export default InfiniteSlider;
