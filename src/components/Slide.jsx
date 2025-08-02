import React, { useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

function TestimonialCard({ text, stars, name, date }) {
  const [readMore, setReadMore] = useState(false);
  const maxLength = 180;
  const isLong = text.length > maxLength;
  const displayText = readMore ? text : text.slice(0, maxLength);

  return (
    <div className="testimonial-card">
      <p className="testimonial-text">
        {displayText}
        {isLong && (
          <span
            onClick={() => setReadMore(!readMore)}
            className="read-toggle"
          >
            {readMore ? " Read Less" : " ...Read More"}
          </span>
        )}
      </p>
      <div className="stars">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} color={i < stars ? "gold" : "#ccc"} size={16} />
        ))}
      </div>
      <div className="profile">
        <p className="testimonial-name">{name}</p>
        <p className="testimonial-date">{date}</p>
      </div>
    </div>
  );
}

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const data = [
    {
      text: "Excellent…everyone was surprised by seeing their performances… definitely will invite for next function… highly recommended!!",
      stars: 5,
      name: "Anjali Sharma",
      date: "Feb 12, 2024"
    },
    {
      text: "This is best event management in Kerala. Our wedding event was amazing with this company. We are very happy with this group.",
      stars: 4,
      name: "Rahul Nair",
      date: "Mar 4, 2024"
    },
    {
      text: "In my point of view best event management in Thrissur and very good wedding planner in Kerala",
      stars: 5,
      name: "Neha Menon",
      date: "Apr 8, 2024"
    },
    {
      text: "Very good event management company Kerala. We had a wedding last year. The wedding was wonderful in Thrissur. Thanks Melodia event management.",
      stars: 4,
      name: "Jithin Joseph",
      date: "May 18, 2024"
    },
    {
      text: "Melodia Events is very good event management in Thrissur. My daughter's wedding was amazing with this company.",
      stars: 5,
      name: "Sreelekha Das",
      date: "Jun 22, 2024"
    },
    {
      text: "Very good event management company. Good team management and coordination. Thanks team Melodia Events🙏 for our big day.",
      stars: 4,
      name: "Vishnu R.",
      date: "Jul 10, 2024"
    },
    {
      text: "In my experience it is the best event management company in Kerala.",
      stars: 5,
      name: "Nimisha Raj",
      date: "Jul 20, 2024"
    }
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {data.map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
