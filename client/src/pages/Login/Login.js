import React from "react";
import Form from "../../components/helpers/Form";
import useHttpClient from "../../hooks/useHttpClient";
import './Login.scss';

const Login = () => {
  const httpClient = useHttpClient();

  const loginHandler = async (data) => {
    await httpClient.sendRequest(
      "http://localhost:3002/api/v1/auth/login",
      "POST",
      JSON.stringify(data),
      {
        "Content-Type": "application/json",
      }
    );
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
