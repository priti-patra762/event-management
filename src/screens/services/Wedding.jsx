import React, { useState } from "react";
import Header from "../../components/Header";
import FAQSection from "../../components/FAQSection";
import Footer from "../../components/Footer";


function Wedding() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Header />

            <div className="wedding">
                <img
                    src="src/assets/images/weedding-img1.jpg"
                    alt="wedding banner"
                    className="hero-bg"
                />

                <div className="overlay">
                    <div className="hero-text">
                        <h1>Wedding Planners in Kerala</h1>
                        <p>
                            Planning a wedding can be an exciting but also overwhelming
                            experience. That’s where wedding planners come in – we’re like the
                            fairy godmothers of weddings, waving their magic wand to make your
                            dream wedding come to life!
                        </p>
                    </div>

                    <div className="btn-group">
                        <div className="wed-btn" onClick={() => setShowModal(true)}>
                            <button className="expert-btn">Talk to Expert</button>
                        </div>

                        <a
                            className="whatsapp-btn"
                        >
                            Whatsapp Us
                        </a>

                    </div>
                </div>
            </div>

            {/* ✅ MODAL SECTION */}
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
                                <input type="text" placeholder="Full Name" />
                                <input type="tel" placeholder="Phone number" />
                                <input type="email" placeholder="Email address" />
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


            <div className="wed-paragraph">
                <div className="wed-content">
                    <h1>Enchanting Weddings with Melodia: Your Premier Traditional and Destination Wedding Planners in Kerala</h1>
                    <p>
                        Melodia’s wedding planners in Kerala, India, provide a wide range of services designed to help couples create the perfect wedding day. We start by getting to know the couple, listening to their wishes and ideas, and then working our magic to turn those dreams into reality.

                        Melodia’s wedding event planners and managers services are professional services provided to help couples plan, organize, and execute their wedding day. We work closely with couples to understand their vision, preferences, and budget to create a personalized plan for the wedding day.
                    </p>
                </div>

                <div className="wed-img">
                    <img src="src/assets/images/card5.jpg" alt="image" style={{ width: "300px", height: "400px" }} />
                </div>
            </div>


            <div class="image-text-section">
                <div class="image-box">
                    <img src="src/assets/images/card6.jpg" alt=" Image" />
                </div>
                <div class="text-box">

                    <p>
                        In India, think of wedding planners in Kerala as superheroes, swooping in to save the day and taking care of everything from venue selection to vendor management, budget management to design and décor, timeline management to coordination, and post-wedding ceremony to honeymoon packages on the big day and occasions. We ensure every detail is accounted for and every moment perfectly orchestrated.

                        Whether you are dreaming of a grand traditional wedding, a rustic barn destination wedding, or something in between, Melodia‘s traditional and destination wedding planners in Kerala, India, are here to make it happen. We work tirelessly behind the scenes to create a wedding day that is unique only to you, a day that you and your guests will remember for years to come.

                        So if you are feeling overwhelmed by the endless details and decisions that go into planning a wedding, call us—the fairy godmothers and superheroes of weddings—to make your dream wedding a reality!
                    </p>
                </div>
            </div>

            <div id="content" >
                <p>
                    Mayjohn P. J., the owner of Melodia Event Management Company, strives to create a truly memorable experience for everyone on their special day. Mr. P J endeavors to spread happiness throughout Southern India on wedding days.
                </p>

                <p>
                    Nowadays, entertainment has become a crucial aspect of Southern Indian weddings, especially in Kerala. Various forms of entertainment, such as live music bands, Punjabi dances, flamenco dances, Sufi dances, DJs, live water drummers, and traditional Indian dances like oppana dances, bharatanatyam,  mohiniyattom and kathakali are incorporated into every part of the wedding events. This entertainment is embraced by all communities, including Hindus, Christians, and Muslims. Even the Kerala Muslim community, including the Orthodox Muslim community, incorporates entertainment in their unique way.
                </p>

                <p>
                    Here at Melodia Event Management Company, the owner, Mr. Mayjohn P J, also known as Mayjohn Pindiyan, takes great pride in recalling a memorable wedding day organized by Melodia Event Management Company. The esteemed American newspaper, The New York Times, covered all aspects of the wedding event ceremony event days, including the full wedding event planning, parties, and functions. This exceptional event took place in the aftermath of the COVID-19 pandemic.
                </p>

                <p>
                    This particular event was for Dr. Pfizer, a client of Melodia Events, who is associated with the World Health Organization (WHO). Dr. Pfizer’s daughter, Dr. Sheha Pfizer’s wedding planning and ceremony in Kerala, arranged by Melodia Events, proves that even during a pandemic, Melodia Events strives to provide exceptional services for their client satisfaction. This wedding planning strictly adhered to the COVID-19 protocols and legal regulations set by the Indian government. Dr. Pfizer received special care and the full support of Melodia Events wedding planners and security teams.
                </p>


                <div className="video-grid">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dw3oN6gkfio?si=oRolM4mkojZD_oQm"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                    </iframe>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Z_gDZPiRrbs?si=OrHK4sORN4kNHoej"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                    </iframe>
                </div>

            </div>

            <div id="content"  >

                <p>
                    As a leading wedding event management agency, Melodia Event Management in Kerala, Southern India, provides a range of services:
                </p>

                <p>
                    Design and décor

                    At every wedding, design, and décor are eye-catching elements that breathe life into any bridal occasion. Most destination wedding planners in India don’t conceptualize or coordinate all parts of the ceremony. But we are different. As one of the top wedding planning companies in Kerala, we execute a wedding theme fully, with floral arrangements, lighting, props, and other elements according to your small or big requirements and creative vision. In our capacity as Kerala wedding planners, we expand our scope to provide décor services as well and engage in extensive brainstorming before demonstrating how a particular idea will meet their expectations.

                    We also perform cost calculations and settle for an appropriate theme from all angles. We have our own wedding decoration production house and warehouse across Kerala, which makes it easier for us to handle all aspects of wedding planning and execution.
                </p>

                <p>
                    Choosing a venue and a destination

                    Finding the ideal location for your wedding can be difficult and exhausting. Most destination wedding planners in Kerala, don’t do them as well as they should. There are several restrictions that apply to this activity, including the time of the year, overall spending limits, and the availability of a venue. With these facts in mind, as the best destination wedding planners in Kerala, Melodia Event Management Company coordinates with you to identify your dream location. We can make magic anyplace with reasonable destination wedding packages in Kerala, including beaches, backwaters, or the highlands.
                </p>

                <p>
                    Food

                    Food is common and yet unique. We enjoy savouring various cuisines from across the world and strive to create menus and meal plans that appear beautiful and surprise guests. Therefore, infuse additional individualized and thoughtful components to make eating extremely interesting. Everything appears to fall into place when the cuisine is tasty and presented well. Food can heavily influence wedding experiences; therefore, we collaborate with Kerala’s best wedding caterer terms to bring special treats, especially to satiate your guests’ appetites.

                    Entertainment

                    A wedding becomes exciting and beautiful when all your favorite people are invited. Your guests are the life of the ceremony, so we ensure they are thoroughly pleased and entertained through fun activities planned for the evening. We could also bring a celebrity performer to dazzle the audience. Or we could simply have games to offer every age group a good time. With our wedding and entertainment services, we can bring any of these concepts to life in a way that will satisfy your guests fully. Melodia’s wedding planners in Kerala believe that games and activities complete any wedding, especially during the reception.

                </p>

                <div className="wed-card">
                    <div className="wed-card-box">
                        <div className="wed-card-item">
                            <img src="src/assets/images/card3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3>Houseboat Wedding Kerala</h3>
                                <button className="learn-btn">Learn more</button>
                                <button className="whatsapp-btn">WhatsApp</button>
                            </div>
                        </div>

                        <div className="wed-card-item">
                            <img src="src/assets/images/card2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3>Stage decoration Kochi</h3>
                                <button className="learn-btn">Learn more</button>
                                <button className="whatsapp-btn">WhatsApp</button>
                            </div>
                        </div>

                        <div className="wed-card-item">
                            <img src="src/assets/images/testimonial1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3>Wedding Cars</h3>
                                <button className="learn-btn">Learn more</button>
                                <button className="whatsapp-btn">WhatsApp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








            <FAQSection/>
            <Footer />

        </>
    );
}

export default Wedding;
