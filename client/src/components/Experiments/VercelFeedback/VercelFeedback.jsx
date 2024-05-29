import React, { useState, useEffect, useRef } from "react";
import "./VercelFeedback.css";
import { Smile, Check, Loader, Frown, Meh } from "lucide-react";

import useMeasure from "react-use-measure";

import { motion, AnimatePresence } from "framer-motion";
import useClickOutside from "../../../hooks/useClickOutside";

const VercelFeedback = () => {
  const wrappperRef = useRef(null);
  const [state, setState] = useState("inactive");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [data, setData] = useState({ mood: null, feedback: "" });
  const [selectedMood, setSelectedMood] = useState(null);

  const [ref, bounds] = useMeasure();
  const textAreaRef = useRef();

  useClickOutside(wrappperRef, () => {
    // console.log("Clicked out");
    setState("inactive");
    setFeedback("");
    setIsSending(false);
    setSent(false);
    setSelectedMood(null);
  });

  useEffect(() => {
    if (state === "active" && textAreaRef.current) {
      if (window.innerWidth > 500) textAreaRef.current.focus();
    }
  }, [state]);

  const feedbackVars = {
    inactive: { width: "250px", height: "54px" },
    active: {
      width: "340px",
      height: bounds.height,
      borderRadius: "8px",
      outline: "1px solid var(--gray-6)",
    },
  };

  const textAreaVariants = {
    inactive: {
      opacity: 0,
      filter: "blur(4px)",
      y: -20,
    },
    active: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  const handleSend = async () => {
    setIsSending(!isSending);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSending(false);
    setSelectedMood(null);
    setSent(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));
    setData({ mood: selectedMood, feedback: feedback });
    // toast(`<p>Sent to "/api/v1/feedback<p> <br/> ${JSON.stringify(data)}`);
    setState("inactive");
    setSent(false);
    setData({ mood: "", feedback: "" });
    setFeedback("");
  };

  return (
    <motion.div
      ref={wrappperRef}
      variants={feedbackVars}
      initial={"inactive"}
      animate={state === "active" ? "active" : "inactive"}
      className="vercel-feedback-wrap"
      transition={{ type: "spring", duration: 0.3, bounce: 0 }}
      tabIndex={0}
    >
      <div ref={ref} className="vercel-feedback-inner">
        <div className="vercel-feedback-header">
          <span>Was this helpful?</span>
          <div className="vercel-feedback-icons">
            <button
              data-selected-mood={
                selectedMood ? (selectedMood == 1 ? "true" : "false") : "false"
              }
              onClick={() => {
                setState("active");
                setSelectedMood(1);
              }}
              className="vercel-feedback-icon-button"
            >
              <Smile
                className="vercel-feedback-icon"
                size={16}
                color="white"
                strokeWidth={2}
              />
            </button>
            <button
              data-selected-mood={
                selectedMood ? (selectedMood === 2 ? "true" : "false") : "false"
              }
              onClick={() => {
                setState("active");
                setSelectedMood(2);
              }}
              className="vercel-feedback-icon-button"
            >
              <Meh
                className="vercel-feedback-icon"
                size={16}
                color="white"
                strokeWidth={2}
              />
            </button>
            <button
              data-selected-mood={
                selectedMood ? (selectedMood === 3 ? "true" : "false") : "false"
              }
              onClick={() => {
                setState("active");
                setSelectedMood(3);
              }}
              className="vercel-feedback-icon-button"
            >
              <Frown
                className="vercel-feedback-icon"
                size={16}
                color="white"
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
        {sent ? (
          <div className="vercel-feedback-send-success">
            <motion.div
              className="vercel-feedback-send-success"
              initial={{ y: 75, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.2, type: "spring", bouce: 0.6 }}
            >
              <Check
                strokeWidth={3}
                size={26}
                color={"#0070f3"}
                style={{ marginBottom: "20px" }}
              />
              <p>Your feedback has been received.</p>
              <p>Thanks for helping!</p>
            </motion.div>
          </div>
        ) : (
          <motion.div
            variants={textAreaVariants}
            initial={"inactive"}
            animate={state === "active" ? "active" : "inactive"}
            className="vercel-feeback-form-wrap"
          >
            <textarea
              ref={textAreaRef}
              className="vercel-feeback-input"
              placeholder="Your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <motion.div layout className="vercel-feeback-option-tray">
              <button className="vercel-feeback-button" onClick={handleSend}>
                <AnimatePresence initial={false} mode="wait">
                  {isSending ? (
                    <motion.span
                      initial={{ y: -25, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 25, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      key="sending"
                    >
                      <Loader
                        className="vercel-feedback-loader"
                        size={18}
                        strokeWidth={2}
                      />
                    </motion.span>
                  ) : (
                    <motion.span
                      initial={{ y: -25, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 25, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      key="send"
                    >
                      Send
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default VercelFeedback;
