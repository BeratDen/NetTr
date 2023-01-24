import { useNavigate, useLocation, json } from "react-router-dom";
import { loginHandle } from "../../utils";
import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
const baseEndpoint = process.env.REACT_APP_API_URL;

const initFormData = Object.freeze({
  username: "",
  password: "",
});

export default function Login() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, updateFormData] = useState(initFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const loginHandler = (e) => {
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

    fetch(loginEndPoint, options)
      .then((response) => {
        if (response.status === 200) {
          loginHandle(formData);
        }
        return response.json();
      })
      .then((authData) => {
        console.log(authData);
        localStorage.setItem("access", authData.access);
        localStorage.setItem("refresh", authData.refresh);
      })
      .catch((err) => {
        console.log("err", err);
      });

    navigate(location?.state?.return_url || "/", {
      replace: true,
      state: {
        name: "Berat",
      },
    });
  };

  return (
    <div>
      Login Page
      <br />
      {!user && (
        <>
          <LoginForm
            loginHandler={loginHandler}
            handleChange={handleChange}
          ></LoginForm>
        </>
      )}
      {user && <nav>Hoşgeldiniz... {user.username}</nav>}
    </div>
  );
}
