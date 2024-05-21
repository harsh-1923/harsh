import React, { useState, useRef } from "react";
import "./SliderButton.css";
import Skeleton from "@mui/material/Skeleton";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import useMeasure from "react-use-measure";
import { Check, ChevronsRight, LoaderCircle } from "lucide-react";

const SliderButton = () => {
  const sliderBoundaryRef = useRef(null);
  const [shouldSnapBackToOrogin, setShouldSnapBackToOrigin] = useState(true);
  const [shouldShowCheckMark, setShouldShowCheckMark] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [ref, bounds] = useMeasure();

  const [state, setState] = useState("idle");

  const button = {
    idle: <ChevronsRight color="#f25700" />,
    processing: (
      <LoaderCircle className="sliding-button-loader" color="#f25700" />
    ),
    confirm: <Check className="slider-button-checkmark" color="#f25700" />,
  };

  // const init = () => {
  //   setShouldShowCheckMark(false);
  //   setShouldSnapBackToOrigin(true);
  //   setSuccess(false);
  //   y.set(0);
  // };

  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 250], [1, 0]);

  const handleDrag = (_, info) => {
    const deltaX = info.offset.x;

    if (deltaX > 220) {
      setState("confirm");
    } else {
      if (state != "idle") setState("idle");
    }

    if (deltaX > 240) {
      setShouldSnapBackToOrigin(false);
      handleSuccess();
    }
    y.set(deltaX);
  };

  const handleSuccess = async () => {
    setIsProcessing(true);
    setState("processing");

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsProcessing(false);
    setSuccess(true);
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < 240) {
      y.set(1);
    }
  };

  return (
    <div ref={ref} className="slider-button-wrap">
      {/* <div className="metrics">
        {shouldSnapBackToOrogin ? "true" : "false"} <br /> {y.get()} <br />
        {opacity.get()}
      </div> */}
      <div className="slider-underlay-message">
        <motion.h3 style={{ opacity }}>Slide to Pay $56</motion.h3>
      </div>
      <div ref={sliderBoundaryRef} className="slider-button-slider-boundary">
        <motion.div
          layoutId="success"
          drag="x"
          dragSnapToOrigin={shouldSnapBackToOrogin}
          dragConstraints={sliderBoundaryRef}
          className="slider-button-slider"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          dragTransition={{ bounceStiffness: 800, bounceDamping: 100 }}
          dragMomentum={false}
          transition={{ type: "spring", duration: 0.3, bounce: 0.06 }}
        >
          {button[state]}
        </motion.div>
      </div>

      {isProcessing && (
        <div
          // sx={{ bgcolor: "rgba(1, 1, 1, 0.15)" }}
          // height={80}
          className="slider-processing-state"
          variant="rectangular"
        ></div>
      )}

      <AnimatePresence>
        {success && (
          <motion.div
            transition={{ duration: 0.4, type: "spring" }}
            layoutId="success"
            className="slider-success-wrap"
          >
            Payment Received
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SliderButton;
