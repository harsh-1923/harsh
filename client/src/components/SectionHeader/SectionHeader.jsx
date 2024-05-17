import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <h2
      className="reveal-animation"
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
