import React from "react";
import "./NewsSection.css";

import truck from "../assets/news1.jpeg";
import train from "../assets/news2.jpeg";
import plane from "../assets/news3.avif";
import ship from "../assets/news4.jpeg";

const images = {
  "truck.jpg": truck,
  "train.jpg": train,
  "plane.jpg": plane,
  "ship.jpg": ship,
};

const newsItems = [
  {
    date: "26",
    month: "MAY",
    title: "Title 1 for News",
    image: "truck.jpg",
    admin: "Admin",
    comments: 15,
    text: "nulla facilisi. Donec sodales, enim a bibendum...",
    highlight: true,
  },
  {
    date: "22",
    month: "MAY",
    title: "Title 2 for News",
    image: "train.jpg",
    admin: "Admin",
    comments: 15,
    text: "this is a sample text for news item 2...",
  },
  {
    date: "20",
    month: "MAY",
    title: "Title 3 for News",
    image: "plane.jpg",
    admin: "Admin",
    comments: 15,
    text: "This is a sample text for news item 3...",
    highlight: true,
  },
  {
    date: "15",
    month: "MAY",
    title: "Title 4 for News",
    image: "ship.jpg",
    admin: "Admin",
    comments: 15,
    text: "This is a sample text for news item 4...",
  },
];

const NewsSection = () => {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <h5 className="text-uppercase text-center fw-bold">Latest News</h5>
        <p className="text-center text-muted">Integer congue elit</p>
        <div className="row gy-4">
          {newsItems.map((item, index) => (
            <div className="col-md-6 d-flex" key={index}>
              <div className="d-flex news-card shadow-sm w-100">
                <div
                  className="news-img"
                  style={{
                    backgroundImage: `url(${images[item.image]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className={`news-date ${item.highlight ? "bg-primary" : "bg-dark"}`}>
                    <div>{item.date}</div>
                    <small>{item.month}</small>
                  </div>
                </div>
                <div className={`news-content ${item.highlight ? "bg-primary text-white" : "bg-light"}`}>
                  <h6 className="fw-bold">{item.title}</h6>
                  <div className="small mb-2">
                    {item.admin} &nbsp; | &nbsp; {item.comments} Comments
                  </div>
                  <p className="mb-0 small">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
