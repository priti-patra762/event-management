import React from "react";

function Homecard() {
    return (
        <>
            <div className="homecard" >
                <div className="homecard-content">
                    <h3> OUR BLOGS & ARTICLES</h3>
                    <h1>Stories by Melodia Event Management</h1>
                    <p>
                        On this official Melodia Event Management website, we offer a diverse range of blogs and stories covering various topics related to event management in Kerala. From destination wedding planning to corporate events, each blog provides valuable insights to help you plan your next event seamlessly.
                    </p>
                </div>

                <div className="homecard-card">
                    <div class="card" style={{ width: " 18rem;" }} className="card">
                        <img src="src/assets/images/homecard1.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            
                            <p class="card-text"> Destination backwater wedding costs in Alleppey, Kumarakom, and Kochi
                                Destination Backwater Wedding Cost in Alleppey,</p>
                            <a href="#" class="btn btn-primary">Learn more&gt;&gt;</a>
                        </div>
                    </div>

                    <div class="card" style={{ width: "18rem;" }} className="card">
                        <img src="src/assets/images/homecard.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            
                            <p class="card-text"> Legal Requirements for a Destination Wedding in Kerala, India
                                Legal Requirements for a Destination Wedding in Kerala..........</p>
                            <a href="#" class="btn btn-primary">Learn more &gt;&gt;</a>
                        </div>
                    </div>

                    <div class="card" style={{ width: "18rem;" }} className="card">
                        <img src="src/assets/images/homepage3.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            
                            <p class="card-text"> Wedding Venues in Kerala for Destination Weddings
                                Beyond the Backwaters: Unconventional this place must</p>
                            <a href="#" class="btn btn-primary">learn more &gt;&gt;</a>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}

export default Homecard;