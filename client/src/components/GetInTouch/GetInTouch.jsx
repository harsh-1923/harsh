import React from "react";
import "./GetInTouch.css";

const getInTouch = [
  { title: "Twitter", link: "https://twitter.com/mai_sharmaji" },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/harshjusharma/" },
  { title: "Github", link: "https://github.com/harsh-1923" },
  { title: "Email", link: "mailto:harsh.ju.sharma@gmail.com" },
];

const GetInTouch = () => {
  return (
    <div className="contact-wrap">
      {getInTouch.map((item, idx) => (
        <a className="contact-link" target="_blank" href={item.link}>
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default GetInTouch;
