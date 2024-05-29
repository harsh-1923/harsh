import React, { useRef, useEffect, useState } from "react";
import "./InstagramOptionsc.css";

import messages from "./messages.js";
import { AnimatePresence, motion, transform } from "framer-motion";
import { Copy, MessageSquareWarning, Plus, Reply, Send } from "lucide-react";

const InstagramOptions = () => {
  const chatContainerRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeMessageRef, setActiveMessageRef] = useState(null);
  const [width, setWidth] = useState(null);

  const [position, setPosition] = useState(0);

  const messageRefs = useRef([]);

  const attachRef = (el, index) => {
    messageRefs.current[index] = el;
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    setActiveMessageRef(messageRefs.current[index]);

    let top = 0;
    const textRect = messageRefs.current[index].getBoundingClientRect();
    setWidth(textRect.width);
    const containerRect = chatContainerRef.current.getBoundingClientRect();

    top = Math.min(
      textRect.top - 40,
      containerRect.bottom - textRect.height - 190 - 80
    );

    top = Math.max(top, 60);

    console.log(top, textRect.top, containerRect.bottom);
    setPosition(`${top}px`);
    setShowMenu(true);
  };

  return (
    <div className="igo-wrap">
      {/* <div className="ig-chat-banner"></div> */}
      {/* <div className="ig-chat-input-wrap">
        <div className="ig-chat-input-inner">
          <button className="ig-chat-input-button">
            <Camera />
          </button>
          <input className="ig-chat-input"></input>
          <button className="ig-chat-input-button">
            <Mic />
          </button>
          <button className="ig-chat-input-button">
            <Image />
          </button>
          <button className="ig-chat-input-button">
            <Sticker />
          </button>
        </div>
      </div> */}

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
            }}
            animate={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
            exit={{
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
            }}
            transition={{ duration: 0 }}
            className="ig-chat-menu-wrap"
            onClick={() => {
              setShowMenu(false);
              setActiveIndex(null);
            }}
          >
            <div
              style={{
                top: position,
                alignItems:
                  messages[activeIndex].from === "sender" ? "start" : "end",
              }}
              className="ig-selected-options-wrap"
            >
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.4, opacity: 0 }}
                transition={{
                  duration: 0.2,
                }}
                className="ig-selected-chat-emoji-wrap"
                style={{
                  transformOrigin:
                    messages[activeIndex].from === "sender" ? "left" : "right",
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
              <motion.span
                layoutId={`igc-${messages[activeIndex].id}`}
                className="ig-chat-selected"
                transition={{
                  duration: 0.2,
                }}
                style={{
                  width: `{width}px !important}`,
                  margin: "0 8px",
                  backgroundImage:
                    messages[activeIndex].from === "receiver"
                      ? "linear-gradient(180deg, #6e6ade, #5472e4)"
                      : `linear-gradient(180deg, ${getComputedStyle(
                          document.documentElement
                        ).getPropertyValue("--gray-2")}, ${getComputedStyle(
                          document.documentElement
                        ).getPropertyValue("--gray-2")})`,
                }}
              >
                {messages[activeIndex].text}
              </motion.span>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{
                  duration: 0.2,
                }}
                style={{
                  transformOrigin:
                    messages[activeIndex].from === "sender"
                      ? "top left"
                      : "top right",
                }}
                className="ig-selected-chat-dropdown-menu"
              >
                <div className="ig-selected-chat-dropdown-option">
                  {messages[activeIndex].time}
                </div>
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
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={chatContainerRef} className="ig-chats-wrap">
        {messages.map((msg, i) => (
          <React.Fragment key={i}>
            {msg.from === "sender" ? (
              <motion.li
                // layoutId={`igc-${msg.id}`}
                ref={(el) => attachRef(el, i)}
                key={i}
                id={msg.id}
                data-sender="sender"
                className="igo-sender-text igo-text"
                onClick={() => handleClick(i)}
              >
                <motion.span layoutId={`igc-${msg.id}`}>{msg.text}</motion.span>
              </motion.li>
            ) : (
              <motion.li
                // layoutId={`igc-${msg.id}`}
                ref={(el) => attachRef(el, i)}
                key={i}
                id={msg.id}
                data-sender="receiver"
                className="igo-receiver-text igo-text"
                onClick={() => handleClick(i)}
              >
                <motion.span layoutId={`igc-${msg.id}`}>{msg.text}</motion.span>
              </motion.li>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InstagramOptions;
