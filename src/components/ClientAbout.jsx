import React from "react";


function ClientAbout() {
  return (
    <div className="client-content">
      <h1>Clients About Us</h1>
      <h3>Look at What Our Clients Say About Melodia</h3>
      <p>
        Watch real and genuine client review videos of Melodia Event Management—recorded live at the event venue—highlighting their satisfaction with Melodia’s event planning, venue décor, and post-event services after a successful and unforgettable celebration.
      </p>

      <div className="shorts-iframe">
        <div className="iframe-wrapper">
          <iframe
            src="https://www.youtube.com/embed/VnBLH_1i_dg"
            title="Client Review 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="iframe-wrapper">
          <iframe
            src="https://www.youtube.com/embed/Y_JiJ4WyHbQ?si=3RmusAgmtosDvOa5"
            title="Client Review 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="iframe-wrapper">
          <iframe
            src="https://www.youtube.com/embed/lj-0ayxa3mc"
            title="Client Review 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default ClientAbout;
