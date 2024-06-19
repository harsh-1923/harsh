import React from "react";
import "./WordModal.css";

import SOUND_POP from "../../../assets/SOUND_POP.mp3";
import useClickOutside from "../../../hooks/useClickOutside";

const WordModal = ({ boundingRef, word, children, muted = false }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const buttonRef = React.useRef(null);
  const rmRef = React.useRef(null);

  const [modalPos, setModalPos] = React.useState();

  const MODAL_WIDTH = 300;
  const MODAL_HEIGHT = 200;
  const BLUR = "blur(2px)";
  const success_audio = new Audio(SOUND_POP);

  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        myFunction();
      }
    };
    window.addEventListener("scroll", closeModal);
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("scroll", closeModal);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    if (isModalOpen) closeModal();
    else {
      computeModalPos();
      if (!muted) success_audio.play();
      setIsModalOpen(true);
    }
  };

  useClickOutside(rmRef, closeModal);

  const computeModalPos = () => {
    if (!buttonRef) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const boundingRect = boundingRef
      ? boundingRef.current.getBoundingClientRect()
      : {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: window.innerHeight,
          width: window.innerWidth,
          height: window.innerHeight,
        };

    const SPACE_WIDTH = boundingRect.width;
    const SPACE_HEIGHT = boundingRect.height;

    let GRIDS = getGrids(boundingRect);

    let SPACE_PADDING_WIDTH = boundingRect.width / GRIDS;

    let BUTTON_CENTER =
      buttonRect.left - boundingRect.left + buttonRect.width / 2;

    let verticalPos = { top: buttonRect.height };
    let def = boundingRef
      ? Math.min(
          window.innerHeight,
          boundingRef.current.getBoundingClientRect().bottom
        )
      : window.innerHeight;

    let isFlipped = false;
    if (Math.abs(buttonRect.bottom - def) < MODAL_HEIGHT + 20) {
      isFlipped = true;
      verticalPos = { bottom: buttonRect.height };
    }

    // console.log({
    //   SPACE_WIDTH,
    //   SPACE_PADDING_WIDTH,
    //   GRIDS,
    //   left: buttonRect.left - boundingRect.left,
    //   rightEnd: (GRIDS - 1) * SPACE_PADDING_WIDTH,
    //   BUTTON_CENTER,
    // });

    if (BUTTON_CENTER < SPACE_PADDING_WIDTH) {
      // console.log("Left");

      if (buttonRect.left + MODAL_WIDTH > boundingRect.right) {
        let DELTA_ADJ = buttonRect.left + MODAL_WIDTH - boundingRect.right + 16;

        setModalPos({
          left: -1 * DELTA_ADJ,
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
    } else if (BUTTON_CENTER > (GRIDS - 1) * SPACE_PADDING_WIDTH) {
      // console.log("Right");

      if (buttonRect.right - MODAL_WIDTH < boundingRect.left - 16) {
        let DELTA_ADJ = boundingRect.left - buttonRect.right + MODAL_WIDTH + 16;
        setModalPos({
          right: -1 * DELTA_ADJ,
          transformOrigin: isFlipped ? "bottom right" : "top right",
          ...verticalPos,
        });

        return;
      }
      setModalPos({
        right: 0,
        transformOrigin: isFlipped ? "bottom right" : "top right",
        ...verticalPos,
      });
    } else {
      // console.log("Middle");

      setModalPos({
        left: "50%",
        transform: "translateX(-50%)",
        transformOrigin: isFlipped ? "bottom left" : "top left",
        ...verticalPos,
      });
    }
  };

  const getGrids = (boundingRect) => {
    let width = boundingRect.width;

    if (width < 500) return 2;

    if (width > 800) return 4;

    return 3;
  };

  return (
    <div ref={rmRef} style={{ filter: "10px !important" }} className="wm-wrap">
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className="wm-word-btn"
      >
        {word}
      </button>

      {isModalOpen && <div className="wm-underlay"></div>}

      {isModalOpen && (
        <span
          style={{
            ...modalPos,
            width: MODAL_WIDTH,
            maxHeight: MODAL_HEIGHT,
          }}
          className="wm-modal"
        >
          {children}
        </span>
      )}
    </div>
  );
};

export default WordModal;

// const computeModalPosition = () => {
//   if (!buttonRef) return;
//   const buttonRect = buttonRef.current.getBoundingClientRect();

//   let SPACE_WIDTH = boundingRef
//     ? boundingRef.current.getBoundingClientRect().width
//     : window.innerWidth;

//   let SPACE_HEIGHT = boundingRef
//     ? boundingRef.current.getBoundingClientRect().height
//     : window.innerHeight;

//   let GRIDS = window.innerWidth > 600 ? 4 : window.innerWidth > 450 ? 3 : 2;

//   let SPACE_WIDTH_PADDING = SPACE_WIDTH / GRIDS;
//   let SPACE_HEIGHT_PADDING = Math.max(SPACE_HEIGHT / GRIDS, 200);

//   // if (boundingRef) boundingRef.current.style.filter = BLUR;
//   // else {
//   //   document.body.style.filter = BLUR;
//   // }
//   console.log({
//     SPACE_WIDTH,
//     SPACE_WIDTH_PADDING,
//     buttonLeft: buttonRect.left,
//   });

//   let verticalPos = { top: buttonRect.height };
//   let def = boundingRef
//     ? Math.min(
//         window.innerHeight,
//         boundingRef.current.getBoundingClientRect().bottom
//       )
//     : window.innerHeight;

//   let isFlipped = false;
//   if (Math.abs(buttonRect.bottom - def) < MODAL_HEIGHT + 20) {
//     isFlipped = true;
//     verticalPos = { bottom: buttonRect.height };
//   }
//   let RIGHT_LIMIT = boundingRef
//     ? boundingRef.current.getBoundingClientRect().right
//     : window.innerWidth;

//   let LEFT_LIMIT = boundingRef
//     ? boundingRef.current.getBoundingClientRect().left
//     : 0;

//   if (buttonRect.left < SPACE_WIDTH_PADDING) {
//     console.log("Left");
//     if (buttonRect.left + MODAL_WIDTH > RIGHT_LIMIT) {
//       console.log("adjusting from left");
//       let delta_adj = buttonRect.left + MODAL_WIDTH - RIGHT_LIMIT + 16;

//       setModalPos({
//         left: -1 * delta_adj,
//         transformOrigin: isFlipped ? "bottom left" : "top left",
//         ...verticalPos,
//       });

//       return;
//     }

//     setModalPos({
//       left: 0,
//       transformOrigin: isFlipped ? "bottom left" : "top left",
//       ...verticalPos,
//     });
//   } else if (buttonRect.left > (GRIDS - 1) * SPACE_WIDTH_PADDING) {
//     console.log("Right");
//     if (buttonRect.right - MODAL_WIDTH < LEFT_LIMIT) {
//       console.log("Adjusting");
//       let delta_adj = LEFT_LIMIT - buttonRect.right + MODAL_WIDTH;

//       setModalPos({
//         right: -1 * (delta_adj + 16),
//         transformOrigin: isFlipped ? "bottom right" : "top right",
//         ...verticalPos,
//       });

//       return;
//     }

//     setModalPos({
//       right: 0,
//       transformOrigin: isFlipped ? "bottom right" : "top right",
//       ...verticalPos,
//     });
//   } else {
//     console.log("Middle");
//     setModalPos({
//       // left: "50%",
//       transform: "translateX(-50%)",
//       transformOrigin: isFlipped ? "bottom left" : "top left",
//       ...verticalPos,
//     });
//   }
// };
