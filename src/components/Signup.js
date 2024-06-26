import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const Signup = (props) => {
const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""})
let history=useHistory();
  const handleSubmit=async(e)=>{
    e.preventDefault();
   const {name,email,password}=credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        
        method: 'POST',// y sab net s copy kiya h 
        headers: { 
          'Content-Type': 'application/json'
         
        },
        body:JSON.stringify({name,email,password})
      });
      const json=await response.json()
      console.log(json);
      if(json.success){
        // Save the auth token and redirect
        localStorage.setItem('token',json.authtoken);
        history.push("/");
        props.showAlert("Account Created Successfully","success")
      }
      else{
       props.showAlert("Invalid credentials","danger");
      }
}
   const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]: e.target.value})
   }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
     < div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" id="name" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email Address</label>
    <input type="email" className="form-control"name="email" id="email" onChange={onChange}aria-describedby="emailHelp"/>
    <div id="emailHelp"className="form-text">We'll never share your email  with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control"name="password" id="Password"onChange={onChange} minLength={4} required/>
  </div>

  <div className="mb-3">
    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control"name="cpassword" id="cPassword"onChange={onChange}minLength={4} required/>
  </div>
    <button type="submit" className="btn btn-primary ">Submit</button>
  
</form>
    </div>
  )
}

export default Signup
