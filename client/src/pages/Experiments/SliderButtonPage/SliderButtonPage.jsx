import React from "react";
import "./SliderButtonPage.css";

import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle.jsx";
import SliderButton from "../../../components/Experiments/SliderButton/SliderButton.jsx";

const SliderButtonPage = () => {
  return (
    <div className="sb-page-wrap">
      <ExpPageTitle title="Slider Button" date="May, 2024" />
      <div className="sb-demo-wrap">
        <SliderButton />
      </div>
    </div>
  );
};

export default SliderButtonPage;
