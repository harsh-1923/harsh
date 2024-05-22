import React from "react";
import "./InstagramChatOptionsPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import InstagramChatOptions from "../../../components/Experiments/InstagramChatOptions/InstagramChatOptions.jsx";

const InstagramChatOptionsPage = () => {
  return (
    <div className="ig-chat-options-page-wrap">
      <ExpPageTitle title="Instagram Chat Options" date="May, 2024" />
      <div className="ig-chat-demo-wrap">
        <InstagramChatOptions />
      </div>
    </div>
  );
};

export default InstagramChatOptionsPage;
