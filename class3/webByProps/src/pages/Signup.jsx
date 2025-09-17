import React from "react";
import "./Signup.css";
import { useState } from "react";

function Signup() {
const [ formData , setFormData] = useState({
fullname : "",
email : "",
password : "",
confirm_password : "",
})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>

        <form className="signup-form">
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange}/>
          <input type="email"  name="email" value={formData.email}  onChange={handleChange}/>
          <input type="password"  name="password" value={formData.password} onChange={handleChange} / >
          <input type="password" placeholder="Confirm Password" name="confirm_password"  value={formData.confirm_password} onChange={handleChange}/>
          <button type="submit">Sign Up</button>
        </form>

        <p className="signup-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;