import React from "react";
import "./NewsSection.css";
import logo1 from "../assets/logos/logo1.jpg";
import logo2 from "../assets/logos/logo2.jpg";
import logo3 from "../assets/logos/logo3.jpg";
import logo4 from "../assets/logos/logo4.png";

const logos = [logo1, logo2, logo3, logo4];

const Client = () => {
  return (
    <div className="py-5 bg-white">
      <div className="container mb-5">
        <div className="row justify-content-center align-items-center client-logos">
          {logos.map((logo, index) => (
            <div key={index} className="col text-center">
              <img src={logo} alt={`Logo ${index + 1}`} className="img-fluid logo-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;

