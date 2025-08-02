import React from "react";
import { Link } from "react-router-dom";

function Ourservice() {
  const services = [
    {
      title: "Corporate Events",
      desc:" If you want to make a statement at your next corporate event,",
      image: "src/assets/images/ourservice1.jpg",
      link: "/corporate-events"
    },
    {
      title: "Wedding Planners",
      image: "src/assets/images/ourservice2.jpg",
      link: "/wedding-planners",
      desc:"Have you ever dreamed a planning the perfect dream event to be remembered forever ?"
    },
    {
      title: "Decorations",
      image: "src/assets/images/ourservice3.jpg",
      link: "/decorations",
      desc:"Celebrate your spical in paradise as you enjoy a luxcusious destination with us!"
    },
    {
      title: "Beach Weddings",
      image: "src/assets/images/ourservice4.jpg",
      link: "/beach-wedding",
      desc:"celebrete your love admits the serence shores "
    },
    {
      title: "catering",
      image: "src/assets/images/ourservice5.jpg",
      link: "/catering"
    },
    {
      title: "Photography",
      image: "src/assets/images/ourservice6.jpg",
      link: "/photography"
    }
  ];

  return (
    <div className="services-section">
      <h2 className="services-heading">OUR SERVICES</h2>
      <h3 className="services-subheading">Services by Melodia® Event Management</h3>
      <p className="services-description">
        Melodia® Event Management is an ISO 9001:2015 certified event management company
        providing services exclusively throughout the entire state of Kerala, South India...
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="service-card">
            <div className="card-image">
              <img src={service.image} alt={service.title}/>
              <div className="card-hover">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Ourservice;
