import React from 'react';
import bgImage from '../assets/images/event1.jpg'; 


function HeroContactSection() {
  return (
    <section className="hero-contact-section" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImage})` }}>
      <div className="hero-contact-wrapper">
        <div className="hero-left">
          <h1>LOOKING FOR THE MOST CREATIVE & INNOVATIVE EVENT PLANNERS IN KERALA?</h1>
          <p>
            Imagine celebrating the most special events of your life without worrying about a single thing.
            Melodia® Events is here to make your dream events come true! <br /><br />
            Our expert event management team offers professional event planning and management services in cities,
            villages, and small towns across Kerala, from south to north, using creative and innovative methods to plan
            and curate perfect, hassle-free celebrations that will captivate your attendees.
            Contact us today to bring your vision to life and create unforgettable memories!
          </p>
        </div>

        <div className="hero-right">
          <form>
            <input type="text" placeholder="Enter your Full Name" />
            <input type="text" placeholder="Enter your Phone Number" />
            <input type="email" placeholder="Enter your Email ID" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HeroContactSection;
