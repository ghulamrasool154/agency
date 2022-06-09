import React from "react";
import "./Service.css";
import serviceicon from "../../assests/images/cicleicon.png";
import Servicebox from "../SubComponent/Servicebox/Servicebox";
const Service = () => {
  return (
    <section className="service" id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9 col-12 m-auto">
            <h2 className="title">
              our <span>service</span>
            </h2>
            <p className="discription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              fugit, voluptatibus dolorem nesciunt cum ipsa natus porro
              molestias error consequuntur saepe tempora neque illo commodi
              praesentium facere, sunt recusandae ullam?
            </p>
          </div>
        </div>
        <div className="row servicerow">
          <div className="col-12">
            <div className="serviceboc-wrapper">
              <Servicebox
                img={serviceicon}
                title="web desing"
                disc=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptates possimus delectus."
              />
              <Servicebox
                img={serviceicon}
                title="web desing"
                disc=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptates possimus delectus."
              />

              <Servicebox
                img={serviceicon}
                title="web desing"
                disc=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptates possimus delectus."
              />
              <Servicebox
                img={serviceicon}
                title="web desing"
                disc=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptates possimus delectus."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
