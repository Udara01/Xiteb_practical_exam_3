// src/components/WelcomeSection.js
import React from "react";
import "./WelcomeSection.css"; 
import worker1 from "../assets/worker1.jpeg";
import worker2 from "../assets/worker2.jpeg"; 
const WelcomeSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          
          
          <div className="col-md-6 position-relative text-center">
            <img src={worker1} alt="Worker" className="img-fluid rounded" />
            <img src={worker2} alt="Worker" className="img-fluid rounded" />
            <div className="position-absolute bottom-0 start-0 bg-warning text-white px-3 py-2 fw-bold" style={{ transform: "translateY(50%)" }}>
              15,350+ <br />
              Clients Worldwide
            </div>
          </div>

          
          
          <div className="col-md-6 mt-4 mt-md-0">
            <h2>
              TransMax Logistics <br />
              <span className="text-warning">Around the World</span>
            </h2>
            <p>
              Transmax Logistics is a leading logistics and supply chain management company, providing a wide range of services to meet the needs of our clients. Our team of experts is dedicated to delivering innovative solutions that drive efficiency and reduce costs.
            </p>
            <p>
              Our worth added administrations guarantee the progression of products proceeds consistently
              and supply chains stay lean and streamlined for progress.
            </p>
            <button className="btn btn-outline-primary">MORE ABOUT US</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
