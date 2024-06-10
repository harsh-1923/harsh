import React, { useRef, useState, forwardRef } from "react";
import "./InstagramOptions.css";

import { motion, AnimatePresence } from "framer-motion";
import MESSAGES from "./messages.js";

import { Plus, Reply, Send, Copy, MessageSquareWarning } from "lucide-react";

const InstagramOptions = forwardRef((props, ref) => {
  const chatContainerRef = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [revealDelay, setRevealDelay] = useState(false);

  React.useEffect(() => {
    document.title = "Instagram Chat Options";
    return () => {
      document.title = "Harsh Sharma";
    };
  }, []);

  const [pos, setPos] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0,
  });
  const messageRefs = useRef([]);

  const attachRef = (el, index) => {
    messageRefs.current[index] = el;
  };

  const handleClick = (index) => {
    setActiveIndex(index);

    const textRect = messageRefs.current[index].getBoundingClientRect();
    const contentRect = ref.current.getBoundingClientRect();
    let top = Math.max(contentRect.top + 65, textRect.top);
    top = Math.min(top, contentRect.bottom - 280);

    if (Math.abs(top - textRect.top) > 100) {
      console.log("first");
      setRevealDelay(0.3);
    }

    setPos({
      top,
      left: textRect.left,
      right: textRect.right,
      bottom: textRect.bottom,
      width: textRect.width,
      height: textRect.height,
    });
    setShowOptions(true);

    if (navigator.vibrate) {
      navigator.vibrate(200);
    } else {
      console.log("Vibration API not supported");
    }
  };

  return (
    <div className="igo-wrap">
      <AnimatePresence>
        {showOptions ? (
          <motion.div
            className="igo-underlay"
            initial={{
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(31, 31, 31, 0)",
              WebkitBackdropFilter: "blur(0px)",
            }}
            animate={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              backgroundColor: "rgba(31, 31, 31, 0.6)",
            }}
            exit={{
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
              backgroundColor: "rgba(31, 31, 31, 0)",
            }}
            transition={{ duration: 0.15 }}
            onClick={() => {
              setShowOptions(false);
              setActiveIndex(null);
              setPos({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                width: 0,
                height: 0,
              });
            }}
          ></motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {showOptions ? (
          <motion.li
            style={{
              top: pos.top,
              left: pos.left,
              width: pos.width,
              justifyContent:
                MESSAGES[activeIndex].from === "receiver"
                  ? "flex-end"
                  : "flex-start",
            }}
            transition={{ duration: 0.1 }}
            layoutId={`igc-li-${MESSAGES[activeIndex].id}`}
            className="ig-selected-chat"
          >
            <motion.span
              layoutId={`igc-${MESSAGES[activeIndex].id}`}
              className="ig-selected-text"
              style={{
                backgroundColor:
                  MESSAGES[activeIndex].from === "receiver"
                    ? "var(--chat-bg)"
                    : "var(--gray-5)",
              }}
            >
              {MESSAGES[activeIndex].text}
            </motion.span>
          </motion.li>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {showOptions ? (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{
              bounce: 0,
              type: "spring",
              duration: 0.2,
              delay: revealDelay ? 0.1 : 0,
            }}
            className="ig-emojis-wrap"
            style={{
              left: pos.left,
              top: pos.top - 63,
              width: chatContainerRef.current.getBoundingClientRect().width,
              transformOrigin: `${
                MESSAGES[activeIndex].from === "receiver" ? "right" : "left"
              }`,
            }}
          >
            <span style={{ color: "red", fontSize: "30px" }}>❤️</span>
            <span style={{ color: "black", fontSize: "30px" }}>😂</span>
            <span style={{ color: "black", fontSize: "30px" }}>😯</span>
            <span style={{ color: "black", fontSize: "30px" }}>😥</span>
            <span style={{ color: "black", fontSize: "30px" }}>😡</span>
            <span style={{ color: "black", fontSize: "30px" }}>👍</span>
            <span style={{ color: "black", fontSize: "30px" }}>
              <Plus color="var(--gray-11)" size={28} />
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {showOptions ? (
          <div
            onClick={() => {
              setShowOptions(false);
              setActiveIndex(null);
              setPos({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                width: 0,
                height: 0,
              });
            }}
            className="ig-chat-options-wrap-outer"
            style={{
              width: chatContainerRef.current.getBoundingClientRect().width,
              top: pos.top + pos.height + 3,
              justifyContent: `${
                MESSAGES[activeIndex].from === "receiver"
                  ? "flex-end"
                  : "flex-start"
              }`,
            }}
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{
                bounce: 0,
                type: "spring",
                duration: 0.2,
                delay: revealDelay ? 0.1 : 0,
              }}
              style={{
                transformOrigin: `${
                  MESSAGES[activeIndex].from === "receiver"
                    ? "top right"
                    : "top left"
                }`,
              }}
              className="ig-chat-options-wrap"
            >
              <div className="ig-selected-chat-dropdown-option">
                {MESSAGES[activeIndex].time}
              </div>
              <div className="ig-menu-divider" />
              <div className="ig-selected-chat-dropdown-option">
                <>Reply</> <Reply size={20} />
              </div>
              <div className="ig-selected-chat-dropdown-option">
                <>Forward</> <Send size={18} />
              </div>
              <div className="ig-selected-chat-dropdown-option">
                <>Copy</> <Copy size={18} />
              </div>
              <div className="ig-selected-chat-dropdown-option">
                <>Report</> <MessageSquareWarning color={"red"} size={18} />
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div ref={chatContainerRef} className="igo-chats">
        {MESSAGES.map((msg, i) => (
          <React.Fragment key={i}>
            {msg.from === "sender" ? (
              <motion.li
                layoutId={`igc-li-${msg.id}`}
                ref={(el) => attachRef(el, i)}
                key={i}
                id={msg.id}
                data-sender="sender"
                className="igo-sender-text igo-text"
              >
                <motion.span
                  onClick={() => handleClick(i)}
                  layoutId={`igc-${msg.id}`}
                >
                  {msg.text}
                </motion.span>
              </motion.li>
            ) : (
              <motion.li
                layoutId={`igc-li-${msg.id}`}
                ref={(el) => attachRef(el, i)}
                key={i}
                id={msg.id}
                data-sender="receiver"
                className="igo-receiver-text igo-text"
              >
                <motion.span
                  onClick={() => handleClick(i)}
                  layoutId={`igc-${msg.id}`}
                >
                  {msg.text}
                </motion.span>
              </motion.li>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});

export default InstagramOptions;
