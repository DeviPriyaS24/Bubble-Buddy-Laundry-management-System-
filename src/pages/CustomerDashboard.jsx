import React from "react";
import CustomerProfile from "../components/CustomerProfile";
import PlaceOrder from "../components/PlaceOrder";
import OrderList from "../components/OrderList";

const CustomerDashboard = () => {
  return (
    <>
      <div className="d-flex">
        <CustomerProfile />
        <div className="w-100">
          <PlaceOrder />
          <OrderList />
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;
