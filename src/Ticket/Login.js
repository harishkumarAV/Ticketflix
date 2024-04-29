import  Link from '@mui/material/Link';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Login.css';
import axios from 'axios';


export default function Login() {
    const[emailid,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,seterror]=useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>
    {
        event.preventDefault();
        const data={emailid,password};
        axios.post('http://localhost:8080/api/LoginEntitys/postlogin', data)
      .then(() => {
        console.log(data);
        navigate("/Ticketbooking");
      })
      .catch((error) => {
        console.log(error);
      })

        //validation:
        if(emailid===0 && password===0)
        {
          seterror(true);
        }
        if(emailid && password)
        {

          const loginobj={
            emailid:emailid,
            password:password
          }
          //console.log(loginobj);
          alert(JSON.stringify(loginobj));
          
          
        }
      };
      const handleFirstButtonClick = () => {
        navigate("/signup");
      };
    
  return (
    <div className='body12'>
    <div className="login-form">
    <form className='img' onSubmit={formHandler}>
    <br/><br/><br/><br/><h3>LOGIN</h3>
    <div class Name="input_container">
    <label>EMAIL-ID: </label>
    <input type="email1" value={emailid} placeholder="EMAIL-ID" onChange={e=>setEmail(e.target.value)}/><br/><br/>
    <div>
    {error && emailid.length===0?
      <label style={{color:'red'}}>Email-Id is required</label>:""} 
    </div>
    </div>
    <div class Name="input_container">
    <label>PASSWORD: </label>
    <input type="password1" value={password} placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/><br/>
    <div>
    {error && password.length===0?
      <label style={{color:'red'}}>Password is required</label>:""}
    </div>
    </div>
    <br/>
    <div className="button-container">
    <Link href="/Ticketbooking"><button classname="Submit" >LOGIN</button></Link>
    </div>
    <h4>DON'T HAVE AN ACCOUNT?</h4>
    <Link href="/signup"><button classname="login" onClick={handleFirstButtonClick} >SIGNUP</button></Link>
    </form>
    </div>
    </div>
  )
}

