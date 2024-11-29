import React from "react";
import "./Login.css";
import google from "./googleicon.png";
import medicine from "./medicine.avif";
import password from "./password.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left Section */}
        <div className="login-form-section">
          <h2>Log Into Your Account</h2>
          <p className="login-subtext">
            Step by logging into your account started in a minute.
          </p>

          <button className="google-button">
            <img src={google} alt="Google" className="google-icon" />
            Continue with Google
          </button>

          <div className="divider">
            <span>Or</span>
          </div>

          <form className="login-form">
            <div className="form-group">
              <label>Email Address</label>
              <div class="address-input-wrapper">
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
              </div>
            </div>

            <div class="form-group password-group">
            <label for="password">Password</label>
            <div class="password-input-wrapper">
           <input
                type="password"
                id="password"
                placeholder="Enter your password"
             />
            
            </div>
           </div>


            <div className="forgot-password">
              <a href="#">Forgot Password</a>
            </div>

            <button type="submit" className="login-button">
              Log In
            </button>
          </form>

          <p className="login-footer">
            Don’t have an account?{" "}
            <a href="#" className="highlight-link">
              Create An Account
            </a>
          </p>

          <p className="pharmacy-login">
            <a href="#" className="highlight-link">
              Log In As A Pharmacy
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="login-image-section">
          <img
            src={medicine}
            alt="Ventolin Evohaler"
            className="login-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
