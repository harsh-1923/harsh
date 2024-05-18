import React, { useEffect, useState, useRef } from "react";
import "./VercelFeedback.css";
import { Smile, Check, Frown, Meh } from "lucide-react";

const VercelFeedback = ({}) => {
  const [isFeedbackActive, setIsFeedbackActive] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(0.3);
  const [submitted, setSubmitted] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const textAreaRef = useRef(null);

  const expandFeedback = () => {
    setExpanded(true);
    setIsFeedbackActive(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitted(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setExpanded(false);
    await new Promise((resolve) => setTimeout(resolve, 200));
    setSubmitted(false);
    setSubmitting(false);
  };

  return (
    <div data-expanded={`${expanded ? "true" : "false"}`} className="vf-wrap">
      <div className="vf-header-wrap">
        Was this helpful?
        <button onClick={() => expandFeedback()} className="smiley-icons">
          <Smile
            color="#49de80"
            className="feedback-smile"
            strokeWidth={2}
            size={16}
          />
        </button>
        <button onClick={() => expandFeedback()} className="smiley-icons">
          <Meh
            color="yellow"
            className="feedback-smile"
            strokeWidth={2}
            size={16}
          />
        </button>
        <button onClick={() => expandFeedback()} className="smiley-icons">
          <Frown
            color="orangered"
            className="feedback-smile"
            strokeWidth={2}
            size={16}
          />
        </button>
      </div>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="vf-form-wrap">
          <textarea
            data-active={`${isFeedbackActive ? "active" : ""}`}
            focus="true"
            ref={textAreaRef}
            type="text"
            className="vf-feedback-input"
            placeholder="Your feedback..."
          />

          <div className="feedback-error-response" />
          <div className="feedback-button-wrap">
            <button
              type="submit"
              className="vf-feedback-submit"
              onClick={handleSubmit}
            >
              {submitting ? (
                <div className="feedback-spinner loader" />
              ) : (
                "Send"
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="success">
          <Check strokeWidth={4} size={20} className="feedback-checkicon" />
          <p>Your feedback has been recieved.</p>
          <p className="basic-text">Thanks for helping</p>
        </div>
      )}
    </div>
  );
};

export default VercelFeedback;
