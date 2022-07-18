import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <div className="container flex-between">
        <h1>FSBlog</h1>
        <ul>
          <li>
            <Link to="/auth/login" className="mr-8">
              Login
            </Link>
            <Link to="/auth/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
