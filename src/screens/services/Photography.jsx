
import React, { useState } from "react";
import Header from "../../components/Header";
import HeroContactSection from "../../components/HeroContactSection";
import Homecard from "../../components/Homecard";
import FAQSection from "../../components/FAQSection";
import Footer from "../../components/Footer";

function Photography() {
    const [showModal, setShowModal] = useState(false);

    const steps = [
        {
            title: "Determine The Client’s Photography And Videography Needs",
            desc: "We assess the client’s understanding of wedding photography, the kind of memories they want preserved, and the type of photography planned.",
        },
        {
            title: "Research Potential Photographers",
            desc: "Based on preferences and budget, we research photographers with experience in weddings, especially those who specialize in Kerala.",
        },
        {
            title: "Check Availability And Pricing",
            desc: "Once we have a shortlist, we reach out to photographers to check availability and pricing to ensure the client’s budget and schedule are good.",
        },
        {
            title: "Schedule Consultations",
            desc: "Our coordinators help schedule consultations with the final list of photographers to get clarity on style, expectations, and deliverables.",
        },
        {
            title: "Coordinate Logistics",
            desc: "We coordinate travel, accommodations, and the shoot schedule between the photographer and client, including location of the wedding and pre/post wedding shoot.",
        },
        {
            title: "Final Review",
            desc: "Finally, we schedule a final review with the photographer and client to confirm the photo delivery timeline, editing expectations, and contractual details.",
        },
    ];


    
    return (
        <>
            <Header />



            <div className="wedding">
                <img
                    src="src/assets/images/photography1.jpg"
                    alt="wedding banner"
                    className="hero-bg"
                />

                <div className="overlay">
                    <div className="hero-text">
                        <h1>Best Wedding Photography in Kerala: Capturing Your Love Story</h1>
                        <p>
                            Wedding photography in Kerala is an art that captures the timeless beauty and intimate moments of your special day. Our skilled wedding photographers will document your love story, capturing every laugh, every tear, and every precious memory that will last a lifetime.
                        </p>
                    </div>

                    <div className="btn-group">

                        <button className="expert-btn">Talk to Expert</button>


                        <a className="whatsapp-btn">Whatsapp us </a>

                    </div>
                </div>
            </div>


            <section className="why-kerala-section">
                <div className="why-kerala-container">
                    <div className="kerala-img">
                        <img src="src/assets/images/swipe_img4.jpg" alt="Why Kerala" />
                    </div>

                    <div className="kerala-text">
                        <h5>PLAN YOUR DREAM DESTINATION WEDDING IN KERALA WITH MELODIA</h5>
                        <h2>WHY IS KERALA THE BEST DESTINATION FOR YOUR WEDDING?</h2>
                        <p>
                            Kerala, also called “God’s Own Country,” is a southern state of India and one of the most beautiful places to get married.
                            With its beaches, backwaters, luxury resorts, hill stations, traditional culture, heritage palaces, and houses, Kerala
                            offers stunning wedding locations. Nowadays, it is a top choice for a destination wedding in Kerala.
                        </p>

                        <div className="btn-group">
                            <div className="wed-btn">
                                <button className="expert-btn" onClick={() => setShowModal(true)}>
                                    Talk to Expert
                                </button>
                            </div>

                            <a className="whatsapp-btn">
                                Whatsapp Us
                            </a>
                        </div>
                    </div>
                </div>


                {showModal && (
                    <div className="modal_overlay">
                        <div className="modal_box">
                            <button className="close_btn" onClick={() => setShowModal(false)}>
                                ✖
                            </button>
                            <h4>MELODIA EVENTS</h4>
                            <h2>Request Pricing</h2>
                            <p>Fill this form and we will contact you shortly.</p>

                            <form>
                                <div className="form_grid">
                                    <input type="text" placeholder="Full Name" required />
                                    <input type="tel" placeholder="Phone number" required />
                                    <input type="email" placeholder="Email address" required />
                                    <input type="date" placeholder="Function date" />
                                    <input type="number" placeholder="Number of guests" />
                                    <input type="number" placeholder="Number of rooms" />
                                </div>

                                <div className="radio_group">
                                    <label>Function Type:</label>
                                    <label>
                                        <input type="radio" name="type" /> Wedding
                                    </label>
                                    <label>
                                        <input type="radio" name="type" /> Other events
                                    </label>
                                </div>

                                <div className="radio_group">
                                    <label>Function Time:</label>
                                    <label>
                                        <input type="radio" name="time" /> Day
                                    </label>
                                    <label>
                                        <input type="radio" name="time" /> Evening
                                    </label>
                                </div>

                                <button className="submit_btn" type="submit">
                                    Check Availability & Prices
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </section>


            <section className="wedding-budget-section">
                <div className="container">
                    <h2 className="main-title">How to Plan Your Wedding Photography Budget</h2>
                    <p className="main-subtitle">
                        Planning a wedding budget involves several key decisions. From choosing the right photographer to allocating funds effectively, here’s how to make the most of your investment.
                    </p>

                    <div className="step-grid">
                        <div className="step-box">
                            <span className="step-number">01</span>
                            <h3 className="step-title">Budget Allocation</h3>
                            <p className="step-desc">
                                Allocate a fixed amount for photography. Factor in venue, style, and number of pictures you want in your budget.
                            </p>
                        </div>

                        <div className="step-box">
                            <span className="step-number">02</span>
                            <h3 className="step-title">Choose the Style</h3>
                            <p className="step-desc">
                                Consider traditional, candid, or cinematic wedding photography depending on your preference.
                            </p>
                        </div>

                        <div className="step-box">
                            <span className="step-number">03</span>
                            <h3 className="step-title">Select Key Deliverables</h3>
                            <p className="step-desc">
                                Albums, highlight films, full-length videos — choose what you want delivered.
                            </p>
                        </div>

                        <div className="step-box">
                            <span className="step-number">04</span>
                            <h3 className="step-title">Hire Local Experts</h3>
                            <p className="step-desc">
                                Find local photographers with great reviews. Compare packages and choose the one who fits your needs.
                            </p>
                        </div>
                    </div>

                    <div className="cta-button">
                        <button className="talk-button">Talk to Expert</button>
                    </div>
                </div>
            </section>


            <section className="why-section">
                <div className="why-title">
                    <h2>Why Choose Melodia Photography & Videography</h2>
                    <p>
                        As the top-rated event and wedding planners in Kerala, we arrange the
                        best wedding photographers for your big day by following these steps:
                    </p>
                </div>

                <div className="why-cards">
                    {steps.map((step, index) => (
                        <div className="why-card" key={index}>
                            <div className="why-icon">✔</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
                    <HeroContactSection/>
                    <Homecard/>
                    <FAQSection/>

            
            <Footer />
        </>
    )
}
export default Photography;