import React, { useEffect, useState } from "react";
import Form from "../helpers/Form";
import useHttpClient from "../../hooks/useHttpClient";
import { slugify } from "../../helpers/string";
import { useNavigate, useParams } from "react-router-dom";

const PostForm = ({ isUpdate }) => {
  const httpClient = useHttpClient();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (isUpdate) {
      const getPostDetail = async () => {
        const result = await httpClient.sendRequest(
          `http://localhost:3002/api/v1/post/getById/${id}`
        );
        setPost(result.data);
      };
      getPostDetail();
    }
    // eslint-disable-next-line
  }, []);

  const updatePostHandler = async (data) => {
    data.slug = slugify(data.title);
    data.userId = "62d52bc6c55ce67bdd98f5ee";
    await httpClient.sendRequest(
      "http://localhost:3002/api/v1/post/create",
      "POST",
      JSON.stringify(data),
      {
        "Content-Type": "application/json",
      }
    );
    navigate("/dashboard");
  };

  const updatePostForm = [
    {
      name: "title",
      nameValidate: "Title",
      type: "text",
      label: "Title",
      id: "title",
      placeholder: "Enter title",
      value: isUpdate ? post?.title || "" : "",
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
      <Form submitHandler={updatePostHandler} form={updatePostForm} />
    </div>
  );
};

export default PostForm;
