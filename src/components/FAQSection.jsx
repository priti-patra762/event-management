import React, { useState } from "react";


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Is Melodia an international wedding planner in Kerala?",
      answer:
        "Yes, we focus on destination wedding planning in Kerala, catering to both local clients from South India and North India and international clients...",
    },
    {
      question: "Do you offer wedding packages?",
      answer:
        "Yes, we provide a range of customizable wedding packages suitable for every budget and style.",
    },
    {
      question: "How far in advance should we book your services?",
      answer:
        "It's best to book at least 3-6 months in advance to ensure availability and smooth planning.",
    },
    {
      question: "Do you manage guest travel and accommodation?",
      answer:
        "Yes, we coordinate guest transport and hotel bookings as part of our full-service packages.",
    },
    {
      question: "Can you handle legal requirements for international couples?",
      answer:
        "Absolutely. Our team assists with all necessary legal documents and formalities.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Please check these FAQs.</h2>
      <div className="faq-box">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="icon">{activeIndex === index ? "−" : "+"}</span>
              {item.question}
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
