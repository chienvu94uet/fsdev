import React, { useState } from "react";
import { getAllErrorsForm, getErrorMessageOnField } from "../../helpers/form";
import { Button, FileInput, Input } from "../uikits";

const Form = ({ form, submitHandler }) => {
  const [data, setData] = useState(() => {
    const formData = {};
    form.forEach((f) => {
      formData[f.name] = "";
    });

    return formData;
  });

  const formRules = form.map((f) => ({
    name: f.name,
    nameValidate: f.nameValidate,
    rules: f.rules,
  }));

  const [errorForm, setErrorForm] = useState({});

  const onBlurInputHandler = (e) => {
    const { name, value } = e.target;
    const errorMessage = getErrorMessageOnField(name, value, form, data);
    setErrorForm({
      ...errorForm,
      [name]: errorMessage,
    });
  };

  const onChangeInputHandler = (e) => {
    const { name, value } = e.target;

    setErrorForm({
      ...errorForm,
      [name]: "",
    });
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const allErrorsForm = getAllErrorsForm(formRules, data);
    if (Object.keys(allErrorsForm).length > 0) {
      setErrorForm(allErrorsForm);
      return;
    }

    delete data.submit;

    submitHandler(data);
  };

  const renderTextField = (field) => (
    <div className="mb-16" key={field.name}>
      <Input
        type={field.type}
        placeholder={field.placeholder}
        label={field.label}
        id={field.id}
        name={field.name}
        onBlur={onBlurInputHandler}
        onChange={onChangeInputHandler}
        error={errorForm?.[field.name]}
      />
    </div>
  );

  const renderFileField = (field) => (
    <div key={field.name} className="mb-16">
      <FileInput
        field={field}
        onChange={onChangeInputHandler}
        error={errorForm?.[field.name]}
      />
    </div>
  );

  const renderButtonSubmit = (field) => (
    <div key={field.name} className="mb-16">
      <Button onClick={submitFormHandler} variant={field.variant}>
        {field.text}
      </Button>
    </div>
  );

  return (
    <>
      {form.map((field) => {
        if (["text", "password", "textarea"].includes(field.type)) {
          return renderTextField(field);
        }
        if (["file"].includes(field.type)) {
          return renderFileField(field);
        }

        if (["button"].includes(field.type)) {
          return renderButtonSubmit(field);
        }

        return "";
      })}
    </>
  );
};

export default Form;
