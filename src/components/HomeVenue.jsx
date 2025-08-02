import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeVenue() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        arrows: true,
        dots: true,
        afterChange: function (index) {
            console.log(`Slider Changed to: ${index + 1}`);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <>
            <div className="homevenue">
                <div className="homevenue-content">
                    <h1 style={{ textAlign: "center" }}>Explore Top Venue’s in Kerala</h1>
                </div>

                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="src/assets/images/about_img2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card’s content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="src/assets/images/blog-img1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card’s content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="src/assets/images/homecard1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card’s content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="src/assets/images/swipe_img2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card’s content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="src/assets/images/ourservice2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card’s content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="src/assets/images/about_img2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card’s content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="src/assets/images/blog-img1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card’s content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="src/assets/images/homecard1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card’s content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="src/assets/images/swipe_img2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card’s content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="src/assets/images/ourservice2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card’s content.
                                    </p>
                                </div>
                            </div>
                        </div>



                    </Slider>
                </div>
            </div>
        </>
    );
}

export default HomeVenue;
