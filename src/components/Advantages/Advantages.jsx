import React from "react";
import "./Advantages.css";
import Advantagebox from "../SubComponent/Advantagebox/Advantagebox";
import innovation from "../../assests/images/innovation.png";
import qulity from "../../assests/images/quality.png";
import experince from "../../assests/images/experience.png";
import happyclinet from "../../assests/images/happyclient.png";
import support from "../../assests/images/support.png";
const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9 col-12 m-auto">
          <h2 className="title">
            our <span>advantages</span>
          </h2>
          <p className="discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            fugit, voluptatibus dolorem nesciunt cum ipsa natus porro molestias
            error consequuntur saepe tempora neque illo commodi praesentium
            facere, sunt recusandae ullam?
          </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="advantage-wrapper">
              <Advantagebox
                img={innovation}
                title="innovation"
                disc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam beatae amet"
              />
              <Advantagebox
                img={qulity}
                title="quality"
                disc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam beatae amet"
              />
              <Advantagebox
                img={experince}
                title="experience"
                disc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam beatae amet"
              />
              <Advantagebox
                img={happyclinet}
                title="happy clients"
                disc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam beatae amet"
              />
              <Advantagebox
                img={support}
                title="support"
                disc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam beatae amet"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
