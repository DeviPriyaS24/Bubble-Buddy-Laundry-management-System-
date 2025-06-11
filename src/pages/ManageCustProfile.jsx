import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Button } from "react-bootstrap";

const ManageCustProfile = () => {
  return (
    <>
      <div className="container-fluid my-3" >
        <h1>Manage Your Profile | Customer profile</h1>
        <h2>
          Welcome <span className="text-warning fw-bolder">Customer name</span>
        </h2>
        <h2 className="text-center">Edit Profile details</h2>
        <div
          className="d-flex justify-content-center mx-auto my-3"
          style={{ width: "650px" }}
        >
          <Form className="w-100">
            <FloatingLabel
              controlId="floatingInput"
              label="Full Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Full name" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label="Address">
              <Form.Control
                className="mb-3"
                as="textarea"
                placeholder="Address"
                style={{ height: "100px" }}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="Email address" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Phone Number"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Phone Number" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Date of Birth"
              className="mb-3"
            >
              <Form.Control type="date" placeholder="Date of Birth" />
            </FloatingLabel>

            <label>Select Gender:</label>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Male"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Transgender"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}

            <div className="d-flex justify-content-around">
              <Button variant="success">Update</Button>
              <Button variant="warning">Cancel</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ManageCustProfile;
