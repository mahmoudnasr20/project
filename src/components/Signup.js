// create by Dr.rabi3 (Mohamed Abdalrazek)

import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import Classes from "../Style/Login&Signup.module.css";
import Logo from "../UI/Logo";
import imgForm1 from "../Images/imgForm1.svg";
import imgForm2 from "../Images/imgForm2.svg";
import FormGroup from "../UI/formGroup.js";

export default function Signup() {
  return (
    <>
      <Form
        className={
          Classes.form +
          " m-auto p-5 mt-5 mb-5 rounded-3  d-flex  flex-column gap-3"
        }
      >
        <Logo />
        <p>
          <span
            style={{
              display: "block",
              borderRadius: "50%",
              margin: "0 10px",
              fontSize: "25px",
              fontWeight: "500",
            }}
          >
            Welcome in Trello
          </span>
          Please Signup to enjoy your new Trello.
        </p>
        <div className="row g-3">
          <div className="col">
            <FormGroup
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <FormGroup
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
        <FormGroup type="email" name="email" placeholder="Enter your email" />
        <FormGroup
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <FormGroup
          type="password"
          name="confirm-password"
          placeholder="Confirm password"
        />

        <Button variant="primary" type="submit" className="w-100">
          Signup
        </Button>

        <div style={{ borderTop: "1px solid #928e8e", paddingTop: "10px" }}>
          You have account?
          <span
            style={{
              display: "inline-block",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "black",
              margin: "0 10px",
            }}
          ></span>
          <Link to="/login">Log in new</Link>
        </div>
      </Form>
      <div style={{ width: "25%", position: "absolute", bottom: "0px" }}>
        <img src={imgForm1} alt="..." />
      </div>
      <div
        style={{
          width: "25%",
          position: "absolute",
          bottom: "0px",
          right: "0px",
        }}
      >
        <img src={imgForm2} alt="..." />
      </div>
    </>
  );
}
