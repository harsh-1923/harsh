import React from "react";

const SectionHeader = ({ title, reveal = false }) => {
  return (
    <h2
      className={`${reveal ? "reveal-animation" : ""}`}
      style={{
        color: "inherit",
        fontSize: "22px",
        fontWeight: 500,
        margin: "var(--gap-xxl) 0",
      }}
    >
      {title}
    </h2>
  );
};

export default SectionHeader;
