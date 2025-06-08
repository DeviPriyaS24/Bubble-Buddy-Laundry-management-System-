import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const AvailableServices = () => {
  return (
    <>
      <div>
        <h1>Available Laundry services | Service List</h1>
        <div className="container-fluid my-4">
            <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Description</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Washing</td>
              <td>service 1 desc</td>
              <td>1000</td>
              <td><Link to='/servicedetails/:id' className="btn bg-success">Checkout</Link></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Folding</td>
              <td>service2 desc</td>
              <td>150</td>
              <td><Link to='/servicedetails/:id' className="btn bg-success">Checkout</Link></td>
            </tr>
          </tbody>
        </Table>
        </div>
      </div>
    </>
  );
};

export default AvailableServices;
