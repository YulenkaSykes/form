import React, { useState } from "react";
import "./App.scss";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

function App() {
  const [error, setError] = useState({ text: "", type: "" });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const emailCheck = (email) =>
    email.length > 3 && email.includes("@") && email.includes(".")
      ? setError({ text: "", type: "" })
      : setError({ type: "email", text: "Email is not correct" });

  const passwordCheck = (password) =>
    password.length >= 6
      ? setError({ text: "", type: "" })
      : setError({ type: "password", text: "Password > 6 symbol" });

  const secondPasswordCheck = (password) =>
    password === formData.password
      ? setError({ text: "", type: "" })
      : setError({ type: "confirm", text: "Is not confirm" });

  const genders = ["Male", "Female", "Other"];

  return (
    <div className="App centered">
      <div className="col centered header">
        <img src="/logo.png" alt="" />
        <h1>Sign Up with email</h1>
      </div>
      <div className="col centered buttons">
        <Button className="btn" variant="success">
          <strong>Sing up</strong>
        </Button>

        <div className="allLinks col centered">
          <div className="links">
            Already have an account?
            <a className="link" href="/">
              &nbsp;Log In
            </a>
          </div>
          <div className="links">
            Review privacy and disclosures
            <a className="link" href="/">
              &nbsp;here
            </a>
          </div>
        </div>

        <div className="col centered inputs">
          <span>E-mail</span>
          <FormControl
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              emailCheck(e.target.value);
            }}
            className={`${
              formData.email.length > 0
                ? error.type === "email"
                  ? "input_red"
                  : "input_green"
                : "input"
            } input`}
            placeholder="johsmith@gmail.com"
            aria-label="Normal"
            aria-describedby="basic-addon2"
            type="password"
          />
          {error.type === "email" && (
            <span className="span_color">{error.text}</span>
          )}
          <span>Create Password</span>
          <FormControl
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
              passwordCheck(e.target.value);
            }}
            className={`${
              formData.password.length > 0
                ? error.type === "password"
                  ? "input_red"
                  : "input_green"
                : "input"
            } input`}
            placeholder="**********"
            aria-label="Input state"
            aria-describedby="basic-addon2"
            type="password"
          />
          {error.type === "password" && (
            <span className="span_color">{error.text}</span>
          )}
          <span>Confirm password</span>
          <FormControl
            value={formData.confirmPassword}
            onChange={(e) => {
              setFormData({ ...formData, confirmPassword: e.target.value });
              secondPasswordCheck(e.target.value);
            }}
            className={`${
              formData.confirmPassword.length > 0
                ? error.type === "confirmPassword"
                  ? "input_red"
                  : "input_green"
                : "input"
            } input`}
            placeholder="**********"
            aria-label="Error massage"
            aria-describedby="basic-addon2"
            type="password"
          />
          {error.type === "confirm" && (
            <span className="span_color">{error.text}</span>
          )}
        </div>

        <div className="selects_wrapper col centered">
          <h2>Gender</h2>
          <div className="row centered selects">
            {genders.map((gender) => (
              <div className="select centered col">
                <img src={`${gender}.png`} alt="" />
                <span>{gender}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
