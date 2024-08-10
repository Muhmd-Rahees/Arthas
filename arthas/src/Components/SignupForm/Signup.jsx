import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="main_form">
      <h1 className="title">Sign in to your account</h1>
      <form action="" className="data">
        <div className="allContent">
          <label htmlFor="" className="sub-head">
            Email Address
          </label>
          <input
            type="email"
            className="input_data"
            placeholder="Email"
            name="email"
          />
          <label htmlFor="" className="sub-head">
            Password
          </label>
          <input
            type="password"
            className="input_data"
            placeholder="Password"
            name="password"
          />
          <div className="options">
            <div className="remember_me">
              <input type="checkbox" className="remeber" name="remember" />
              <label htmlFor="" className="rememmber_me_label">
                Remember Me
              </label>
            </div>
            <div className="forgot_password">
              <a href="#" className="forgot_password_a">
                Forgot Password?
              </a>
            </div>
          </div>
          <button type="submit" className="submit_button">SIGN IN</button>
          <div className="bottom_content">
            <div className="new_user">New User?</div>
            <div className="account">
                <a href="#">Don't have an account?</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
