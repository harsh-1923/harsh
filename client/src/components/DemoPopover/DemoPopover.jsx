import React from "react";
import "./DemoPopover.css";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

const DemoPopover = ({
  src = "https://imharsh.s3.eu-north-1.amazonaws.com/Vercel_Feedback.mp4",
  title = "Vercel Feedback",
}) => {
  const [isActive, setIsActive] = React.useState(false);
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 450], [1, 0]);
  const videoElement = React.useMemo(
    () => (
      <video
        className="demo-video"
        src={src}
        autoPlay
        loop
        muted
        controlsList="nofullscreen"
        disablePictureInPicture
        playsInline
      />
    ),
    [src]
  );

  const handleDragEnd = (event, info) => {
    if (info.offset.y > 150) {
      setIsActive(false);
    }

    y.set(0);
  };
  return (
    <div>
      <button
        onClick={() => setIsActive(true)}
        className="demo-popover-trigger"
      >
        View Demo
      </button>

      <AnimatePresence initial={false} mode="wait">
        {isActive && (
          <motion.div
            initial={{
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
            }}
            animate={{
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
            exit={{
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
            }}
            transition={{ duration: 0.3 }}
            className="demo-popover-wrap"
          >
            <motion.div
              onClick={() => setIsActive(false)}
              className="demo-popover-overlay"
            ></motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 500, opacity: 0 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDrag={(_, info) => y.set(info.offset.y)}
              onDragEnd={handleDragEnd}
              className="demo-popover-content-wrap"
            >
              <motion.h3 style={{ opacity }}>{title}</motion.h3>
              <motion.div style={{ opacity }} className="demo-popover-video">
                {videoElement}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DemoPopover;
