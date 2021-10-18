import React from "react";
import "./login.css";
import Loginform from "../../components/form/login";

const LoginPage = () => {
  return (
    <>
      <section className="maincontainer">
        <div className="half left">
          <img src="/images/loginSign.jpg" alt="login-bg" className="image" />
        </div>
        <div className="half right">
          <Loginform />
        </div>
      </section>
    </>
  );
};

export default LoginPage;
