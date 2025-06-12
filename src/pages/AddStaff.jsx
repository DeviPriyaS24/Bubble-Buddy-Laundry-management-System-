import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const AddStaff = () => {
  return (
    <>
      <div className="mt-3 fw-bolder">
        <h2 className="text-center text-primary fw-bolder" style={{textDecoration:"underline"}}>Add New Laundry Staff</h2>
        <div className="d-flex justify-content-center w-50 align-items-center mx-auto">
          <Form className="w-100">
            <h4 className="text-secondary">Personal Information</h4>
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
            <hr />
            <h4>Login Credentials</h4>
            <FloatingLabel
              controlId="floatingInput"
              label="Username"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Username" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <Dropdown className="my-3">
              <Dropdown.Toggle
                id="dropdown-custom-input"
                style={{
                  width: "100%",
                  textAlign: "left",
                  backgroundColor: "white",
                  border: "1px solid #ced4da",
                  color: "#495057",
                  fontWeight: "normal",
                }}
              >
                Role
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Pickup and Delivary Staff</Dropdown.Item>
                <Dropdown.Item href="#/dry-cleaning">
                  Washer
                </Dropdown.Item>
                <Dropdown.Item href="#/ironing">Ironer/Folder</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <hr />

            <h4>Verification Information</h4>

            <FloatingLabel
              controlId="floatingInput"
              label="Adhaar Number"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Adhaar Number" />
            </FloatingLabel>
            {/* image upload also */}

            <div className="d-flex justify-content-around">
              <Button variant="success">Add</Button>
              <Button variant="warning">Cancel</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddStaff;
