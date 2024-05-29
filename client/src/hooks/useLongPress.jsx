import { useCallback, useRef } from "react";

const useLongPress = (onLongPress, ms = 500) => {
  const timerRef = useRef();

  const start = useCallback(() => {
    timerRef.current = setTimeout(onLongPress, ms);
  }, [onLongPress, ms]);

  const stop = useCallback(() => {
    clearTimeout(timerRef.current);
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
  };
};
