import RegisterForm from "./components/RegisterForm";
import { useState } from "react";

const baseEndpoint = process.env.REACT_APP_API_URL;

export default function Register() {
  const initFormData = Object.freeze({
    email: "",
    username: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const registerHandler = (e) => {
    e.preventDefault();

    const loginEndPoint = `${baseEndpoint}token/`;

    let bodyStr = JSON.stringify(formData);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyStr,
    };

    // fetch register
  };

  return (
    <div>
      <RegisterForm
        registerHandler={registerHandler}
        handleChange={handleChange}
      ></RegisterForm>
    </div>
  );
}
