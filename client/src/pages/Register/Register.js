import React from "react";
import Form from "../../components/helpers/Form";
import useHttpClient from "../../hooks/useHttpClient";
import './Register.scss';

const Register = () => {
  const httpClient = useHttpClient();

  const registerHandler = async (data) => {
    await httpClient.sendRequest(
      "http://localhost:3002/api/v1/auth/register",
      "POST",
      JSON.stringify(data),
      {
        "Content-Type": "application/json",
      }
    );
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
