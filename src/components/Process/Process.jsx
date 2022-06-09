import React from "react";
import "./Process.css";
import request from '../../assests/images/request-call.png'
import Processbox from "../SubComponent/Processbox/Processbox";
const Process = () => {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9 col-12 m-auto">
            <h2 className="title">
              our <span>process</span>
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
          <div className="col-12">
            <div className="process-wrapper">
              <Processbox title='Request call' icon={<i className="fa-solid fa-1"></i>} img={request} />
              <Processbox title='Consultation' icon={<i className="fa-solid fa-2"></i>} img={request} />
              <Processbox title='planning' icon={<i className="fa-solid fa-3"></i>} img={request} />
              <Processbox title='work process' icon={<i className="fa-solid fa-4"></i>} img={request} />
              <Processbox title='correcting' icon={<i className="fa-solid fa-5"></i>} img={request} />
              <Processbox title='deliver ' icon={<i className="fa-solid fa-6"></i>} img={request} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
