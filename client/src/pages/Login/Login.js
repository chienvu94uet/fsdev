import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";
import Form from "../../components/helpers/Form";
import useHttpClient from "../../hooks/useHttpClient";
import { AUTH } from "../../context/AppAction";
import "./Login.scss";

const Login = () => {
  const [, dispatch] = useAppContext();
  const httpClient = useHttpClient();
  const navigate = useNavigate();

  const loginHandler = async (data) => {
    const response = await httpClient.sendRequest(
      "http://localhost:3002/api/v1/auth/login",
      "POST",
      JSON.stringify(data),
      {
        "Content-Type": "application/json",
      }
    );
    localStorage.setItem("token", response.data.token);
    dispatch({
      type: AUTH.UPDATE_AUTH,
      payload: {
        userName: response.data.username,
        isLoggedIn: true,
      },
    });
    navigate("/dashboard");
  };

  const loginForm = [
    {
      name: "username",
      nameValidate: "Username",
      type: "text",
      label: "Username",
      id: "username",
      placeholder: "Enter username",
      rules: {
        isRequired: "true",
      },
    },
    {
      name: "password",
      nameValidate: "Password",
      type: "text",
      label: "Password",
      id: "password",
      placeholder: "Enter password",
      rules: {
        isRequired: "true",
      },
    },
    {
      type: "button",
      name: "submit",
      variant: "primary",
      text: "Login",
    },
  ];
  return (
    <div className="login-page">
      <Form submitHandler={loginHandler} form={loginForm} />
    </div>
  );
};

export default Login;
