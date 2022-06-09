import React from "react";
import "./Aboutus.css";
import abourigthsideimg from "../../assests/images/aboutus.png";
import { Link } from "react-router-dom";
const Aboutus = () => {
  return (
    <section className="aboutus" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title">
              about <span>us</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="leftsideabout">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                cupiditate qui quidem fugiat veniam minima repellat eos odit at,
                pariatur aliquid assumenda accusantium.
              </p>
              <p>
                Quaerat, optio laboriosam doloribus maiores qui corporis? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Sunt, cumque
                repellat accusantium, maxime ipsa et quasi officiis laborum quo
                molestiae velit nemo accusamus adipisci autem cupiditate
                assumenda
              </p>
              <p>
                beatae at vitae! `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aspernatur corporis temporibus molestiae
                nobis. beatae at vitae! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aspernatur corporis temporibus molestiae
                nobis.
              </p>

              <Link to="#" className="readmore">
                read more
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="aboutrightside">
              <img src={abourigthsideimg} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
