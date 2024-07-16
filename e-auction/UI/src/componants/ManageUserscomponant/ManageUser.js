import './ManageUser.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../Api.url';
import { useNavigate } from 'react-router-dom';

function Manageusers() {

  const navigate = useNavigate();
  const [ userDetails , setUserDetails ] = useState([]);

  useEffect(()=>{
    axios.get(_userapiurl+"fetch?role=user").then((response)=>{
      setUserDetails(response.data);  
    }).catch((error)=>{
      console.log(error);   
    });
  });      

  const changeStatus=(s,_id)=>{
    if(s=="block")
    {
      let updateDetails={ "condition_obj":{"_id":_id} , "content_obj":{"status":0}};
      axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
        alert("User blocked.....");
        navigate("/manageusers");  
      });    
    }
    else if(s=="verify")
    {
      let updateDetails={ "condition_obj":{"_id":_id} , "content_obj":{"status":1}};
      axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
        alert("User verified.....");
        navigate("/manageusers");  
      });    
    }  
    else
    {
      let deleteDetails={"data":{"_id":_id}};
      axios.delete(_userapiurl+"delete",deleteDetails).then((response)=>{
        alert("User deleted.....");
        navigate("/manageusers");  
      });
    }
  };

    return (
       <>

<br/>
         {/* Home section */}
      <section className="about_section layout_margin-bottom">
        <div className="container">
          <div className="row">
            
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Manage users Detail</h2>

                  <table class="table table-bordered">
<tr>
<th>UserID</th>
<th>Name</th>
<th>Email</th>
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th>
<th>Status</th>
<th>Action</th>  
</tr>  

{
  userDetails.map((row)=>(
    <tr>
      <td>{row._id}</td>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.mobile}</td>
      <td>{row.address}</td>
      <td>{row.city}</td>
      <td>{row.gender}</td>
      <td>{row.info}</td>  
      <td>
        { row.status==1 && <font color="green">Verified</font> }
        { row.status==0 && <font color="orange">Blocked</font> }
      </td>
      <td>
        { row.status==1 && <font onClick={()=> changeStatus('block',row._id)} color="blue">ChangeStatus</font> }
        { row.status==0 && <font onClick={()=> changeStatus('verify',row._id)}color="blue">ChangeStatus</font> }
        <br/>
        <font onClick={()=> changeStatus('delete',row._id)}color="red">Delete</font>
      </td>
    </tr>
  ))
}

</table>
                </div>
                
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

       </>
    );
}
export default Manageusers;