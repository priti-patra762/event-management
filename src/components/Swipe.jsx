import React from "react";
import img1 from "../assets/images/swipe_img1.jpg"; // adjust path as needed
import img2 from "../assets/images/swipe_img2.jpg"; // adjust path as needed
import img3 from "../assets/images/swipe_img3.jpg"; // adjust path as needed
import img4 from "../assets/images/swipe_img4.jpg"; // adjust path as needed


function Swipe(){
    return(
        <div className="photo-text-section">
  <div className="image-grid">
    <img src={img1} alt="img1" />
    <img src={img2} alt="img2" />
    <img src={img3} alt="img3" />
    <img src={img4} alt="img4" />
  </div>

  <div className="info-box">
    <h2>UNLOCK YOUR DREAM DESTINATION<br/>WEDDING IN KERALA</h2>
    <p>Choose Melodia Event Management Company for your premium destination wedding in Kerala, India...</p>
    <div className="btn-group">
      <button className="expert-btn">Talk to Expert</button>
      <button className="whatsapp-btn">Whatsapp us</button>
    </div>
  </div>
</div>


    )
}
export default Swipe;