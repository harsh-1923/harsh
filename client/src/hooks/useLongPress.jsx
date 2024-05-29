import { useState, useEffect } from "react";

const useLongPress = (onLongPress, { delay = 500 } = {}) => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element) return;

    let timerId;
    const start = () => {
      timerId = setTimeout(onLongPress, delay);
    };
    const stop = () => {
      clearTimeout(timerId);
    };

    element.addEventListener("mousedown", start);
    element.addEventListener("touchstart", start);
    document.addEventListener("mouseup", stop);
    document.addEventListener("touchend", stop);
    document.addEventListener("touchcancel", stop);

    return () => {
      element.removeEventListener("mousedown", start);
      element.removeEventListener("touchstart", start);
      document.removeEventListener("mouseup", stop);
      document.removeEventListener("touchend", stop);
      document.removeEventListener("touchcancel", stop);
    };
  }, [element, onLongPress, delay]);

  return [setElement];
};

export default useLongPress;
