import React from "react";
import "./Peopleabout.css";
import Testimonialslider from "../SubComponent/Testimonialslider/Testimonialslider";
const Peopleabout = () => {
  return (
    <section className="peopleabout" id="review">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9 col-12 m-auto">
            <h2 className="title">
              our <span>portfolio</span>
            </h2>
            <p className="discription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              fugit, voluptatibus dolorem nesciunt cum ipsa natus porro
              molestias error consequuntur saepe tempora neque illo commodi
              praesentium facere, sunt recusandae ullam?
            </p>
          </div>
        </div>
        <div className="row">
            <Testimonialslider/>
        </div>
      </div>
    </section>
  );
};

export default Peopleabout;
