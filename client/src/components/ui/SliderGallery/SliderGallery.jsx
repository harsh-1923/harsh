import React, { useEffect, useRef } from "react";
import "./SliderGallery.css";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import LIST from "./galleryItems";

const SliderGallery = () => {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const imageCache = useRef(new Set());

  const y = useMotionValue(0);
  const velocityThreshold = 300;
  const offsetThreshold = 120;
  const opacity = useTransform(y, [0, 1.5 * offsetThreshold], [1, 0]);

  const IMAGE_TRANSITION_DURATION = 0.7;

  // Preload images on component mount
  useEffect(() => {
    LIST.forEach((image) => {
      const img = new Image();
      img.src = image.src;
      imageCache.current.add(image);
    });
  }, []);

  React.useEffect(() => {
    const handleEscKey = async (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const handleDragEnd = async (event, info) => {
    if (
      Math.abs(info.offset.y) > offsetThreshold ||
      Math.abs(info.offset.x) > offsetThreshold ||
      Math.abs(info.velocity.x) > velocityThreshold ||
      Math.abs(info.velocity.y) > velocityThreshold
    ) {
      handleClose();
    } else {
      y.set(0);
    }
  };

  const handleClose = async () => {
    setSelectedItem(null);
    await new Promise((resolve) => setTimeout(resolve, 700));
    y.set(0);
    // document.body.style.overflow = "auto";
    // disabled due to jarring effects
  };

  return (
    <div className="sg-wrap" role="region" aria-label="Image slider gallery">
      <div className="sg-slider-wrap" role="list">
        {LIST.map((item, idx) => (
          <motion.button
            key={idx}
            layoutId={`sg-thumbnail-${idx}`}
            onClick={() => {
              setSelectedItem(idx);
              // document.body.style.overflow = "hidden";
            }}
            style={{ backgroundImage: `url(${item.src})` }}
            role="listitem"
            aria-label={`View details for ${item.caption}`}
            className="sg-slider-thumbnail"
            tabIndex={0}
          ></motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            key="underlay"
            initial={{
              backdropFilter: "blur(0)",
              WebkitBackdropFilter: "blur(0px)",
            }}
            animate={{
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
            exit={{
              backdropFilter: "blur(0)",
              WebkitBackdropFilter: "blur(0px)",
            }}
            className="sg-underlay"
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedItem !== null && (
          <div
            className="sg-underlay-img-wrap"
            role="dialog"
            aria-modal="true"
            aria-labelledby="imageTitle"
            aria-describedby="imageDescription"
          >
            <motion.img
              style={{ opacity }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: IMAGE_TRANSITION_DURATION }}
              src={LIST[selectedItem].src}
              className="sg-underlay-img"
              role="presentation"
              alt={LIST[selectedItem].desc}
            />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedItem !== null && (
          <div className="sg-open-wrap">
            <motion.div
              drag
              dragSnapToOrigin={true}
              onDrag={(_, info) => {
                y.set(
                  Math.max(Math.abs(info.offset.x), Math.abs(info.offset.y))
                );
              }}
              layoutId={`sg-thumbnail-${selectedItem}`}
              className="sg-thumbnail-open"
              key={`sg-thumbnail-open-${selectedItem}`}
              onDragEnd={handleDragEnd}
              style={{ backgroundImage: `url(${LIST[selectedItem].src})` }}
              transition={{
                type: "spring",
                duration: IMAGE_TRANSITION_DURATION,
                bounce: 0.3,
              }}
              role="button"
              tabIndex={0}
              aria-label="Drag to dismiss"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="sg-mask"
            ></motion.div>
            <motion.div
              style={{ opacity }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 0.5,
                exit: { duration: 0.1 },
              }}
              className="sg-thumbnail-details-wrap"
              key={`sg-details-${LIST[selectedItem].desc}`}
            >
              <div>
                <h2
                  style={{
                    lineHeight: "1",
                    fontWeight: 600,
                  }}
                >
                  {LIST[selectedItem].caption}
                </h2>
                <small>@{LIST[selectedItem].credits}</small>

                <p style={{ marginTop: "var(--gap-xs)", fontStyle: "italic" }}>
                  {LIST[selectedItem].desc}
                </p>

                <div className="sg-action-tray">
                  <a
                    href={LIST[selectedItem].link}
                    target="_blank"
                    aria-label={`View ${LIST[selectedItem].caption} on external site`}
                  >
                    <button className="sg-trigger">View on X</button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SliderGallery;
