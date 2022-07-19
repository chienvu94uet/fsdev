import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTH } from "../../../context/AppAction";
import { useAppContext } from "../../../hooks/useAppContext";
import "./NavBar.scss";

const NavBar = ({ isAuthPage = false }) => {
  const [state, dispatch] = useAppContext();
  const isLoggedIn = state.auth.isLoggedIn;
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch({
      type: AUTH.UPDATE_AUTH,
      payload: {
        isLoggedIn: false,
        userName: "",
      },
    });
    navigate("/");
  };

  return (
    <nav>
      <div className="container flex-between">
        <Link to="/">
          <h1>FSBlog</h1>
        </Link>
        {!isAuthPage && !isLoggedIn && (
          <ul>
            <li>
              <Link to="/auth/login" className="mr-8">
                Login
              </Link>
              <Link to="/auth/register">Register</Link>
            </li>
          </ul>
        )}
        {!isAuthPage && isLoggedIn && (
          <div className="flex">
            <div className="mr-16">
              <Link to="/post/create">Create Post</Link>
            </div>
            <div>
              <div>
                <a href="true">{state?.auth?.userName}</a>
              </div>
              <a onClick={logoutHandler} href="true">
                Logout
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
