import React from "react";
import Header from "../../components/Header";
import HeroContactSection from "../../components/HeroContactSection";
import FAQSection from "../../components/FAQSection";
import Footer from "../../components/Footer";

function Beach() {
    return (
        <>
            <Header />

            <section className="about-hero">
                <img src="src/assets/images/beach1.jpg" alt="About Banner" className="hero-bg" />
                <div className="overlay">
                    <div className="hero-text">
                        <h1>Beach Wedding</h1>
                    </div>
                </div>
            </section>


            <section class="wedding-section">
                <div class="wedding-container">
                    <div class="wedding-image">
                        <img src="src/assets/images/beach4.jpg" alt="Beach Wedding Setup" />
                    </div>
                    <div class="wedding-content">
                        <h2>Sun-kissed vows on Kerala’s sandy shores of India</h2>
                        <p><strong>Kerala</strong>, in India is a stunning destination for beach wedding ceremonies. With its serene backdrop and picturesque coastline, planning the perfect backdrop for a memorable celebration is made easier with premium services available in this beautiful state of India.</p>
                    </div>
                </div>
            </section>


            <HeroContactSection />
            <FAQSection />
            <Footer />

        </>
    )
}

export default Beach;