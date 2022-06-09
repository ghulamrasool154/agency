import React from "react";
import "./Whyus.css";
import SliderSlick from "../SubComponent/Slider/Slider";
const Whyus = () => {
  return (
    <section className="whyus" id="whyus">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12 m-auto ">
            <SliderSlick />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
