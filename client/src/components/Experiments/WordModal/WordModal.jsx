import React from "react";
import "./WordModal.css";

import SOUND_POP from "../../../assets/SOUND_POP.mp3";
import useClickOutside from "../../../hooks/useClickOutside";

const WordModal = ({ boundingRef, word, children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const buttonRef = React.useRef(null);

  const [modalPos, setModalPos] = React.useState();

  const MODAL_WIDTH = 300;
  const MODAL_HEIGHT = 200;
  const BLUR = "blur(0px)";
  const success_audio = new Audio(SOUND_POP);

  const closeModal = () => {
    setIsModalOpen(false);
    if (boundingRef) boundingRef.current.style.filter = "none";
    else {
      document.body.style.filter = "none";
    }
  };

  const handleButtonClick = () => {
    if (isModalOpen) closeModal();
    else {
      computeModalPosition();
      success_audio.play();
      setIsModalOpen(true);
    }
  };

  useClickOutside(buttonRef, closeModal);

  const computeModalPosition = () => {
    if (!buttonRef) return;
    const buttonRect = buttonRef.current.getBoundingClientRect();

    let SPACE_WIDTH = boundingRef
      ? boundingRef.current.getBoundingClientRect().width
      : window.innerWidth;

    let SPACE_HEIGHT = boundingRef
      ? boundingRef.current.getBoundingClientRect().height
      : window.innerHeight;

    let GRIDS = window.innerWidth > 600 ? 3 : window.innerWidth > 400 ? 3 : 2;

    let SPACE_WIDTH_PADDING = SPACE_WIDTH / GRIDS;
    let SPACE_HEIGHT_PADDING = Math.max(SPACE_HEIGHT / GRIDS, 200);

    if (boundingRef) boundingRef.current.style.filter = BLUR;
    else {
      document.body.style.filter = BLUR;
    }

    let verticalPos = { top: buttonRect.height };
    let def = boundingRef
      ? Math.min(
          window.innerHeight,
          boundingRef.current.getBoundingClientRect().bottom
        )
      : window.innerHeight;

    let isFlipped = false;
    if (Math.abs(buttonRect.bottom - def) < 200) {
      isFlipped = true;
      verticalPos = { bottom: buttonRect.height };
    }
    let RIGHT_LIMIT = boundingRef
      ? boundingRef.current.getBoundingClientRect().right
      : window.innerWidth;

    let LEFT_LIMIT = boundingRef
      ? boundingRef.current.getBoundingClientRect().left
      : 0;

    if (buttonRect.left < SPACE_WIDTH_PADDING) {
      if (buttonRect.left + MODAL_WIDTH > RIGHT_LIMIT) {
        console.log("adjusting from left");
        let delta_adj = buttonRect.left + MODAL_WIDTH - RIGHT_LIMIT;

        console.log(delta_adj);

        setModalPos({
          left: -1 * delta_adj,
          transformOrigin: isFlipped ? "bottom left" : "top left",
          ...verticalPos,
        });

        return;
      }

      setModalPos({
        left: 0,
        transformOrigin: isFlipped ? "bottom left" : "top left",
        ...verticalPos,
      });
    } else if (buttonRect.left > (GRIDS - 1) * SPACE_WIDTH_PADDING) {
      console.log("Right");
      if (buttonRect.right - MODAL_WIDTH < LEFT_LIMIT) {
        console.log("Adjusting");
        let delta_adj = LEFT_LIMIT - buttonRect.right + MODAL_WIDTH;

        setModalPos({
          right: -1 * delta_adj,
          transformOrigin: isFlipped ? "bottom right" : "top right",
          ...verticalPos,
        });

        return;
      }

      //   console.log({ buttonRect, LEFT_LIMIT, MODAL_WIDTH });
      setModalPos({
        right: 0,
        transformOrigin: isFlipped ? "bottom right" : "top right",
        ...verticalPos,
      });
    } else {
      console.log("Middle");
      setModalPos({
        // left: "50%",
        transform: "translateX(-50%)",
        transformOrigin: isFlipped ? "bottom left" : "top left",
        ...verticalPos,
      });
    }
  };

  return (
    <span style={{ filter: "10px !important" }} className="wm-wrap">
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className="wm-word-btn"
      >
        {word}
      </button>

      {isModalOpen && (
        <span
          style={{
            ...modalPos,
            width: MODAL_WIDTH,
            height: MODAL_HEIGHT,
            // top: buttonRef.current.getBoundingClientRect().height,
          }}
          className="wm-modal"
        >
          {children}
        </span>
      )}
    </span>
  );
};

export default WordModal;
