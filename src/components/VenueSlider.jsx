import React, { useEffect } from "react";
import img1 from "../assets/images/card1.jpg";
import img2 from "../assets/images/card2.jpg";
import img3 from "../assets/images/card3.jpg";
import img4 from "../assets/images/card5.jpg";


function VenueSlider() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="venue-container">
      <div className="venue-section">
        <div className="venue-left">
          <div className="venue-img-grid">
            {[img1, img2, img3, img4].map((src, index) => (
              <div className="img-wrapper animate-on-scroll" key={index}>
                <img src={src} alt={`venue-${index}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="venue-right">
          <h2>Struggling to find the perfect venue?</h2>
          <p>
            Find your perfect venue hassle-free with Melodia. <br />
            Easy booking, endless choices.
          </p>
          <button>Explore Venues</button>
        </div>
      </div>
    </div>
  );
}

export default VenueSlider;
