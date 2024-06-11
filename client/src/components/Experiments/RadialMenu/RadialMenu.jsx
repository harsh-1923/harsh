import React, { useState, useRef } from "react";
import "./RadialMenu.css";

import { AnimatePresence, motion } from "framer-motion";
import { Plus, Wallet, ShoppingCart, User, Scale } from "lucide-react";
import useClickOutside from "../../../hooks/useClickOutside";
import { toast } from "sonner";

const MENU_OPTIONS = [
  { icon: <Wallet size={24} className="rm-icon" />, label: "Wallet" },
  { icon: <ShoppingCart size={24} className="rm-icon" />, label: "Cart" },
  { icon: <User size={24} className="rm-icon" />, label: "Account" },
];

const TOTAL_BUTTONS = MENU_OPTIONS.length;
const triggerVariant = {
  open: {
    transform: "rotate(-45deg)",
    color: "white",
    backgroundColor: "black",
  },
  closed: {
    transform: "rotate(0deg)",
    color: "black",
    backgroundColor: "black",
  },
};

const RadialMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const RADIAL_DISTANCE = 120;
  const rmRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setShowMenu(false);
    }
  };

  useClickOutside(rmRef, () => {
    setShowMenu(false);
  });

  return (
    <div ref={rmRef} onKeyDown={handleKeyDown} className="rm-wrap">
      <button onClick={() => setShowMenu(!showMenu)} className="rm-trigger">
        <motion.span
          variants={triggerVariant}
          initial="closed"
          animate={showMenu ? "open" : "closed"}
          exit="open"
          style={{
            backgroundImage: !showMenu
              ? "var(--gradient-pastle-green)"
              : "var(--rm-trigger-linear-bg-closed)",
          }}
        >
          <Plus size={34} />
        </motion.span>
      </button>

      <AnimatePresence>
        {showMenu && (
          <>
            {MENU_OPTIONS.map((option, idx) => (
              <motion.button
                aria-label={option.label}
                type="button"
                onClick={() => {
                  toast(`Clicked on ${option.label}`);
                  setShowMenu(false);
                }}
                initial={{
                  transform: "translate(0%, 0%)",
                }}
                animate={{
                  transform: `translate(${
                    -1 *
                    RADIAL_DISTANCE *
                    Math.cos(
                      ((idx * 90) / (TOTAL_BUTTONS - 1)) * (Math.PI / 180)
                    )
                  }px, ${
                    -1 *
                    RADIAL_DISTANCE *
                    Math.sin(
                      ((idx * 90) / (TOTAL_BUTTONS - 1)) * (Math.PI / 180)
                    )
                  }px)`,
                }}
                exit={{
                  transform: "translate(0%, 0%)",
                }}
                className="rm-options"
                key={idx}
              >
                <span key={`icon-${idx}`}>{option.icon}</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { delay: 0, duration: 0.1 } }}
                  transition={{ delay: 0.25 }}
                  className="rm-button-label"
                  key={`label-${idx}`}
                >
                  {option.label}
                </motion.span>
              </motion.button>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RadialMenu;

// import React, { useState } from "react";
// import "./RadialMenu.css";
// import { AnimatePresence, motion } from "framer-motion";

// import { Plus, Wallet, ShoppingCart, User, Scale } from "lucide-react";
// import useClickOutside from "../../../hooks/useClickOutside";
// import { toast } from "sonner";

// const MENU_OPTIONS = [
//   { icon: <Wallet size={30} className="rm-icon" />, label: "Wallet" },
//   { icon: <ShoppingCart size={30} className="rm-icon" />, label: "Cart" },
//   { icon: <User size={30} className="rm-icon" />, label: "Account" },
// ];

// const TOTAL_BUTTONS = MENU_OPTIONS.length;

// const triggerVariant = {
//   open: {
//     transform: "rotate(-45deg)",
//     color: "white",
//     backgroundColor: "black",
//   },
//   closed: {
//     transform: "rotate(0deg)",
//     color: "black",
//     backgroundColor: "black",
//   },
// };

// const RadialMenu = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [currentFocusedIcon, setCurrentFocusedIcon] = useState(null);
//   const RADIAL_DISTANCE = 120;

//   React.useEffect(() => {
//     document.title = "Radial Menu";
//     return () => {
//       document.title = "Harsh Sharma";
//     };
//   }, []);

//   const rmRef = React.useRef(null);

//   useClickOutside(rmRef, () => {
//     setShowMenu(false);
//   });

//   const handleKeyDown = (event) => {
//     if (event.key === "Escape") {
//       setShowMenu(false);
//     }
//   };

//   const evaluatePos = (deltaX, deltaY) => {
//     if (deltaX > 0 || deltaY > 0) {
//       return;
//     }

//     const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
//     // if (distance > RADIAL_DISTANCE) {
//     // }
//     console.log("se");
//   };

//   const calculateAngle = (x1, y1, x2, y2, x3, y3) => {
//     // Vector AB
//     const ABx = x2 - x1;
//     const ABy = y2 - y1;

//     // Vector BC
//     const BCx = x3 - x2;
//     const BCy = y3 - y2;

//     // Dot product of AB and BC
//     const dotProduct = ABx * BCx + ABy * BCy;

//     // Magnitude of AB
//     const magAB = Math.sqrt(ABx * ABx + ABy * ABy);

//     // Magnitude of BC
//     const magBC = Math.sqrt(BCx * BCx + BCy * BCy);

//     // Calculate the angle
//     const angle = Math.acos(dotProduct / (magAB * magBC));

//     // Convert to degrees
//     return angle * (180 / Math.PI);
//   };

//   const handleMouseDown = (event) => {
//     console.log("Click");
//     event.preventDefault();
//     if (showMenu) {
//       setShowMenu(false);
//       return;
//     }
//     setShowMenu(true);
//     const startX = event.clientX;
//     const startY = event.clientY;

//     const handleMouseMove = (e) => {};

//     const handleMouseUp = (e) => {
//       const deltaX = e.clientX - startX;
//       const deltaY = e.clientY - startY;

//       evaluatePos(deltaX, deltaY);
//       console.log(`Delta X: ${deltaX}, Delta Y: ${deltaY}`);

//       document.removeEventListener("mouseup", handleMouseUp);
//     };

//     document.addEventListener("mouseup", handleMouseUp);
//     document.addEventListener("mousemove", handleMouseMove);
//   };

//   const handleInteractionStart = (event) => {
//     console.log("Touch");
//     setShowMenu(true);
//     // event.preventDefault();

//     // if (showMenu) {
//     //   setShowMenu(false);
//     //   return;
//     // }
//     // setShowMenu(true);

//     // // Get the starting coordinates from the touch or mouse event
//     // const startX = event.clientX || event.touches[0].clientX;
//     // const startY = event.clientY || event.touches[0].clientY;

//     // const handleInteractionEnd = (e) => {
//     //   // Determine coordinates based on the type of event
//     //   const endX =
//     //     e.clientX || (e.changedTouches && e.changedATouches[0].clientX);
//     //   const endY =
//     //     e.clientY || (e.changedTouches && e.changedTouches[0].clientY);
//     //   const deltaX = endX - startX;
//     //   const deltaY = endY - startY;

//     //   console.log(`Delta X: ${deltaX}, Delta Y: ${deltaY}`);

//     //   // Clean up event listeners
//     //   document.removeEventListener("mouseup", handleInteractionEnd);
//     //   document.removeEventListener("touchend", handleInteractionEnd);
//     //   console.log("Stopped tracking interaction");
//     // };

//     // // Add event listeners for both touch and mouse
//     // document.addEventListener("mouseup", handleInteractionEnd);
//     // document.addEventListener("touchend", handleInteractionEnd);
//   };

//   return (
//     <div
//       onKeyDown={handleKeyDown}
//       onTouchStart={handleInteractionStart}
//       ref={rmRef}
//       className="rm-wrap"
//     >
//       <motion.button
//         variants={triggerVariant}
//         initial="closed"
//         animate={showMenu ? "open" : "closed"}
//         exit="open"
//         className="rm-button rm-trigger"
//         aria-expanded={showMenu}
//         aria-label="Main Menu"
//         onMouseDown={handleMouseDown}
//         style={{
//           backgroundImage: !showMenu
//             ? "var(--gradient-pastle-green)"
//             : "var(--rm-trigger-linear-bg-closed)",
//         }}
//       >
//         <Plus size={34} />
//       </motion.button>

//       <AnimatePresence>
//         {showMenu && (
//           <>
//             {MENU_OPTIONS.map((option, idx) => (
//               <motion.button
//                 onClick={() => {
//                   toast(`Clicked on ${option.label}`);
//                   setShowMenu(false);
//                 }}
//                 key={idx}
//                 // initial={{
//                 //   transform: "translate(0%, 0%)",
//                 //   transform: "rotate(45deg)",
//                 // }}
//                 // animate={{
//                 //   transform: `translate(${
//                 //     -1 *
//                 //     RADIAL_DISTANCE *
//                 //     Math.cos(
//                 //       ((idx * 90) / (TOTAL_BUTTONS - 1)) * (Math.PI / 180)
//                 //     )
//                 //   }px, ${
//                 //     -1 *
//                 //     RADIAL_DISTANCE *
//                 //     Math.sin(
//                 //       ((idx * 90) / (TOTAL_BUTTONS - 1)) * (Math.PI / 180)
//                 //     )
//                 //   }px) rotate(0deg)`,
//                 // }}
//                 // exit={{
//                 //   transform: "translate(0%, 0%)",
//                 //   transform: "rotate(45deg)",
//                 // }}
//                 aria-label={option.label}
//                 type="button"
//                 className="rm-options rm-button"
//               >
//                 <motion.span
//                   initial={{
//                     transform: "translate(0%, 0%)",
//                     transform: "rotate(45deg)",
//                   }}
//                   animate={{
//                     transform: `translate(${
//                       -1 *
//                       RADIAL_DISTANCE *
//                       Math.cos(
//                         ((idx * 90) / (TOTAL_BUTTONS - 1)) * (Math.PI / 180)
//                       )
//                     }px, ${
//                       -1 *
//                       RADIAL_DISTANCE *
//                       Math.sin(
//                         ((idx * 90) / (TOTAL_BUTTONS - 1)) * (Math.PI / 180)
//                       )
//                     }px) rotate(0deg)`,
//                   }}
//                   exit={{
//                     transform: "translate(0%, 0%)",
//                     transform: "rotate(45deg)",
//                   }}
//                 >
//                   {option.icon}{" "}
//                   <span className="rm-button-label">{option.label}</span>
//                 </motion.span>
//               </motion.button>
//             ))}
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default RadialMenu;
