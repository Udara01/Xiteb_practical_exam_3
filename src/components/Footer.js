import React from "react";
import "./FooterSection.css";
import Footer from "../assets/Footer/Footer-service1.jpg";
import Footer2 from "../assets/Footer/Footer-service2.jpg";
import Footer3 from "../assets/Footer/Footer-service3.png";
import Footer4 from "../assets/Footer/Footer-service4.png";  
import Footer5 from "../assets/Footer/Footer-service5.jpeg";
import Footer6 from "../assets/Footer/Footer-service6.png";


const FooterSection = () => {
  return (
    <footer className="footer py-5">
      <div className="container text-white">

        <div className="row mb-4 align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold">Weekly Newsletter</h4>
            <p>There are many vaiations of passages of lorem ipsum available.</p>
          </div>
          <div className="col-md-6 d-flex">
            <input
              type="email"
              placeholder="Enter Your Mail"
              className="form-control me-2"
            />
            <button className="btn btn-warning text-white fw-bold">SUBSCRIBE</button>
          </div>
        </div>

        <div className="row text-white mt-5">
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">About Us</h6>
            <p>we are provide </p>
            <p><i className="bi bi-telephone-fill me-2"></i>(+94) 11 434 7575</p>
            <p><i className="bi bi-geo-alt-fill me-2"></i>42 Lily Ave, Colombo 00600</p>
          </div>


          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Latest News</h6>
            <p><i className="bi bi-chevron-right me-2"></i>Sed ut perspiciatis unde omnis iste natus</p>
            <p className="small text-muted">5 Minutes Ago</p>
            <p><i className="bi bi-chevron-right me-2"></i>Sed ut perspiciatis unde omnis iste natus</p>
            <p className="small text-muted">5 Minutes Ago</p>
          </div>


          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Customer Service</h6>
            <ul className="list-unstyled">
              <li><i className="bi bi-caret-right-fill me-2"></i>Support Forums</li>
              <li><i className="bi bi-caret-right-fill me-2"></i>Communication</li>
              <li><i className="bi bi-caret-right-fill me-2"></i>FAQs</li>
              <li><i className="bi bi-caret-right-fill me-2"></i>Privacy Policy</li>
              <li><i className="bi bi-caret-right-fill me-2"></i>Rules & Condition</li>
              <li><i className="bi bi-caret-right-fill me-2"></i>Contact Us</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Customer Service</h6>
            <div className="row g-2">
              {[Footer, Footer2, Footer3, Footer4, Footer5, Footer6].map((img, i) => (
                <div className="col-4" key={i}>
                  <img src={img} alt={`footer-img-${i + 1}`} className="img-fluid footer-img" />
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="footer-bottom d-flex justify-content-between align-items-center mt-4 pt-4 border-top text-white small">
          <div>Copyright © 2021 All Rights Reserved. Site By Xiteb®</div>
          <div className="social-icons">
            <i className="bi bi-facebook me-2"></i>
            <i className="bi bi-twitter me-2"></i>
            <i className="bi bi-behance me-2"></i>
            <i className="bi bi-dribbble"></i>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
