import React from "react";
import { Switch, Route } from "react-router-dom";
import WithPageTitle from "./services/WithPageTitle";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import IndexPage from "./pages/Index/Index";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const IndexComponent = WithPageTitle({
  component: IndexPage,
  title: "Just",
});

const LoginComponent = WithPageTitle({
  component: LoginPage,
  title: "Login",
});

const RegisterComponent = WithPageTitle({
  component: RegisterPage,
  title: "Register",
});

const ProfileComponent = WithPageTitle({
  component: ProfilePage,
  title: "Profile",
});

const RouteConfig = () => {
  return (
    <Switch>
      <Route exact path="/" component={IndexComponent}></Route>
      <Route exact path="/login" component={LoginComponent}></Route>
      <Route exact path="/register" component={RegisterComponent}></Route>
      <Route exact path="/profile" component={ProfileComponent}></Route>
    </Switch>
  );
};

export default RouteConfig;
