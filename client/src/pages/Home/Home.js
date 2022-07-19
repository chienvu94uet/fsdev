import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import PostCard from "../../components/helpers/PostCard/PostCard";
import useHttpClient from "../../hooks/useHttpClient";
import "./Home.scss";

const Home = () => {
  const [listPosts, setListPosts] = useState([]);
  const httpClient = useHttpClient();
  useEffect(() => {
    const getAllPosts = async () => {
      const result = await httpClient.sendRequest(
        "http://localhost:3002/api/v1/post/all"
      );
      setListPosts(result.data);
    };
    getAllPosts();
  }, [httpClient]);

  if (!listPosts || listPosts.length === 0) return null;

  return (
    <>
      <Helmet>
        <title>HomePage | FS Blog</title>
      </Helmet>
      <div className="container">
        {listPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Home;
