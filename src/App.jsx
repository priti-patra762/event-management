
import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Header from "./components/Header";
import Venues from "./screens/venues/Venues";

import Contact from "./screens/contact/Contact";
import Blog from "./screens/about/Blog";
import Testimonial from "./screens/about/Testimonial";
import Wedding from "./screens/services/Wedding";
import Destination from "./screens/services/Destination";
import Corporate from "./screens/services/Corporate";
import Photography from "./screens/services/Photography";
import Catering from "./screens/services/Catering";
import Beach from "./screens/services/Beach";
import Photos from "./screens/gallery/Photos";
import Video from "./screens/gallery/Video";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Whatsapp from "./components/Whatsapp";




function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/venues" element={<Venues />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/testmonial" element={<Testimonial />} />

        <Route path="/wedding-planners" element={<Wedding />} />
        <Route path="/destination-wedding-kerala" element={<Destination />} />
        <Route path="/corporate-events" element={<Corporate />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/beach-wedding" element={<Beach />} />

        <Route path="/whatsapp" element={<Whatsapp />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/video" element={<Video />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
