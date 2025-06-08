import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  return (
    <>
      <div className="container d-flex justify-content-between my-3">
        <h1>Service History | Past Order Details</h1>
        <Button className="border-0 shadow bg-danger">Clear History</Button>
      </div>
      <div className="container-fluid">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Service Name</th>
              <th>Service Category</th>
              <th>Date</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Link>Washing</Link>
              </td>
              <td>Urgent</td>
              <td>24/11/2001</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Link>Folding</Link>
              </td>
              <td>Normal</td>
              <td>06/01/1999</td>
              <td>150</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default OrderHistory;
