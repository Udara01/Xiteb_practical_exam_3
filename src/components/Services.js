import React from "react";
import service1 from "../assets/service1.jpg"
import service3 from "../assets/service2.jpg"; 
import service2 from "../assets/service3.png"; 

const ServicesSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="mb-4">Best Global Logistics Solutions.</h2>
        <p className="text-success fw-bold">Real Solution. Real Fast !</p>
        <div className="row mt-4">
          <div className="col-md-4">
            <img
              src={service1}
              alt="Air Freight"
              className="img-fluid rounded"
            />
            <h5 className="mt-3">Air Freight Services</h5>
            <p>At our Auto Service garage, we fully appreciate how difficult it is for people to find...</p>
            <a href="#" className="text-primary">Read More</a>
          </div>
          <div className="col-md-4">
            <img
              src={service2}
              alt="Plane"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-4">
            <img
              src={service2}
              alt="Drone"
              className="img-fluid rounded"
            />
            <h5 className="mt-3">Drone Services</h5>
            <p>These are unique and often differ from one industry to another. Our logistics expertise...</p>
            <a href="#" className="text-primary">Read More</a>
          </div>
        </div>
        <p className="mt-4 text-muted">Logistic & Transport Solutions Saves Your Time. <strong>Finds Your Solutions</strong></p>
      </div>
    </section>
  );
};

export default ServicesSection;
