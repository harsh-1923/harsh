import React, { useRef } from "react";
import "./InstagramOptionsPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle.jsx";
import InstagramOptions from "../../../components/Experiments/InstagramOptions/InstagramOptions.jsx";

const InstagramOptionsPage = () => {
  const testRef = useRef(null);
  return (
    <div className="igo-page-wrap">
      <ExpPageTitle title="Instagram Chat Options" date="May, 2024" />
      <div ref={testRef} className="ig-demo-wrap">
        <InstagramOptions ref={testRef} />
      </div>
    </div>
  );
};

export default InstagramOptionsPage;
