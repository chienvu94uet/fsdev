import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttpClient from "../../hooks/useHttpClient";
import "./PostDetail.scss";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const { slug } = useParams();
  const httpClient = useHttpClient();
  useEffect(() => {
    const getPostDetail = async () => {
      const result = await httpClient.sendRequest(
        `http://localhost:3002/api/v1/post/${slug}`
      );
      setPost(result.data);
    };
    getPostDetail();
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
