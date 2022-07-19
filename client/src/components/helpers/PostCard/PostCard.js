import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.scss";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <Link to={"/post/" + post.slug}>
        <h2 className="title">{post.title}</h2>
      </Link>
      <p className="description">{post.description}</p>
    </div>
  );
};

export default PostCard;
