import './login.css';
import React, { useState } from 'react';
import axios from 'axios'; // use to create web services and API
import { _userapiurl } from '../../Api.url';
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    const usersDetails = {
      email: email,
      password: password,
    };

    axios
      .post(_userapiurl + "login", usersDetails)
      .then((response) => {
        const { userDetails, token } = response.data;
        
        if (userDetails && token) {
          localStorage.setItem("token", token);
          localStorage.setItem("_id", userDetails._id);
          localStorage.setItem("name", userDetails.name);
          localStorage.setItem("email", userDetails.email);
          localStorage.setItem("mobile", userDetails.mobile);
          localStorage.setItem("city", userDetails.city);
          localStorage.setItem("gender", userDetails.gender);
          localStorage.setItem("info", userDetails.info);
          localStorage.setItem("role", userDetails.role);
          userDetails.role=="admin"?navigate("/admin"):navigate("/user");

          setOutput("Login Successful.");
        } else {
          setOutput("Login failed. Please try again.");
        }
      })
      .catch((error) => {
        setOutput("Login failed. Please try again.");
        setEmail("");
        setPassword("");
      });
  };

  return (
    <>
      <br />
      {/* Home section */}
      <section className="about_section layout_margin-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="assets/images/Navi.jpg" alt=""/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Login <span>Page</span></h2>
                </div>
                <font color="blue">{output}</font>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <br />
                  <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                  </button>
                </form>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
