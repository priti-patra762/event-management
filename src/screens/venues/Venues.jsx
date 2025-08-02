import React from "react";
import Header from "../../components/Header";
import FAQSection from "../../components/FAQSection";
import Footer from "../../components/Footer";



function Venues() {

  return (

    <>
      <Header />

      <section className="about-hero">
        <img src="src/assets/images/venue_img1.jpeg" alt="service  Banner" className="hero-bg" />
        <div className="overlay">
          <div className="hero-text">
            <h1>Best Event & Wedding Venues in Kerala</h1>
            <p>
              <i> Looking for a perfect venue in Kerala? Our updated list features the most stunning locations and venue types, from backwater and beach resorts to banquet halls and traditional local mandapas. Find your dream event venue in Kerala today!  </i>
            </p>
          </div>
        </div>
      </section>

      <div className="venue-content">
        <div className="venue-text">
          <h1>Venues in Kerala: A Fairytale Setting for Events</h1>
          <p>
            Melodia Event Management introduces Kerala’s venues, offering lush greenery,
            breathtaking beauty, and world-class amenities. These venues provide modern
            facilities and luxurious settings, making Kerala the perfect location for events.
          </p>
        </div>
        <div className="venue-image">
          <img src="src/assets/images/beach4.jpg" alt="Kerala Venue" />
        </div>
      </div>
      






      







      <FAQSection />
      <Footer />
    </>
  )
}
export default Venues;