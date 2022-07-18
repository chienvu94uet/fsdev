import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAppContext } from "./hooks/useAppContext";
import { AuthenLayout, DefaultLayout } from "./layouts";
import {
  HomePage,
  CreatePostPage,
  PostDetailPage,
  LoginPage,
  RegisterPage,
} from "./pages";

const App = () => {
  const [state] = useAppContext();
  const isLoggedIn = state.auth.isLoggedIn;
  let route;
  if (isLoggedIn) {
    route = (
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="post">
          <Route path="create" element={<CreatePostPage />} />
          <Route path=":id" element={<PostDetailPage />} />
        </Route>
      </Route>
    );
  } else {
    route = (
      <>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/auth" element={<AuthenLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </>
    );
  }
  return <Routes>{route}</Routes>;
};

export default App;
