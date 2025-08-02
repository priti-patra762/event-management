import React from "react";
import CountUp from "react-countup";
import { FaMapMarkerAlt, FaRegSmile, FaClock, FaCalendarCheck } from "react-icons/fa";

function Stats() {
    return (
        <>
            <section className="stats-section py-5 text-center bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2><CountUp end={15} duration={2} />+</h2>
                            <p>Years of Experience</p>
                        </div>
                        <div className="col-md-3">
                            <h2><CountUp end={1700} duration={3} />+</h2>
                            <p>Events Covered</p>
                        </div>
                        <div className="col-md-3">
                            <h2><CountUp end={1500} duration={3} />+</h2>
                            <p>Satisfied Clients</p>
                        </div>
                        <div className="col-md-3">
                            <h2><CountUp end={4.8} duration={2} decimals={1} /></h2>
                            <p>Customer Rating</p>
                        </div>
                    </div>

                    <div className="mt-4"  style={{overflow:"hidden"}}>
                        <iframe width="460" height="315"
                            src="https://www.youtube.com/embed/1ZKTZehtsRQ?si=myzcPBZAutNYJlGL"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                        </iframe>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Stats;
