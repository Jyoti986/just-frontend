import React from "react";
import "./form.css";

const login = () => {
  const handleLogin = () => {};
  return (
    <>
      <form className="form">
        <header className="form-header">
          <h5 className="dull">Welcome</h5>
          <h2>Sign in Now</h2>
        </header>
        <main className="form-main">
          <div className="email">
            <label htmlFor="Email address">Email Address</label>
            <input type="text" placeholder="email@example.com" />
          </div>
          <div className="password">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="pass-ip"
              placeholder="Enter Password"
            />
          </div>
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </main>
        <footer className="form-footer">
          <div>
            <span className="dull">Dont Have an account?</span>
            <a href="/" className="register-link">
              Register
            </a>
          </div>
        </footer>
      </form>
    </>
  );
};

export default login;
