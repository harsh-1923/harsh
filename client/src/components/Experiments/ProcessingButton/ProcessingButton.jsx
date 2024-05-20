import React, { useState, useEffect } from "react";
import "./ProcessingButton.css";
import useMeasure from "react-use-measure";
import { LoaderCircle, CircleCheck, CircleAlert } from "lucide-react";

import SOUND_SUCCESS from "../../../assets/SOUND_SUCCESS.mp3";
import SOUND_FAILURE from "../../../assets/SOUND_FAILURE.mp3";

import { motion, AnimatePresence } from "framer-motion";

const ProcessingButton = () => {
  const [ref, bounds] = useMeasure();
  const [active, setActive] = useState("idle");
  const [prevState, setPrevState] = useState(true);

  const success_audio = new Audio(SOUND_SUCCESS);
  const fail_audio = new Audio(SOUND_FAILURE);

  const iconStates = {
    idle: null,
    active: <LoaderCircle className="loader" size={18} strokeWidth={2} />,
    completed: <CircleCheck className="processing-button-check" size={18} />,
    fail: <CircleAlert className="processing-button-alert" size={18} />,
  };

  const buttonState = {
    idle: "Validate Couplings",
    active: "Validating Couplings",
    completed: "Validated 3542 couplings",
    fail: "Found errors",
  };

  const handleClick = () => {
    if (active !== "idle") return;
    setActive("active");

    setTimeout(() => {
      if (prevState) {
        success_audio.play();
        setActive("completed");
        setPrevState(false);
      } else {
        fail_audio.play();
        setActive("fail");
        setPrevState(true);
      }
    }, 2750);

    setTimeout(() => {
      setActive("idle");
    }, 8000);
  };

  return (
    <motion.button
      animate={{ width: bounds.width ? bounds.width : null }}
      style={{
        background: `${
          active === "completed"
            ? "linear-gradient(180deg, #19d574 0%, #119d55 100%)"
            : active === "fail"
            ? "linear-gradient(180deg, #f85149 0%, #b53c36 100%)"
            : "linear-gradient(180deg, #1994ff 0%, #157cff 100%)"
        }`,
        boxShadow: `${
          active === "completed"
            ? "0px 0px 1px 1px rgba(255, 255, 255, 0.08) inset, 0px 1px 1.5px 0px rgba(0, 0, 0, 0.32), 0px 0px 0px 0.5px #19ff88"
            : active === "fail"
            ? "0px 0px 1px 1px rgba(255, 255, 255, 0.08) inset,0px 1px 1.5px 0px rgba(0, 0, 0, 0.32), 0px 0px 0px 0.5px #f85149"
            : "0px 0px 1px 1px rgba(255, 255, 255, 0.08) inset,0px 1px 1.5px 0px rgba(0, 0, 0, 0.32), 0px 0px 0px 0.5px #1a94ff"
        }`,
      }}
      className="processing-button-wrap"
      onClick={() => handleClick()}
      transition={{ type: "spring", duration: 0.3, bounce: 0.4 }}
    >
      <div ref={ref} className="processing-button-inner">
        <span>{iconStates[active]}</span>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            key="analysing"
            initial={{ x: -25, opacity: 0, filter: "blur(4px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ x: -25, opacity: 0, filter: "blur(4px)" }}
          >
            {buttonState[active]}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default ProcessingButton;
