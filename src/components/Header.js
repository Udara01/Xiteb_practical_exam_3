import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";
import cargo1 from "../assets/cargo1.jpg"; 
import cargo2 from "../assets/cargo2.jpeg"

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <img src={logo} alt="Logistic Logo" className="logo" />
            </div>
            
            <nav className="main-nav">
              <ul className="nav-list">
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Home</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Home</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
                </li>

                <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Home</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
                </li>

                <li className="nav-item">
                  <Link to="/tracking">Tracking</Link>
                </li>

                <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Service</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Home</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
                </li>
                
                <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Blog</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Home</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
                </li>
              </ul>
              
              <div className="header-buttons">
                <button className="btn btn-warning">Get a Quote</button>
                <button className="btn btn-dark">Sign Up</button>
              </div>
            </nav>
          </div>
        </div>
      </header> 

      <div className="hero-wrapper">

        <div className="hero-content container">
          <h1>Best Shipping Partner</h1>
          <p className="hero-text">
            Arnet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maceenas, 
            molestie lobortis posuere maceenas. Eget sapien, gravida nequi.
          </p>
          <div className="hero-footer">
            <span className="discover-text">DISCOVER HOPE</span>
            <span className="slide-indicator">2 / 2</span>
          </div>
        </div>
        
        {/* Carousel Background */}
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={cargo1} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={cargo2} className="d-block w-100" alt="Slide 2" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
