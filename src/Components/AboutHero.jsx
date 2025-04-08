import React from "react";
import spnLaw from "../images/spnLaw.png";

function AboutHero() {
  return (
    <div className="container">
      <div className="leftContainer">
        <h1 className="text-3xl md:text-4xl font-semibold font-serif">
          We Are Right Firm
        </h1>
        <div className="paraGraph">
          <h3 className="custom-font">
            Welcome to KWCO Law, a distinguished legal firm established in 10th
            June 2015. We are located in the heart of Nairobi, NINE PLANETS
            APARTMENTS, SUITE PLUTO P4, KABARNET GARDENS, OPP. THE SUDAN
            EMBASSY, NAIROBI . As a Partnership Firm, we specialize in a range
            of legal and accounting services, dedicated to delivering expert
            solutions tailored to our clients.
          </h3>
        </div>
        <button
          className="customButton h-fit
        "
        >
          <a href="#">Read more</a>
        </button>
      </div>
      <div className="rightContainer">
        <div className="squareBox"></div>
        <img className="spnLaw" src={spnLaw} alt="SPN Law" />
      </div>
    </div>
  );
}

export default AboutHero;
