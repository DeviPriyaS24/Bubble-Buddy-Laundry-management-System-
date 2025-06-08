import React from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";

const Landing = () => {
  return (
    <>
      <div className="banner d-flex justify-content-center align-items-center fw-bolder">
        <div>
          <h1 className="land-h1 text-center" style={{ fontSize: "90px" }}>
            Bubble Buddy
          </h1>
          <p
            className="land-p text-center fs-2"
            style={{ fontStyle: "italic" }}
          >
            Laundry made effortless with Bubble Buddy
          </p>
        </div>
      </div>

      <div className="contact-us-main">
        <div className="contact-us">
        <div className="contact-top bg-info p-5">
          <h2 className="fw-bolder">Contact Us</h2>
          <p className="fw-bolder">Questions, reports, feedbacks - We are here for all of it.</p>
        </div>
        <div className="bg-secondary p-5 contact-second shadow" style={{width:"650px"}}>
          <label className="fw-semibold">Tell us what you need help with: </label>
          <FloatingLabel
              controlId="floatingInput"
              label="Enter you message"
              className=" my-3"
            >
              <Form.Control type="text" placeholder="Enter you message" />
            </FloatingLabel>
            <button className="bg-success border-0 rounded-3 shadow fw-bolder p-2">Get Help</button>
        </div>
      </div>

      <div className="text-center">
        contact info
      </div>
      </div>

      <div className="testimonials my-4">
        <h1 className="text-center fw-bolder">Our Happy Customers</h1>
        <marquee
          scrollamount="8"
          scrolldelay=""
          truespeed
          direction="right"
          loop="infinite"
        >
          <div className="d-flex">
            <div
              className="bg-secondary shadow rounded-5 d-flex justify-content-around align-items-center me-2"
              style={{ width: "450px" }}
            >
              <div className="text-center">
                <img
                  style={{ width: "150px", height: "150px" }}
                  className="img-fluid rounded-circle p-1"
                  src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Customer name</h5>
                <div className="stars text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>Customer Review</p>
              </div>
            </div>
            <div
              className="bg-secondary shadow rounded-5 d-flex justify-content-around align-items-center me-2"
              style={{ width: "450px" }}
            >
              <div className="text-center">
                <img
                  style={{ width: "150px", height: "150px" }}
                  className="img-fluid rounded-circle p-1"
                  src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Customer name</h5>
                <div className="stars text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>Customer Review</p>
              </div>
            </div>
            <div
              className="bg-secondary shadow rounded-5 d-flex justify-content-around align-items-center me-2"
              style={{ width: "450px" }}
            >
              <div className="text-center">
                <img
                  style={{ width: "150px", height: "150px" }}
                  className="img-fluid rounded-circle p-1"
                  src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Customer name</h5>
                <div className="stars text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>Customer Review</p>
              </div>
            </div>
            <div
              className="bg-secondary shadow rounded-5 d-flex justify-content-around align-items-center me-2"
              style={{ width: "450px" }}
            >
              <div className="text-center">
                <img
                  style={{ width: "150px", height: "150px" }}
                  className="img-fluid rounded-circle p-1"
                  src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Customer name</h5>
                <div className="stars text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>Customer Review</p>
              </div>
            </div>
            <div
              className="bg-secondary shadow rounded-5 d-flex justify-content-around align-items-center me-2"
              style={{ width: "450px" }}
            >
              <div className="text-center">
                <img
                  style={{ width: "150px", height: "150px" }}
                  className="img-fluid rounded-circle p-1"
                  src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Customer name</h5>
                <div className="stars text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>Customer Review</p>
              </div>
            </div>
          </div>
        </marquee>
        <marquee scrollamount="8"
          scrolldelay=""
          truespeed
          direction="left"
          loop="infinite">
          <div className="d-flex">
            <div
              className="bg-secondary shadow rounded-5 d-flex justify-content-around align-items-center me-2"
              style={{ width: "450px" }}
            >
              <div className="text-center">
                <img
                  style={{ width: "150px", height: "150px" }}
                  className="img-fluid rounded-circle p-1"
                  src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Customer name</h5>
                <div className="stars text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>Customer Review</p>
              </div>
            </div>
            <div
              className="bg-secondary shadow rounded-5 d-flex justify-content-around align-items-center me-2"
              style={{ width: "450px" }}
            >
              <div className="text-center">
                <img
                  style={{ width: "150px", height: "150px" }}
                  className="img-fluid rounded-circle p-1"
                  src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Customer name</h5>
                <div className="stars text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>Customer Review</p>
              </div>
            </div>
            <div
              className="bg-secondary shadow rounded-5 d-flex justify-content-around align-items-center me-2"
              style={{ width: "450px" }}
            >
              <div className="text-center">
                <img
                  style={{ width: "150px", height: "150px" }}
                  className="img-fluid rounded-circle p-1"
                  src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Customer name</h5>
                <div className="stars text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>Customer Review</p>
              </div>
            </div>
            <div
              className="bg-secondary shadow rounded-5 d-flex justify-content-around align-items-center me-2"
              style={{ width: "450px" }}
            >
              <div className="text-center">
                <img
                  style={{ width: "150px", height: "150px" }}
                  className="img-fluid rounded-circle p-1"
                  src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Customer name</h5>
                <div className="stars text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>Customer Review</p>
              </div>
            </div>
            <div
              className="bg-secondary shadow rounded-5 d-flex justify-content-around align-items-center me-2"
              style={{ width: "450px" }}
            >
              <div className="text-center">
                <img
                  style={{ width: "150px", height: "150px" }}
                  className="img-fluid rounded-circle p-1"
                  src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Customer name</h5>
                <div className="stars text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>Customer Review</p>
              </div>
            </div>
          </div>
        </marquee>
      </div>
    </>
  );
};

export default Landing;
