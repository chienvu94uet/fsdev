import React, { useState, useEffect } from "react";
import useHttpClient from "../hooks/useHttpClient";

const Home = () => {
  const [listPosts, setListPosts] = useState([]);
  const httpClient = useHttpClient();
  useEffect(() => {
    const getAllPosts = async () => {
      const result = await httpClient.sendRequest("http://localhost:3002/post");
      setListPosts(result.data);
    };
    //getAllPosts();
  }, [httpClient]);

  if (!listPosts || listPosts.length === 0) return null;

  return (
    <div>
      {listPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
