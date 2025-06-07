import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

const OrderDetails = () => {
  return (
    <>
      <div className="row container m-5">
        <div className="col-lg-6">
          <img
            className="rounded-5 shadow"
            src="https://www.shutterstock.com/shutterstock/videos/1065989065/thumb/1.jpg?ip=x480"
            alt=""
          />
          <h2>Service Title</h2>
        </div>

        <div className="col-lg-6">
          <Card style={{ width: "22rem" }} className="shadow-sm">
            <Card.Header className="bg-primary text-white">Order #</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Customer:</strong> customerName
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Service:</strong> serviceType
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Pickup Date:</strong> pickupDate
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Delivery Date:</strong>deliveryDate
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Status:</strong>{" "}
                <span className="text-success">status</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Total:</strong> total
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="text-center">
                  <Button className="bg-danger border-0 shadow">
                    Cancel Order
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
