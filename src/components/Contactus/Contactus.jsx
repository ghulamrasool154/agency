import React from "react";
import "./Contactus.css";
const Contactus = () => {
  return (
    <>
    <section className="contactus " id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-10 col-12 m-auto">
            <h2 className="title">
              our <span>contacts</span>
            </h2>
            <p className="discription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              fugit, voluptatibus dolorem nesciunt cum ipsa natus porro
              molestias error consequuntur saepe tempora neque illo commodi
              praesentium facere, sunt recusandae ullam?
            </p>

            <span className="iconsss">
            <i className="fa-solid fa-location-dot"></i>
                <span className="number">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis id, suscipitr</span>
              </span>
            <div className="contactSect">
              <span className="icons">
                <i className="fa-solid fa-phone-flip"></i>
                <span className="number">+92 (345) 00 00 000</span>
              </span>
              <span className="icons">
                <i className="fa-solid fa-phone-flip"></i>
                <span className="number">+92 (345) 00 00 000</span>
              </span>
              <span className="icons">
              <i className="fa-solid fa-envelope"></i>
                <span className="number">info@website.com</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="location">
        <div className="container">
            <div className="row">
                <div className="col-12 p-0">
                <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.725360119181!2d73.06249881547386!3d31.42169205915122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922434fbc86d4a7%3A0x5c6fe618ccc343be!2sSweet%20Creme!5e0!3m2!1sen!2s!4v1654610704741!5m2!1sen!2s" width='100%' height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Contactus;
