import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const AddServices = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex justifu-content-center align-items-center">
        <Button onClick={handleShow} className="btn-success border-0 shadow">
          Add Services <i class="fa-solid fa-plus"></i>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                Select Service
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/washing">Washing</Dropdown.Item>
                <Dropdown.Item href="#/dry-cleaning">
                  Dry Cleaning
                </Dropdown.Item>
                <Dropdown.Item href="#/ironing">Ironing</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
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
                Select Type
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/washing">Basic</Dropdown.Item>
                <Dropdown.Item href="#/dry-cleaning">Premium</Dropdown.Item>
                <Dropdown.Item href="#/ironing">Express</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <FloatingLabel
              controlId="floatingInput"
              label="Service Description"
              className="my-3"
            >
              <Form.Control type="text" placeholder="Service description" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Price Details"
              className="my-3"
            >
              <Form.Control type="text" placeholder="Price Details" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Estimated Time"
              className="my-3"
            >
              <Form.Control type="text" placeholder="Estimated Time" />
            </FloatingLabel>

            <label>Check the allowed Items</label>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Daily wear"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Formal Wear"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Winter Clothes"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Kids Clothing"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Uniforms"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Household clothing items"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>

            <label>Check the fabrics supported</label>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Cotton"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Wool"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Linen"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Silk"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Polyster"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Nylon"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Velvet"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="border-0 shadow" variant="secondary" onClick={handleClose}>
              Cancel 
            </Button>
            <Button className="border-0 shadow" variant="primary" onClick={handleClose}>
              Add Service
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AddServices;
