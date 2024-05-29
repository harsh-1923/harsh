import React from "react";
import "./InstagramOptionsPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle.jsx";
import InstagramOptions from "../../../components/Experiments/InstagramOptions/InstagramOptions.jsx";

const InstagramOptionsPage = () => {
  return (
    <div className="igo-page-wrap">
      <ExpPageTitle title="Instagram Chat Options" date="May, 2024" />
      <div className="ig-demo-wrap">
        <InstagramOptions />
      </div>
    </div>
  );
};

export default InstagramOptionsPage;
