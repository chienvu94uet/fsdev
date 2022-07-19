import React, { useState, useEffect } from "react";
import PostCard from "../../components/helpers/PostCard/PostCard";
import useHttpClient from "../../hooks/useHttpClient";
import "./Dashboard.scss";

const Dashboard = () => {
  const [listPosts, setListPosts] = useState([]);
  const httpClient = useHttpClient();
  const userId = "62d52bc6c55ce67bdd98f5ee";

  useEffect(() => {
    const getAllPosts = async () => {
      const result = await httpClient.sendRequest(
        `http://localhost:3002/api/v1/post/user/${userId}`
      );
      setListPosts(result.data);
    };
    getAllPosts();
    // eslint-disable-next-line
  }, []);

  if (!listPosts || listPosts.length === 0) return null;

  return (
    <div className="container">
      {listPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Dashboard;
