import React  from "react";
import "./Skill.css";

const Skills = () => {


  return (
    <section className="skill" id="skill">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9 col-12 m-auto">
            <h2 className="title">
              our <span>skills</span>
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
          <div className="col-lg-3">
            <div id="progressbarContainer">
              
            </div>
          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
