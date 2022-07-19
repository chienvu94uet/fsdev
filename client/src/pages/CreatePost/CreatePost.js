import React from "react";
import PostForm from "../../components/post/PostForm";
import "./CreatePost.scss";

const CreatePost = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostForm />
    </div>
  );
};

export default CreatePost;
