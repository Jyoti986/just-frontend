import React from "react";
import "./form.css";

const Register = () => {
  const handleLogin = () => {};
  return (
    <>
      <form className="form">
        <header className="register-form-header">
          <h5 className="dull">Welcome</h5>
          <h2>Register Now</h2>
        </header>
        <main className="register-form-main">
          <div className="name">
            <label htmlFor="Full Name">Full Name</label>
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div className="mobileNo">
            <label htmlFor="Mobile No">Mobile No.</label>
            <input type="number" placeholder="Enter Your Mobile No." />
          </div>
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
          <div className="confirmPassword">
            <label htmlFor="Confirm Password">Confirm Password</label>
            <input
              type="password"
              className="pass-ip"
              placeholder="Enter Confirm Password"
            />
          </div>
          <button className="login-btn" onClick={handleLogin}>
            Register
          </button>
        </main>
        <footer className="register-form-footer">
          <div>
            <span className="dull">Already Have an account?</span>
            <a href="/login" className="register-link">
              Log In
            </a>
          </div>
        </footer>
      </form>
    </>
  );
};

export default Register;
