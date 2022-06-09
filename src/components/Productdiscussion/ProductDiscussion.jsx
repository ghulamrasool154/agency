import React from "react";
import "./Productdiscussion.css";
const ProductDiscussion = () => {
  const _hanldeSubmit =(event)=>{
    event.preventDefault();
    console.log('form sending');
  }
  return (
    <section className="Productdiscussion">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title">start your new project</h2>
                <form  className="form" onSubmit={_hanldeSubmit}>
                    <input type="text" placeholder="your name"  className="name"/>
                    <input type="text" placeholder="your email"  className="email"/>
                    <input type="text" placeholder="your phone"  className="phoneno"/>
                    <button type="submit">send request</button>
                </form>

               
          </div>
        </div>
        <div className="row">
            <div className="col-lg-8 m-auto text-center">
            <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ad laudantium similique. Obcaecati, labore? Quidem quas ipsam in voluptates, quod illo ab modi quis alias excepturi odit voluptatum cupiditate dolor?
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDiscussion;
