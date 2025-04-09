import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container border p-4">
        <div className="row">
          
          <div className="col-md-6 border-end">
            <h5 className="text-uppercase fw-bold">Trusted Clients</h5>
            <p className="text-muted">We are honored to work with industry leaders</p>
            <div className="testimonial-box position-relative p-4 bg-light rounded shadow-sm">
              <div className="quote-icon">
                <FaQuoteLeft color="white" />
              </div>
              <p className="mb-4">
                Our partnership with this team exceeded expectations. The dedication,
                creativity, and results delivered were outstanding and perfectly aligned
                with our goals. We look forward to future collaborations.
              </p>

              <div className="fw-bold">JOHN DEO</div>
              <small className="text-muted">Managing Director</small>
              <div className="carousel-arrows d-flex gap-2 mt-3">
                <button className="btn btn-sm btn-outline-secondary"><FaChevronLeft /></button>
                <button className="btn btn-sm btn-outline-secondary"><FaChevronRight /></button>
              </div>
            </div>
          </div>

          
          <div className="col-md-6 mt-4 mt-md-0">
            <h5 className="text-uppercase fw-bold">Why Choose Us</h5>
            <p className="text-muted">Discover what sets us apart</p>
            <ul className="list-group list-group-flush custom-accordion">
              <li className="list-group-item d-flex justify-content-between align-items-center">
              Exceptional support and client-first approach
              <FaPlus />
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
              Skilled professionals with deep expertise
              <FaPlus />
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
              Proven track record in diverse industries
              <FaPlus />
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
              Timely delivery and transparent processes
              <FaPlus />
              </li>
            </ul>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default TestimonialsSection;
