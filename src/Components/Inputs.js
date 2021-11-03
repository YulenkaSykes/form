import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import styles from "../styles/inputs.module.scss";

const Inputs = () => {
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

  return (
    <div className={`col centered ${styles.inputs}`}>
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
              ? styles.input_red
              : styles.input_green
            : styles.input
        } ${styles.input}`}
        placeholder="johsmith@gmail.com"
        aria-label="Normal"
        aria-describedby="basic-addon2"
        type="password"
      />
      {error.type === "email" && (
        <span className={`${styles.span_color}`}>{error.text}</span>
      )}
      <span>Create Password</span>
      <FormControl
        value={formData.password}
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
          passwordCheck(e.target.value);
        }}
        className={`${
          formData.email.length > 0
            ? error.type === "password"
              ? styles.input_red
              : styles.input_green
            : styles.input
        } ${styles.input}`}
        placeholder="**********"
        aria-label="Input state"
        aria-describedby="basic-addon2"
        type="password"
      />
      {error.type === "password" && (
        <span className={`${styles.span_color}`}>{error.text}</span>
      )}
      <span>Confirm password</span>
      <FormControl
        value={formData.confirmPassword}
        onChange={(e) => {
          setFormData({ ...formData, confirmPassword: e.target.value });
          secondPasswordCheck(e.target.value);
        }}
        className={`${
          formData.email.length > 0
            ? error.type === "confirmPassword"
              ? styles.input_red
              : styles.input_green
            : styles.input
        } ${styles.input}`}
        placeholder="**********"
        aria-label="Error massage"
        aria-describedby="basic-addon2"
        type="password"
      />
      {error.type === "confirm" && (
        <span className={`${styles.span_color}`}>{error.text}</span>
      )}
    </div>
  );
};

export default Inputs;
