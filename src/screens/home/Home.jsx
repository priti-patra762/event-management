
import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Stats from "../../components/Stats";
import AboutSec from "../../components/AboutSec";
import Swipe from "../../components/Swipe";
import Ourservice from "../../components/Ourservice";
import Slide from "../../components/Slide";
import HeroContactSection from "../../components/HeroContactSection";
import Homecard from "../../components/Homecard";
import VenueSlider from "../../components/VenueSlider";
import ClientAbout from "../../components/ClientAbout";
import FAQSection from "../../components/FAQSection";
import HomeVenue from "../../components/HomeVenue";
import Map from "../../components/Map";
import Footer from "../../components/Footer";

import Whatsapp from "../../components/Whatsapp";






function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Stats />
            <AboutSec />
            <Swipe/>
            <Ourservice/>
            <Slide/>
            <HeroContactSection/>
            <Homecard/>
            <VenueSlider/>
            <ClientAbout/>
            <FAQSection/>
            <HomeVenue/>


            <Map/>
            <Footer/>
            <Whatsapp/>
        </>
    );
}

export default Home;
