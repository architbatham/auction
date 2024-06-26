import './register.css';
import { useState } from 'react';


function Register() {


  const[name , setName ] = useState("test name ");
  const[email , setEmail ] = useState("");
  const[password , setPassword ] = useState("");
  const[mobile , setMobile ] = useState("");
  const[address , setAddress ] = useState("");
  const[city , setCity ] = useState("");
  const[gender , setGender ] = useState("");

  const[output , setOutput ] = useState("");

  const handleSubmit=()=>{
    const userDetails={"name":name,"email":email,"password":password,
      "mobile":mobile,"address":address,"city":city,"gender":gender};
      
      console.log(userDetails);
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setCity("");
      setAddress("");

      
  };
    return (
        
        <>

        <br/>
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
                  <h2>Register <span>Page</span></h2>
                </div>
                
                <font color="blue">{output}</font>

                <form>
                <div class="form-group">
                   <label for="name">Name:</label>
                   <input type="name" class="form-control" value={name} onChange={e => setName(e.target.value) }/>
                   
                 </div>
                 <div class="form-group">
                   <label for="email">Email address:</label>
                   <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value) }/>
                 </div>
                <div class="form-group">
                   <label for="pwd">Password:</label>
                   <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value) }/>
                </div>
                <div class="form-group">
                   <label for="mobile">Mobile:</label>
                   <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value) }/>
                </div>
                <div class="form-group">
                   <label for="pwd">Address:</label>
                   <textarea class="form-control" rows="3" value={address} onChange={e => setAddress(e.target.value) }></textarea>
                </div>
                <div class="form-group">
                   <label for="mobile">City:</label>
                   <select class="form-control" value={city} onChange={e => setCity(e.target.value) }>
                    <option>Select City</option>
                    <optgroup label="MP">
                       <option value="Indore">Indore</option>
                       <option value="Ujjain">Ujjain</option>
                       <option value="Bhopal">Bhopal</option>
                    </optgroup>
                    <optgroup label="MH">
                       <option value="Indore">Mumbai</option>
                       <option value="Ujjain">Pune</option>
                       <option value="Bhopal">Nasik</option>
                    </optgroup>
                   </select>
                </div>
                <div class="form-group">
                   <label for="gender">Gender:</label>
                   &nbsp;&nbsp;
                  Male <input type="radio" class="male" onChange={e => setGender(e.target.value) }/>
                  &nbsp;&nbsp;
                  Female <input type="radio" class="female" onChange={e => setGender(e.target.value) }/>
                </div>
                <br/>
                <button type="button" className='button' onClick={handleSubmit}>Submit</button>
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


// import React, { useState } from 'react';
// import './register.css';

// import '@fortawesome/fontawesome-free/css/all.min.css';

// function Register() {
//   const [formData, setFormData] = useState({
//     name: 'TestName',
//     email: '',
//     password: '',
//     repeatPassword: '',
//     mobile: '',
//     address: '',
//     city: '',
//     gender: '',
//     terms: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//   };

//   return (
//     <div className="register-container">
//       <form onSubmit={handleSubmit} className="register-form">
//         <h1>Sign up</h1>
        
//         <div className="input-container">
//           <label htmlFor="name">
//             <i className="fas fa-user"></i>
//           </label>
//           <input
//             type="text"
//             placeholder="John Doe"
//             name="name"
//             id="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="input-container">
//           <label htmlFor="email">
//             <i className="fas fa-envelope"></i>
//           </label>
//           <input
//             type="email"
//             placeholder="Your Email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="input-container">
//           <label htmlFor="password">
//             <i className="fas fa-lock"></i>
//           </label>
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             id="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="input-container">
//           <label htmlFor="repeatPassword">
//             <i className="fas fa-lock"></i>
//           </label>
//           <input
//             type="password"
//             placeholder="Repeat your password"
//             name="repeatPassword"
//             id="repeatPassword"
//             value={formData.repeatPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="input-container">
//           <label htmlFor="mobile">
//             <i className="fas fa-phone"></i>
//           </label>
//           <input
//             type="tel"
//             placeholder="Mobile"
//             name="mobile"
//             id="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="input-container">
//           <label htmlFor="address">
//             <i className="fas fa-address-card"></i>
//           </label>
//           <input
//             type="text"
//             placeholder="Address"
//             name="address"
//             id="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="input-container">
//           <label htmlFor="city">
//             <i className="fas fa-city"></i>
//           </label>
//           <select
//             name="city"
//             id="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select City</option>
//             <option value="New York">New York</option>
//             <option value="Los Angeles">Los Angeles</option>
//             <option value="Chicago">Chicago</option>
//             <option value="Houston">Houston</option>
//             <option value="Phoenix">Phoenix</option>
//           </select>
//         </div>

//         <div className="input-container">
//           <label>
//             <i className="fas fa-venus-mars"></i> Gender:
//           </label>
//           <div className="radio-group">
//             <label htmlFor="male">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Male"
//                 id="male"
//                 checked={formData.gender === 'Male'}
//                 onChange={handleChange}
//                 required
//               />
//               Male
//             </label>
//             <label htmlFor="female">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Female"
//                 id="female"
//                 checked={formData.gender === 'Female'}
//                 onChange={handleChange}
//                 required
//               />
//               Female
//             </label>
//             <label htmlFor="other">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Other"
//                 id="other"
//                 checked={formData.gender === 'Other'}
//                 onChange={handleChange}
//                 required
//               />
//               Other
//             </label>
//           </div>
//         </div>

//         <div className="checkbox-container">
//           <input
//             type="checkbox"
//             name="terms"
//             id="terms"
//             checked={formData.terms}
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="terms">
//             I agree all statements in <a href="#">Terms of service</a>
//           </label>
//         </div>
        
//         <button type="button" className="registerbtn">Register</button>
        
//         <div className="signin-container">
//           <p>I am already member <a href="#">Sign in</a></p>
//         </div>

//       </form>
      
//       <div className="image-container">
//         <img src="assets/images/Navi.jpg" alt="Desk" />
//       </div>
//     </div>
//   );
// }

// export default Register;
