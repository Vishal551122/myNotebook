import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'



const Login = (props) => {
const  [credentials,setCredentials]=useState({email:"",password:""})
let history= useHistory();

const handleSubmit=async(e)=>{
    e.preventDefault();
   
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',// y sab net s copy kiya h 
        headers: { 
          'Content-Type': 'application/json'
         
        },
        body:JSON.stringify({email:credentials.email,password:credentials.password})
      });
      const json=await response.json()
      console.log(json);
     if(json.success){
        // Save the auth token and redirect
        localStorage.setItem('token',json.authtoken);
        history.push("/");
        props.showAlert("Logged in Successfully","success")
     }
     else{
      props.showAlert("Invalid Details","danger");
     }
}
   const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]: e.target.value})
   }
  return ( 
    <div>
        <form onSubmit={handleSubmit}>
       <div className="mb-3 ">
    <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control"value={credentials.email} onChange={onChange} name="email"  id="email" />
      
    </div>
  
  <div className="mb-3 ">
    <label htmlFor="password" className="form-label">Password</label>
    
      <input type="password"value={credentials.password} onChange={onChange} className="form-control"name="password" id="password"/>
    
  </div>
  <button type="submit"className="btn btn-primary">Submit</button>
  </form>
    </div>
  )
}

export default Login
