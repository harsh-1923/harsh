import React from "react";
import "./ExpPageTitle.css";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

import { Link, Check } from "lucide-react";

const ExpPageTitle = ({ title, date }) => {
  const [isCopying, setIsCopying] = React.useState(false);
  const copy = () => {
    if (isCopying) return;
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setIsCopying(true);
    setTimeout(() => {
      setIsCopying(false);
    }, 3000);
  };
  return (
    <div
      aria-label={`Experiment title: ${title}`}
      className="exp-page-title-wrap"
    >
      <div className="exp-page-title">
        <p>{title}</p>
        <small>{date}</small>
      </div>
      <button className="exp-page-link-button" onClick={copy}>
        <AnimatePresence initial={false} mode="wait">
          {isCopying ? (
            <motion.span
              className="link-icon"
              key="checkmark"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3, bounce: 0.5 }}
            >
              <Check size={15} color="#46FEA5D4" />
            </motion.span>
          ) : (
            <motion.span
              key="link"
              className="link-icon"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3, bounce: 0.5 }}
            >
              <Link size={15} color="#70B8FF" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default ExpPageTitle;
