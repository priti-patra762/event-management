import React from "react";
import Header from "../../components/Header";
import HeroContactSection from "../../components/HeroContactSection";
import FAQSection from "../../components/FAQSection";
import Footer from "../../components/Footer";

function Catering() {
    return (
        <>
            <Header />



            <section className="about-hero">
                <img src="src/assets/images/catrin5.jpg" alt="About Banner" className="hero-bg" />
                <div className="overlay">
                    <div className="hero-text">
                        <h1>Best Catrin Serviced</h1>
                    </div>
                </div>
            </section>




            <section className="catering-section">
                <div className="catering-text">
                    <h2>
                        UNFORGETTABLE EVENTS THROUGH <br /> DELICIOUS CATERING SERVICE IN KERALA
                    </h2>
                    <p>
                        Our catering service in Kerala elevates any event to a gourmet experience, with perfectly crafted menus and exceptional service that delight every guest.
                        Whether it’s weddings, gatherings, or celebrations – we cater to your every need, leaving a lasting impression on your guests.
                    </p>
                    <p>
                        Melodia Event Management Company offers a variety of savoury options rooted in Kerala’s traditions of hospitality. We specialize in handpicked, curated catering services that align with your unique style, from traditional feasts to contemporary plates. Our dedicated team of culinary professionals and event planners work with you to craft the perfect wedding catering experience in Kerala. We don’t just feed your guests — we wow them.
                    </p>
                    <div className="cta-buttons">
                        <button className="talk-btn">Talk to Expert</button>
                        <button className="whatsapp-btn">📞 Whatsapp us</button>
                    </div>
                </div>

                <div className="catering-image">
                    <img
                        src="src/assets/images/catrin6.jpg"
                        alt="Catering"
                    />
                </div>
            </section>

            <div className="catrin-menu">
                <div className="catrin-content">
                    <h1>Popular Menu Options for Events in Kerala</h1>
                    <p>Kerala’s rich culinary heritage offers endless possibilities. Melodia Event Management ensures a unique and memorable gastronomical experience for your special occasions.</p>
                </div>

                <div className="catrin-card">

                    <div className="card" style={{ width: " 18rem;" }} id="card">
                        <img src="src/assets/images/catrin1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3>Traditional Kerala Sadhya</h3>
                            <p className="card-text">A vegetarian feast served on banana leaves, featuring rice, sambar, rasam, aviyal, thoran, pachadi, pickles, papadam, and desserts. A must-have for traditional celebrations.</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: " 18rem;" }} id="card">
                        <img src="src/assets/images/catrin2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3>Seafood Delicacies</h3>
                            <p className="card-text">With Kerala's rich seafood tradition, dishes like fish curry, prawn fry, and crab masala are event favorites. Luxurious options like lobster and king prawns can add a touch of opulence.</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem;" }} id="card">
                        <img src="src/assets/images/catrin3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3>Kerala-Style Biriyani</h3>
                            <p className="card-text">A fragrant, flavorful rice dish made with marinated meat or vegetables, blended with aromatic spices and served with a side of raita and pickle. Perfect for larger gatherings, biriyani adds a delightful touch to any celebration</p>
                        </div>
                    </div>

                </div>


                <div className="catrin-card">

                    <div className="card" style={{ width: " 18rem;" }} id="card">
                        <img src="src/assets/images/catrin2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3>North Indian Cuisine</h3>
                            <p className="card-text">North Indian cuisine offers a vibrant and diverse range of flavors that are perfect for elevating any event. Known for its rich gravies, aromatic spices, and hearty meals, it provides a delectable array of options to suit different tastes.</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem;" }} id="card">
                        <img src="src/assets/images/catrin4.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3>Starters and Small Eats</h3>
                            <p className="card-text">Delight your guests with snacks such as banana chips, pazham pori, and parippu vada. Fusion options like chicken tikka or paneer tikka can add a modern twist.</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem;" }} id="card">
                        <img src="src/assets/images/catrin1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3>Desserts
                            </h3>
                            <p className="card-text">End the event on a sweet note with Kerala desserts like payasam, ada pradhaman, and banana halwa, which are sure to impress every guest</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="factors-section">
                <div class="factors-heading">
                    <h2>Factors to Consider When Choosing Catering Service in Kerala</h2>
                    <p>When selecting a catering service in Kerala, it is essential to focus on key aspects like budget, guest preferences, and service style to ensure a seamless dining experience.</p>
                </div>

                <div class="factors-grid">
                    <div class="factor-card">
                        <h3>Budget</h3>
                        <p>Catering cost primarily depends on the type of food and services you choose. Ensure the selected catering service aligns with your budget by negotiating fair prices.</p>
                    </div>

                    <div class="factor-card">
                        <h3>Drinks and Beverages</h3>
                        <p>Work with the caterer to decide on alcoholic and non-alcoholic beverages that suit all guests.</p>
                    </div>

                    <div class="factor-card">
                        <h3>Guest Preferences</h3>
                        <p>Ensure that guest preferences are considered by customizing the menu and food presentation, accommodating all needs for a delightful experience.</p>
                    </div>

                    <div class="factor-card">
                        <h3>Logistics, Supply and Transportation</h3>
                        <p>Timely delivery and adequate setup are crucial to avoid last-minute chaos. Confirm logistics before the event.</p>
                    </div>

                    <div class="factor-card">
                        <h3>Service Style</h3>
                        <p>From buffet, plated or family-style service, select a format that suits your event vibe. Plated is ideal for formal weddings, while buffet suits informal receptions.</p>
                    </div>

                    <div class="factor-card">
                        <h3>Reputation</h3>
                        <p>Make sure to check client reviews and references to choose a trustworthy caterer with proven service history.</p>
                    </div>
                </div>
            </div>

            <HeroContactSection/>
            <div class="video-container">
                <iframe
                    src="https://www.youtube.com/embed/9Kf7wXcHJIs?si=zfrEfHzwI1WsX9S0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>


           
            <FAQSection />
            <Footer />
        </>
    )
}

export default Catering;