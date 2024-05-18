import React from "react";
import "./CubertoDesignList.css";
import InfiniteSlider from "../InfiniteSlider/InfiniteSlider.jsx";
import gsap from "gsap";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const CubertoDesignListItem = ({ item }) => {
  const backdropRef = React.useRef(null);

  const handleMouseLeave = (e) => {
    gsap.killTweensOf(backdropRef.current);
    gsap.to(backdropRef.current, {
      height: "0px",
      top: "50%",
      ease: "power2.easeOut",
      duration: 0.2,
    });
  };

  const handleMouseEnter = (e) => {
    if (window.innerWidth < 500) return;
    gsap.to(backdropRef.current, {
      height: "100%",
      top: 0,
      duration: 0.3,
      ease: "power2.easeIn",
    });
  };

  return (
    <a
      href={item.link}
      trarget="_blank"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cdl-item-wrap"
    >
      <div ref={backdropRef} className="cdl-item-backdrop">
        <InfiniteSlider key={item.link}>
          <div className="cdl-backdrop-item">
            <h2 className="cdli-title">{item.title}</h2>
            <ArrowTopRightIcon className="cb-list-icon" />
          </div>
        </InfiniteSlider>
      </div>
      <h2 className="cdli-title">{item.title}</h2>
      <ArrowTopRightIcon className="cb-list-icon" />
    </a>
  );
};

const CubertoDesignList = ({
  items = [
    { title: "Twitter", link: "https://twitter.com/mai_sharmaji" },
    { title: "LinkedIn", link: "https://www.linkedin.com/in/harshjusharma/" },
    { title: "Github", link: "https://github.com/harsh-1923" },
    { title: "Leetcode", link: "https://leetcode.com/harsh_ju_sharma/" },
    { title: "Email", link: "mailto:harsh.ju.sharma@gmail.com" },
  ],
}) => {
  return (
    <div className="cdl-wrap">
      {items.map((item, idx) => {
        return <CubertoDesignListItem item={item} key={idx} />;
      })}
    </div>
  );
};

export default CubertoDesignList;
