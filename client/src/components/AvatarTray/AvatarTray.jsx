import React from "react";
import "./AvatarTray.css";

const AvatarTray = ({ count }) => {
  return (
    <div className="at-wrap">
      {Array(count)
        .fill()
        .map((_, idx) => (
          <div key={idx} className="at-item">
            s
          </div>
        ))}
    </div>
  );
};

export default AvatarTray;
