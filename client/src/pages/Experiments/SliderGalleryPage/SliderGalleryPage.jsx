import React from "react";
import "./SliderGalleryPage.css";
import SliderGallery from "../../../components/ui/SliderGallery/SliderGallery";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle.jsx";
const SliderGalleryPage = () => {
  return (
    <div className="sgp-wrap">
      <ExpPageTitle title="Gallery" date="June 2024" />
      <div className="sgp-demo-wrap">
        <SliderGallery />
      </div>
      <div className="filler" />
      <div className="filler" />
      {/* <SliderGallery /> */}
    </div>
  );
};

export default SliderGalleryPage;
