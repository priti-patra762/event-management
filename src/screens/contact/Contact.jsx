import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Header />
      <section className="about-hero">
        <img src="src/assets/images/contact2.jpg" alt="About Banner" className="hero-bg" />
        <div className="overlay">
          <div className="hero-text">
            <h1>CONTACT US</h1>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">

          <div className="contact-left">
            <h2>WANT TO WORK WITH US?</h2>
            <p className="phone-label">TALK TO OUR CLIENT SUPPORT TEAM</p>
            <button className="talk-button">
              <FaPhoneAlt className="icon" /> +91-859-001-0011
            </button>

            <p className="email-label">WRITE TO US ABOUT YOUR NEEDS</p>
            <p className="email">melodiaeventmanagement@gmail.com</p>

            <div className="social-icons">
              <FaInstagram />
              <FaYoutube />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
            </div>
          </div>


          <div className="contact-right">
            <form className="contact-form">
              <input type="text" placeholder="Enter your Full Name" required />
              <input type="text" placeholder="Enter your Phone Number" required />
              <input type="email" placeholder="Enter your Email ID" required />
              <textarea placeholder="Message" rows="5" required></textarea>
              <button type="submit" className="submit-btn">SUBMIT</button>
            </form>
          </div>
        </div>
      </section>



      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41336.2209046282!2d85.80506243152169!3d20.243814060424643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a726c8ffc807%3A0x212845f89456a2cd!2sLingaraj%20Temple!5e0!3m2!1sen!2sin!4v1753797187738!5m2!1sen!2sin"
          className="map-box"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lingaraj Temple"
        ></iframe>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.546735480689!2d85.83817827908004!3d20.277624632690827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7f24cf1d2dd%3A0x5e094527c1d2d7fc!2sShree%20Ram%20Temple%2C%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1753797260624!5m2!1sen!2sin"
          className="map-box"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ram Temple"
        ></iframe>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4237.9402493790585!2d85.81498870895537!3d19.8048194178494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c6b8bfe386af%3A0x8f052c84639c7d48!2sShree%20Jagannatha%20Temple%20Puri!5e0!3m2!1sen!2sin!4v1753797347753!5m2!1sen!2sin"
          className="map-box"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Jagannath Temple"
        ></iframe>
      </div>

      <Footer/>



    </>
  );
}

export default Contact;
