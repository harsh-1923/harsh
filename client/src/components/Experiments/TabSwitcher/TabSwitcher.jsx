import React, { useState, useRef, useEffect } from "react";
import "./TabSwitcher.css";

const demoList = ["Engineering", "Design", "Marketing", "Legal"];

const TabSwitcher = ({ list }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const indicatorRef = useRef(null);

  const adjustIndicator = (activeRef) => {
    if (activeRef && indicatorRef.current) {
      indicatorRef.current.style.width = `${activeRef.offsetWidth}px`;
      indicatorRef.current.style.left = `${activeRef.offsetLeft}px`;
    }
  };

  useEffect(() => {
    const activeRef = itemRefs.current[activeIndex];
    adjustIndicator(activeRef);
  }, [activeIndex]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    const activeRef = itemRefs.current[index];
    adjustIndicator(activeRef);
  };
  return (
    <div className="tab-items-wrap">
      <div ref={indicatorRef} className="tab-indicator"></div>
      <div className="tab-items">
        {demoList.map((item, index) => (
          <button
            key={index}
            aria-label={item}
            data-active={`${activeIndex === index ? "active" : ""}`}
            className={"tab-item"}
            ref={(el) => (itemRefs.current[index] = el)}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabSwitcher;
