import React, { useState } from "react";
import "./Portfolio.css";
import { PortfolioData } from "../../api/PortfolioData";
const Portfolio = () => {
  // {  category: "all",  class: "inactive",    }


 
  //   element.class = "inactive";
  //   console.log('element', element);
  // }))]
  // console.log("text", headingTitle);




  // const [heading1, setHeading1] = useState([
  //   {
  //     heading: "logo",
  //     class: "inactive",
  //   },
  // ]);

  const headingTitle = 
  [ 'all',...new Set(PortfolioData.map((element) => element.category ))];





  const [heading, setHeading] = useState(headingTitle);
  const [imgFilter, setImgFilter] = useState(PortfolioData);

 






  const _hanldeFiltter1 = (curtElemet) => {

    console.log(curtElemet);


    if (curtElemet === "all") {
      return setImgFilter(PortfolioData);
    }
    const updateImg = PortfolioData.filter((element) => {
      return element.category === curtElemet;
    });
    setImgFilter(updateImg);

    

  };

  return (
    <section className="portfolio" id="portfolio">
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
          <div className="col-lg-12">
            <div className="heading " >
              

              {heading.map((element, index) => {
                return (
                  <b
                    key={index}
                    
                    onClick={() => {
                      
                      _hanldeFiltter1(element);
                    
                    }}
                  >
                    {element}
                  </b>
                );
              })} 

             
            </div>
            <div className="portfolio-wrapper">
              {imgFilter.map((element, index) => {
                return (
                  <div className="imgsection" key={element.id}>
                    <img src={element.img} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
