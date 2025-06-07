import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const OrderList = () => {
  return (
    <>
      <div>
        <h1 className="text-center fw-bolder">Active Orders</h1>
        <div className="row container mb-4">
          <div className="col-lg-3">
            <Card className="order-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://www.shutterstock.com/shutterstock/videos/1065989065/thumb/1.jpg?ip=x480" />
              <Card.Body>
                <Card.Title className="text-center fw-bolder">Service Title</Card.Title>
                <div className="text-center"><Button variant="primary">View Details</Button></div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card className="order-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://www.shutterstock.com/shutterstock/videos/1065989065/thumb/1.jpg?ip=x480" />
              <Card.Body>
                <Card.Title className="text-center fw-bolder">Service Title</Card.Title>
                <div className="text-center"><Button variant="primary">View Details</Button></div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card className="order-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://www.shutterstock.com/shutterstock/videos/1065989065/thumb/1.jpg?ip=x480" />
              <Card.Body>
                <Card.Title className="text-center fw-bolder">Service Title</Card.Title>
                <div className="text-center"><Button variant="primary">View Details</Button></div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card className="order-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://www.shutterstock.com/shutterstock/videos/1065989065/thumb/1.jpg?ip=x480" />
              <Card.Body>
                <Card.Title className="text-center fw-bolder">Service Title</Card.Title>
                <div className="text-center"><Button variant="primary">View Details</Button></div>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row container mb-4">
          <div className="col-lg-3">
            <Card className="order-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://www.shutterstock.com/shutterstock/videos/1065989065/thumb/1.jpg?ip=x480" />
              <Card.Body>
                <Card.Title className="text-center fw-bolder">Service Title</Card.Title>
                <div className="text-center"><Button variant="primary">View Details</Button></div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card className="order-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://www.shutterstock.com/shutterstock/videos/1065989065/thumb/1.jpg?ip=x480" />
              <Card.Body>
                <Card.Title className="text-center fw-bolder">Service Title</Card.Title>
                <div className="text-center"><Button variant="primary">View Details</Button></div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card className="order-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://www.shutterstock.com/shutterstock/videos/1065989065/thumb/1.jpg?ip=x480" />
              <Card.Body>
                <Card.Title className="text-center fw-bolder">Service Title</Card.Title>
                <div className="text-center"><Button variant="primary">View Details</Button></div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card className="order-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://www.shutterstock.com/shutterstock/videos/1065989065/thumb/1.jpg?ip=x480" />
              <Card.Body>
                <Card.Title className="text-center fw-bolder">Service Title</Card.Title>
                <div className="text-center"><Button variant="primary">View Details</Button></div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
