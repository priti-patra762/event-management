import React from "react";

function Map() {
  return (
    <div className="map-container">
      
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7013.036770753004!2d77.08568709244237!3d28.49404740296223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19382985d7d1%3A0xb03bedc65fe6f2b2!2sDLF%20Cyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1753603606488!5m2!1sen!2sin"
          title="Google Map Location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      
      <div className="form-section">
        <form>
          <input type="text" placeholder="Enter your Full Name" />
          <input type="text" placeholder="Enter your Phone Number" />
          <input type="email" placeholder="Enter your Email ID" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Map;
