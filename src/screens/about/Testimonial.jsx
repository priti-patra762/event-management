import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import Slide from "../../components/Slide";


function Testimonial() {
  return (
    <>
      <Header />


      <section className="testimonial-hero">
        <img src="src/assets/images/testimonial1.jpg" alt="About Banner" className="hero-bg" />

      </section>


      <div className="testimonial-wrapper">
        <h5 className="section-subtitle">MELODIA’S CLIENT TESTIMONIALS</h5>
        <h2 className="section-title">See what our Clients have to say</h2>
        <p className="section-description">
          Clients have praised Melodia Events for their professionalism, attention to detail,
          and creative approach in creating unforgettable events. They appreciate the stress-free
          planning experience and recommend Melodia Events as a top-notch event management team.
        </p>
      </div>
      <Slide />


      <div className="testimonial-wrapper">

        <h2 className="section-title">Watch Our Video Reviews</h2>
        <p className="section-description">
          Hear directly from our clients about their unforgettable experiences with Melodia Event Management. Watch the videos below to see why we are the top choice for events in Kerala!
        </p>
      </div>


      <div className="youtube">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/JNKZN8uq1H8?si=z3ZSWmhVAX-dA3Lh"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

        </iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/MTHZO6XE6Lc?si=T9PeOLF8VhoVMYkf"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

        </iframe>

      </div>

      <div className="youtube">
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/d-pr2kavZI0?si=SRHZvAJMxpSymjxe"
          title="YouTube video player" frameborder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

        </iframe>
      </div>












      <Footer />
    </>
  );
}

export default Testimonial;
