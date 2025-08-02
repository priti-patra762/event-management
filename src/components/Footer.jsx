import React from "react";
import {
    FaInstagram,
    FaYoutube,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaPhoneAlt
} from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer_img"></div>

                <div className="footer_icon">
                    <span><FaInstagram /></span>
                    <span><FaYoutube /></span>
                    <span><FaFacebook /></span>
                    <span><FaLinkedin /></span>
                    <span><FaTwitter /></span>
                </div>

                <div className="footer_content">
                    <h2 className="footer_logo">melodia <span>Event management</span></h2>

                    <p className="footer_description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nemo dolorem sunt tempore ab, perferendis accusantium praesentium voluptatem reiciendis similique in deleniti mollitia quae perspiciatis, dolore possimus maiores harum cupiditate odit odio deserunt tempora? Ea vitae in dicta consectetur maxime odio, deleniti fuga dolore corporis enim laudantium atque voluptas, ad quo placeat voluptatem a incidunt dolorum iusto recusandae commodi! Accusamus necessitatibus a tenetur maxime, laudantium atque. Libero minima non beatae omnis autem ea voluptatum at laborum, cupiditate, esse tempora sequi ratione corporis nesciunt velit commodi blanditiis, debitis ducimus sed optio officiis illum dicta veniam sunt. Numquam tempore ut aspernatur quis.

                    </p>

                    <div className="footer_links">
                        <div className="footer_column">
                            <h4>QUICK LINKS</h4>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Venues</li>
                                <li>Gallery</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        <div className="footer_column">
                            <h4>SERVICES</h4>
                            <ul>
                                <li>Corporate Events</li>
                                <li>Wedding Planner</li>
                                <li>Music & Entertainment</li>
                                <li>Private Parties</li>
                                <li>Destination Wedding</li>
                            </ul>
                        </div>

                        <div className="footer_column">
                            <h4>OTHER LINKS</h4>
                            <ul>
                                <li>Blog</li>
                                <li>Testimonials</li>
                                <li>Privacy Policy</li>
                                <li>Refund Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>

                        <div className="footer_column">
                            <h4>CONTACT INFO</h4>
                            <ul>
                                <li>TV Center, Kakkanad, Kochi</li>
                                <li>Flamon Complex, Thrissur</li>
                                <li>Orkkadavu, Kozhikode</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer_bottom">
                        <FaPhoneAlt /> <span>+91-859-001-0011</span> | melodiaeventmanagement@gmail.com
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
