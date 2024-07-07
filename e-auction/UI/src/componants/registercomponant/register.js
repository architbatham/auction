import './register.css';
import { useState } from 'react';
import axios from 'axios'; // use to create web services and API

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    const userDetails = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      address: address,
      city: city,
      gender: gender,
    };

    axios
      .post("http://localhost:3001/user/save", userDetails)
      .then((response) => {
        setOutput("User registered successfully.");
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setCity("");
        setAddress("");
        setGender("");
      })
      .catch((error) => {
        console.log(error);
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
                <img src="assets/images/Navi.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    Register <span>Page</span>
                  </h2>
                </div>

                <font color="blue">{output}</font>

                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
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
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <select
                      className="form-control"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option>Select City</option>
                      <optgroup label="MP">
                        <option value="Indore">Indore</option>
                        <option value="Ujjain">Ujjain</option>
                        <option value="Bhopal">Bhopal</option>
                      </optgroup>
                      <optgroup label="MH">
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Nasik">Nasik</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <br />
                    Male
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={(e) => setGender(e.target.value)}
                      checked={gender === "Male"}
                    />
                    &nbsp;&nbsp;
                    Female
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={(e) => setGender(e.target.value)}
                      checked={gender === "Female"}
                    />
                  </div>
                  <br />
                  <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Register;
