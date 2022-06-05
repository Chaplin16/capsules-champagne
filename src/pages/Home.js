import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import CarouselProp from "../components/CarouselProp";
import CarouselGen from "../components/CarouselGen";
import Contact from "../components/Contact";
import TextPresentation from "../components/TextPresentation";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="header">
        <Logo />
        <Contact />
      </div>
      <Navigation />
      <img
        className="banner"
        src="./capsules-champagne-banner.jpg"
        alt="banniere des capsules de champagne de JP"
      />
      <div className="container">
        <h2 className="styleH2">Nouvelles capsules Propriétaires</h2>
        <CarouselProp />
        <h2 className="styleH2">Nouvelles capsules Génériques</h2>
        <CarouselGen />
        <TextPresentation />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
