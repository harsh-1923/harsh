import React, { useState } from "react";
import "./MultiSelectOptions.css";
import imagesArray from "./images";

import { toast } from "sonner";

import { motion, AnimatePresence } from "framer-motion";

import {
  CalendarDays,
  Check,
  Copy,
  EyeOffIcon,
  GalleryVerticalEnd,
  Heart,
  Map,
  SquarePlay,
} from "lucide-react";

const MultiSelectOptions = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [isSelectionOn, setIsSelectionOn] = useState(false);

  const toggleSelect = (index) => {
    setSelectedImages((prev) => {
      const currentIndex = prev.indexOf(index);
      if (currentIndex >= 0) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="ms-wrap">
      <div className="ms-inner-wrap">
        {showMenu && (
          <div className="ms-selected-images-wrap">
            <motion.div
              onClick={() => setShowMenu(false)}
              initial={{
                backdropFilter: "blur(0px)",
                WebkitBackdropFilter: "blur(0px)",
                // backgroundColor: "rgba(0,0,0,0)",
              }}
              animate={{
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(10px)",
                // backgroundColor: "var(--gray-1)",
              }}
              exit={{
                backdropFilter: "blur(0px)",
                WebkitBackdropFilter: "blur(0px)",
                // backgroundColor: "rgba(0,0,0,0)",
              }}
              transition={{ duration: 0.2 }}
              className="multi-select-underlay"
            ></motion.div>
            <div className="ms-selected-images">
              {selectedImages.map((item, index) => (
                <motion.div
                  layoutId={`image-${item}`}
                  className="ms-selected-image"
                  key={index}
                  data-index={index}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  onClick={() => setShow(false)}
                  style={{
                    zIndex: 1000 - index,
                  }}
                >
                  <img src={imagesArray[item].img} />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="ms-menu"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => toast("This is just a prototype.")}
            >
              <div className="ms-menu-option">
                <p>Adjust Location</p>
                <div>
                  <Map size={14} strokeWidth={2} />
                </div>
              </div>
              <div className="ms-menu-option">
                <p>Adjust Date & Time</p>
                <div>
                  <CalendarDays size={14} strokeWidth={2} />
                </div>
              </div>
              <div className="ms-menu-divider" />
              <div className="ms-menu-option">
                <p>Add to Album</p>
                <div>
                  <GalleryVerticalEnd size={14} strokeWidth={2} />
                </div>
              </div>
              <div className="ms-menu-divider" />
              <div className="ms-menu-option">
                <p>Slideshow</p>
                <div>
                  <SquarePlay size={14} strokeWidth={2} />
                </div>
              </div>
              <div className="ms-menu-option">
                <p>Hide</p>
                <div>
                  <EyeOffIcon size={14} strokeWidth={2} />
                </div>
              </div>
              <div className="ms-menu-option">
                <p>Favourite</p>
                <div>
                  <Heart size={14} strokeWidth={2} />
                </div>
              </div>
              <div className="ms-menu-option">
                <p>Copy</p>
                <div>
                  <Copy size={14} strokeWidth={2} />
                </div>
              </div>
            </motion.div>
          </div>
        )}
        <div className="ms-header">
          <p>Owned Collections</p>
          <div>
            <button
              onClick={() => {
                if (isSelectionOn) {
                  if (selectedImages.length > 0) setShowMenu(true);
                } else {
                  setIsSelectionOn(true);
                }
              }}
            >
              {/* <AnimatePresence initial={false} mode="wait">
                {isSelectionOn ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    key="options"
                    transition={{ duration: 0.05 }}
                  >
                    Options
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    key="select"
                    transition={{ duration: 0.1 }}
                  >
                    Select
                  </motion.span>
                )} */}
              {/* </AnimatePresence> */}
              <motion.span>{isSelectionOn ? "Options" : "Select"}</motion.span>
            </button>
          </div>
        </div>
        <div className="ms-images">
          {imagesArray.map((image, index) => (
            <motion.div
              layoutId={`image-${index}`}
              className="ms-image"
              key={index}
              onClick={() => {
                if (isSelectionOn) toggleSelect(index);
              }}
              style={{
                zIndex: `${selectedImages.includes(index) ? 10 : 0}`,
              }}
            >
              {isSelectionOn && (
                <div
                  className={`ms-image-selection-indicator ${
                    selectedImages.includes(index)
                      ? "ms-image-indicator-shadow"
                      : null
                  }`}
                >
                  <AnimatePresence>
                    {selectedImages.includes(index) && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.05 }}
                      >
                        <Check
                          size={9}
                          strokeWidth={3}
                          style={{ paddingTop: "1px" }}
                        />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              )}
              <img src={image.img} alt={image.name} />
            </motion.div>
          ))}
        </div>

        {selectedImages.length > 0 && (
          <div className="ms-option-tray">
            <button
              onClick={() => {
                setSelectedImages([]);
                setIsSelectionOn(false);
              }}
              className="ms-cancel-selection-button"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelectOptions;
