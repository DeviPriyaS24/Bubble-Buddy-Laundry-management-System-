import React from "react";
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ minHeight: "100vh" }}>
          {/* sidebar of admin dashboard */}
          <div className="col-2 d-flex flex-column gap-4 bg-dark pt-4 rounded-right-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1253/1253756.png"
              alt=""
            />
            <h3 className="text-center text-light fw-bolder">
              Admin Dashboard
            </h3>
            <h4>
              <Link to='/customers_list' style={{ textDecoration: "none" }}>Manage Customers</Link>
            </h4>
            <h4>
              <Link to='/add_staff' style={{ textDecoration: "none" }}>Add Staffs</Link>
            </h4>
            <h4>
              <Link to="/services" style={{ textDecoration: "none" }}>
                Services
              </Link>
            </h4>
            <h4>
              <Link style={{ textDecoration: "none" }}>Service Requests</Link>
            </h4>
            <h4>
              <Link style={{ textDecoration: "none" }}>Completed Orders</Link>
            </h4>
          </div>
          <div className="col-10 container mt-4">
            <h3>Active Orders | All Orders</h3>
            <Table striped bordered hover variant="secondary">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order id</th>
                  <th>Service Name</th>
                  <th>Service Category</th>
                  <th>Customer</th>
                  <th>Date of Order</th>
                  <th>Staff assigned</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1001</td>
                  <td>
                    <Link>Washing</Link>
                  </td>
                  <td>Urgent</td>
                  <td>Hari</td>
                  <td>11/6/2025</td>
                  <td>false</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2101</td>
                  <td>
                    <Link>Folding</Link>
                  </td>
                  <td>Normal</td>
                  <td>Vidhya</td>
                  <td>01/4/2025</td>
                  <td>true</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>1003</td>
                  <td>
                    <Link>Iron</Link>
                  </td>
                  <td>Urgent</td>
                  <td>Ambika</td>
                  <td>04/7/2025</td>
                  <td>true</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
