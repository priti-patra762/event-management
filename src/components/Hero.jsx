import React from "react";
import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpeg";
import event3 from "../assets/images/event3.jpg";
import Whatsapp from "../components/Whatsapp";



function Hero() {
  return (
    
    
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {[event1, event2, event3].map((img, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
            <img src={img} className="d-block w-100 hero-img" alt="slide" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start">
              <p className="small-heading">KERALA'S #1 EXCLUSIVE EVENT COMPANY</p>
              <h1 className="main-heading">Partner with Melodia<br />Event Management in Kerala</h1>

              <div className="hero-buttons mt-3">

                <button className="btn btn-primary me-2">Contact Us</button>
                <div className="avatars">
                  <img src="src/assets/images/card3.jpg" alt="user" />
                  <img src="src/assets/images/card4.jpg" alt="user" />
                  <img src="src/assets/images/catrin3.jpg" alt="user" />
                </div>

                <div className="rating">⭐ 4.8/5 Rating</div>
              </div>
            </div>
          </div>
        ))}
      </div>


      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>

      <Whatsapp/>
    </div>
  );
}

export default Hero;
