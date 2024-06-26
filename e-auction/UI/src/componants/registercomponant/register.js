import './register.css';
import { useState } from 'react';
import axios from 'axios';//use to create web servics and API


function Register() {


  const[name , setName ] = useState("");
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

      // alert("working");
      
      axios.post("http://localhost:3001/user/save",userDetails).then((response)=>{
      setOutput("user registered successfully....");
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setCity("");
      setAddress("");
      }) .catch((error)=>{
        console.log(error);
      });
      

      
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



