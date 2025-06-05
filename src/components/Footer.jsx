import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="row mx-3 fw-bolder">
        <div className="col">
          <Link className="fs-4" style={{textDecoration:"none"}}>
            <i class="fa-solid fa-shirt"></i> Bubble Buddy
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptas ipsum, blanditiis saepe sequi sed? Dignissimos accusamus
            quasi eius pariatur. Temporibus delectus amet corporis quibusdam
            accusantium molestiae alias illo ad?
          </p>
        </div>
        <div className="col d-flex flex-column">
          <h2>Links</h2>
          <Link style={{textDecoration:"none"}}>Landing</Link>
          <Link style={{textDecoration:"none"}}>Home</Link>
        </div>
        <div className="col d-flex flex-column">
          <h3>Guides</h3>
          <a style={{textDecoration:"none"}} href="">React bootstrap</a>
          <a style={{textDecoration:"none"}} href="">Tailwind</a>
        </div>
        <div className="col">
          <h3>Contact Us</h3>
          <div className="d-flex gap-3">
            <input
              className="form-control w-50"
              type="text"
              placeholder="Enter your email id"
            />
            <Button>
              <i class="fa-solid fa-arrow-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
