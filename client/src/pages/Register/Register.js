import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";
import Form from "../../components/helpers/Form";
import useHttpClient from "../../hooks/useHttpClient";
import { AUTH } from "../../context/AppAction";
import "./Register.scss";

const Register = () => {
  const [, dispatch] = useAppContext();
  const httpClient = useHttpClient();
  const navigate = useNavigate();

  const registerHandler = async (data) => {
    const response = await httpClient.sendRequest(
      "http://localhost:3002/api/v1/auth/register",
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

  const registerForm = [
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
      text: "Register",
    },
  ];
  return (
    <div className="register-page">
      <Form submitHandler={registerHandler} form={registerForm} />
    </div>
  );
};

export default Register;
