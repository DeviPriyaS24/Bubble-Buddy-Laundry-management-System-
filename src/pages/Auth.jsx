import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import loginillus from "../assets/img/login-illus.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Auth = ({ insideRegister }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-5">
        <div className="card shadow container" style={{ width: "1000px" }}>
          <div className="row align-items-center m-5">
            <div className="col-lg-5">
              <img className="img-fluid" src={loginillus} alt="" />
            </div>
            <div className="col-lg-7">
              <h1>Sign Up</h1>
              {insideRegister ? (
                <FloatingLabel
                  controlId="floatingInput"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Username" />
                </FloatingLabel>
              ) : (
                ""
              )}

              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="Email address" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Password"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>

              {insideRegister ? (
                <div>
                  <Button className="bg-warning border-0 shadow mb-3">
                    Register
                  </Button>
                  <p>
                    Already registered? <Link to="/login">Login here</Link>
                  </p>
                </div>
              ) : (
                <div>
                  <Button className="bg-warning border-0 shadow mb-3">
                    Login
                  </Button>
                  <p>
                    New user? <Link to="/register">Register here</Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
