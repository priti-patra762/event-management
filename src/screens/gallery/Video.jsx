import React from "react";
import Header from "../../components/Header";
function Video(){

    return (
        <>
        <Header/>
       <section className="about-video">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="hero-bg-video"
  >
    <source src="src/assets/videos/wedding.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="overlay-video">
    <div className="hero-text-video">
      <h1>Video Gallery</h1>
    </div>
  </div>
</section>



        </>
    )
}

export default Video;