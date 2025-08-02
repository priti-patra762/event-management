import React from "react";

function AboutSec() {
  return (
    <>
      <section className="about-section py-5 text-center">
        <div className="container">
          <img
            src="certification-badge.png"
            alt="ISO Certification"
            width="120"
            className="mb-3"
          />
          <h6 className="text-uppercase mt-3 text-muted">ISO 9001:2015 CERTIFIED</h6>
          <h2 className="mt-2 fw-bold">EVENT MANAGEMENT COMPANY IN KERALA</h2>
          <p className="mt-3 px-4 mx-auto" style={{ maxWidth: "800px", lineHeight: "1.6" }}>
            Have you ever dreamed of planning the perfect event that will be remembered forever?
            Look no further than <strong>Melodia® Events</strong>, the top-notch event management
            company in Kerala. We help make your occasion an unforgettable experience with expert
            planning, creative ideas, and professional execution.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutSec;
