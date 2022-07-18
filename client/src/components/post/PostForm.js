import React from "react";
import Form from "../helpers/Form";
import useHttpClient from "../../hooks/useHttpClient";

const PostForm = () => {
  const httpClient = useHttpClient();

  const createPostHandler = async (data) => {
    await httpClient.sendRequest(
      "http://localhost:3002/post/create",
      "POST",
      JSON.stringify(data),
      {
        "Content-Type": "application/json",
      }
    );
  };

  const createPostForm = [
    {
      name: "title",
      nameValidate: "Title",
      type: "text",
      label: "Title",
      id: "title",
      placeholder: "Enter title",
      rules: {
        isRequired: "true",
      },
    },
    {
      name: "description",
      nameValidate: "Description",
      type: "textarea",
      label: "Description",
      id: "description",
      placeholder: "Enter description",
      rules: {
        isRequired: "true",
      },
    },
    {
      type: "button",
      name: "submit",
      variant: "primary",
      text: "Create new post",
    },
  ];
  return (
    <div>
      <Form submitHandler={createPostHandler} form={createPostForm} />
    </div>
  );
};

export default PostForm;
