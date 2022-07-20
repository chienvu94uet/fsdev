import React, { useState } from "react";
import { getAllErrorsForm, getErrorMessageOnField } from "../../helpers/form";
import { Button, FileInput, Input } from "../uikits";
import storage from "../../helpers/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { slugify } from "../../helpers/string";

const Form = ({ form, submitHandler }) => {
  const [data, setData] = useState(() => {
    const formData = {};
    form.forEach((f) => {
      formData[f.name] = "";
    });

    return formData;
  });
  const [file, setFile] = useState("");

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

    if (e.target.type === "file") {
      setFile(e.target.files[0]);
      const preview = document.getElementById("preview");
      // tao 1 url tro toi file object, vi image can href la 1 link
      preview.src = URL.createObjectURL(e.target.files[0]);
    }

    let newSlug = "";
    if (name === "title") {
      newSlug = slugify(value);
    } else if (name === "slug") {
      newSlug = slugify(value);
    }

    setErrorForm({
      ...errorForm,
      [name]: "",
    });
    setData({
      ...data,
      [name]: value,
      slug: newSlug,
    });
  };

  const handleUploadImage = () => {
    return new Promise((resolve, reject) => {
      const timeStamp = new Date().getTime();
      const storageRef = ref(
        storage,
        `/files/${file.name.split(".")[0]}_${timeStamp}.${
          file.name.split(".")[1]
        }`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (err) => reject(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            resolve(url);
          });
        }
      );
    });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    const allErrorsForm = getAllErrorsForm(formRules, data);
    if (Object.keys(allErrorsForm).length > 0) {
      setErrorForm(allErrorsForm);
      return;
    }
    const dataForm = { ...data };

    if (file) {
      const imageUploadUrl = await handleUploadImage();
      dataForm.image = imageUploadUrl;
    }
    delete dataForm.submit;
    submitHandler(dataForm);
  };

  const renderTextField = (field) => (
    <div className="mb-16" key={field.name}>
      <Input
        type={field.type}
        placeholder={field.placeholder}
        label={field.label}
        id={field.id}
        name={field.name}
        value={data[field.name]}
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
      {file && (
        <img id="preview" src="" width="100px" height="100px" alt="preview" />
      )}
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
