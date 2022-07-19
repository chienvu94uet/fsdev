import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  }, [httpClient]);

  if (!listPosts || listPosts.length === 0) return null;

  return (
    <div>
      {listPosts.map((post) => (
        <div key={post.id}>
          <Link to={"/post/" + post.slug}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
