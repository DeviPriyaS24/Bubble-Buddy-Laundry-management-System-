import React from "react";
import { Link } from "react-router-dom";

const CustomerProfile = () => {
  return (
    <>
      <div
        className="bg-secondary position-sticky left-0 top-0 p-2 shadow"
        style={{ maxWidth: "300px", minHeight: "100vh" }}
      >
        <div className="text-center">
          <img
            style={{ width: "200px" }}
            className="img-fluid"
            src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png"
            alt=""
          />
        </div>
        <h3 className="text-center fw-bolder">Customer Name</h3>
        <hr />
        <div className="pro-links d-flex flex-column ms-3 fs-5 fw-bolder gap-3">
          <Link style={{ textDecoration: "none" }}>
            <i class="fa-solid fa-user"></i> Profile
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <i class="fa-solid fa-basket-shopping"></i> Book laundry services
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <i class="fa-solid fa-clock-rotate-left"></i> Track Service orders
          </Link>
          <Link to='/order_history' style={{ textDecoration: "none" }}>
            <i class="fa-solid fa-calendar-days"></i> View Order History
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <i class="fa-solid fa-right-from-bracket"></i> Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CustomerProfile;
