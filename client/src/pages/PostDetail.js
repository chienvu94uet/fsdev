import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttpClient from "../hooks/useHttpClient";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const httpClient = useHttpClient();
  useEffect(() => {
    const getAllPosts = async () => {
      const result = await httpClient.sendRequest(
        `http://localhost:1911/post/${id}`
      );
      setPost(result.data[0]);
    };
    getAllPosts();
    // eslint-disable-next-line
  }, []);

  if (!post) return null;
  return (
    <div>
      <h2>{post.title}</h2>
    </div>
  );
};

export default PostDetail;
