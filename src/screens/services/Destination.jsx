
import React, { useState } from "react";

import Header from "../../components/Header";
import FAQSection from "../../components/FAQSection";
import Map from "../../components/Map";
import Footer from "../../components/Footer";

function Destination() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Header />

            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {[1, 2, 3].map((item, index) => (
                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                            <img
                                src={`src/assets/images/destination${item}.jpg`}
                                className="d-block w-100"
                                alt={`destination-${item}`}
                            />

                            {index === 0 && (
                                <div className="carousel-caption-wrapper">
                                    <p className="top-line">TOP VENUE & SERVICES FOR A</p>
                                    <h1>Destination Wedding<br />in Kerala</h1>
                                    <div className="hero-actions">
                                        <button className="enquiry-btn">Venue Enquiry</button>
                                        <div className="rating-box">
                                            <div className="avatars">
                                                <img src="src/assets/images/card4.jpg" alt="user" />
                                                <img src="src/assets/images/card1.jpg" alt="user" />
                                                <img src="src/assets/images/event2.jpeg" alt="user" />
                                            </div>
                                            <div className="rating">⭐ 4.8/5 Rating</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
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

            <div className="dest-content">
                <h1>WHY CHOOSE KERALA FOR YOUR WEDDING?</h1>

                <p>
                    Dreaming of a perfect destination wedding in Kerala? Melodia will help you select and book the best Kerala destination wedding venue in your preferred location across all districts of Kerala. From planning and execution to event hospitality and logistics, we handle everything to make your special day stress-free and unforgettable!
                </p>
            </div>


            <div className="video-wrapper">
                <iframe
                    src="https://www.youtube.com/embed/83gpCFmzbEo?si=TdjtqbkZw3JB0Ra-"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>



            <section className="best-season-section">
                <h3 className="certification">ISO 9001:2015 CERTIFIED</h3>
                <h2 className="section-title">BEST SEASON FOR A DESTINATION WEDDING IN KERALA</h2>

                <div className="season-grid">
                    <div className="season-card">
                        <p><strong>Best Time:</strong> October—March offers cool and pleasant weather across all locations, making it ideal for a destination wedding in Kerala.</p>
                    </div>
                    <div className="season-card">
                        <p><strong>Avoid the Rainy Season:</strong> June to September brings monsoon rains, which can be challenging for outdoor weddings. However, a monsoon wedding concept is possible using modern transparent tents.</p>
                    </div>
                    <div className="season-card dark-card">
                        <h3>Melodia</h3>
                        <p>
                            Planning a monsoon wedding? We offer indoor venues with outside greenery views and covered outdoor spaces with German transparent tents to ensure a seamless destination wedding celebration in Kerala.
                        </p>
                        <div className="expert-btn-wrapper">
                            <button className="expert-btn" onClick={() => setShowModal(true)}>Talk to Expert</button>
                        </div>
                    </div>
                </div>

                
                {showModal && (
                    <div className="modal_overlay">
                        <div className="modal_box">
                            <button className="close_btn" onClick={() => setShowModal(false)}>✖</button>
                            <h4>MELODIA EVENTS</h4>
                            <h2>Request Pricing</h2>
                            <p>Fill this form and we will contact you shortly.</p>
                            <form>
                                <div className="form_grid">
                                    <input type="text" placeholder="Full Name" />
                                    <input type="tel" placeholder="Phone number" />
                                    <input type="email" placeholder="Email address" />
                                    <input type="date" placeholder="Function date" />
                                    <input type="number" placeholder="Number of guests" />
                                    <input type="number" placeholder="Number of rooms" />
                                </div>
                                <div className="radio_group">
                                    <label>Function Type:</label>
                                    <label><input type="radio" name="type" /> Wedding</label>
                                    <label><input type="radio" name="type" /> Other events</label>
                                </div>
                                <div className="radio_group">
                                    <label>Function Time:</label>
                                    <label><input type="radio" name="time" /> Day</label>
                                    <label><input type="radio" name="time" /> Evening</label>
                                </div>
                                <button className="submit_btn" type="submit">Check Availability & Prices</button>
                            </form>
                        </div>
                    </div>
                )}
            </section>


            <div className="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NLJlBJ56IF4?si=sV2BK982rOUCF_d2"
                    title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                  encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>


































            <FAQSection />
            <Map />
            <Footer />
        </>
    );
}

export default Destination;
