import React from "react";
import "./TabSwitcherPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import TabSwitcher from "../../../components/Experiments/TabSwitcher/TabSwitcher";

const TabSwitcherPage = () => {
  return (
    <div className="tab-switcher-page-wrap">
      <ExpPageTitle title="Tab Switcher" date="April, 2024" />
      <div className="tab-switcher-demo-wrap">
        <TabSwitcher />
      </div>
    </div>
  );
};

export default TabSwitcherPage;
