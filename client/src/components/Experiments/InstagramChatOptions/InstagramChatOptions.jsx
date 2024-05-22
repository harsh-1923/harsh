import React, { useRef } from "react";
import "./InstagramChatOptions.css";

import { motion } from "framer-motion";

const messages = [
  {
    from: "sender",
    message: "Hello, how are you?",
    timestamp: 1653198253000,
  },
  {
    from: "receiver",
    message: "I'm good, thank you! How about you?",
    timestamp: 1653198284000,
  },
  {
    from: "receiver",
    message: "I'm good, thank you! How about you?",
    timestamp: 1653198284001,
  },
  {
    from: "sender",
    message: "I'm doing well, just working on some projects.",
    timestamp: 1653198315000,
  },
  {
    from: "receiver",
    message: "That's great to hear! What kind of projects?",
    timestamp: 1653198346000,
  },
  {
    from: "sender",
    message:
      "I'm currently developing an application for aircraft component connections.",
    timestamp: 1653198377000,
  },
  {
    from: "receiver",
    message: "Sounds interesting! Good luck with that.",
    timestamp: 1653198408000,
  },
];

const InstagramChatOptions = () => {
  const messageRefs = useRef([]);
  const [selectedMessage, setSelectedMessage] = React.useState(null);

  const handleClick = (index) => {
    console.log(messageRefs.current[index]);
  };

  return (
    <div className="ig-chat-options-wrap">
      <div className="igc-messages">
        <ul>
          {messages.map((message, idx) => (
            <motion.li
              layoutId={`message-${idx}`}
              key={idx}
              data-sender={`${message.from}`}
              className="igc-message"
              ref={(el) => (messageRefs.current[idx] = el)}
              onClick={() => handleClick(idx)}
            >
              <div>{message.message}</div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InstagramChatOptions;
