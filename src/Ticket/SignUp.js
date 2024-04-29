import  Link  from '@mui/material/Link';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';
export default function SignUp() {
    const[firstname,setFirstName]=useState('');
    const[lastname,setLastName]=useState('');
    const[phno,setPhno]=useState('');
    const[emailid,setEmailid]=useState('');
    const[password,setPassword]=useState('');
    const[confirmpassword,setConfirmPassword]=useState('');
    const[error,seterror]=useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>
    {
        event.preventDefault();
        const data={firstname,lastname,phno,emailid,password,confirmpassword};
        axios.post('http://localhost:8080/api/SignupEntitys/postsignup', data)
        if(firstname.length===0 || lastname.length===0 || phno.length<10 || phno.length>10 || emailid.length===0 ||  password.length!==0 || password!==confirmpassword)
        {
          seterror(true);
        }
        if(firstname && lastname && phno && emailid  && password && confirmpassword)
        {

          const loginobj={
            fname:firstname,
            lname:lastname,
            phno:phno,
            emailid:emailid,
            pwd:password,
            confirmpassword:confirmpassword
          }
          

          console.log(loginobj);
          alert(JSON.stringify(loginobj));
          navigate("/Ticketbooking");
        }
      }
  return (
    <div className='body5'>
    <div className='login-form1'>
    <h4><form onSubmit={formHandler}>
    <h3>CREATE ACCOUNT</h3><br/>
    FIRST NAME : <input type="text" value={firstname} placeholder="FIRST NAME" onChange={e=>setFirstName(e.target.value)}/><br/>
    <div>
    {error && firstname.length===0?
      <label style={{color:'red'}}>Firstname is required</label>:""} 
    </div><br/>
    LAST NAME :<input type="text" value={lastname} placeholder="LAST NAME" onChange={e=>setLastName(e.target.value)}/><br/>
    <div>
    {error && lastname.length===0?
      <label style={{color:'red'}}>Lastname is required</label>:""} 
    </div><br/>
    MOBILE NUMBER:<input type="number" value={phno} placeholder="MOBILE NUMBER" onChange={e=>setPhno(e.target.value)}/><br/>
    <div>
    {error && phno.length<10?
      <label style={{color:'red'}}>Invalid Mobile Number</label>:""} 
    </div>
    <div>
    {error && phno.length>10?
      <label style={{color:'red'}}>Invalid Mobile Number</label>:""} 
    </div><br/>
    E-MAIL ID:<input type="text" value={emailid} placeholder="E-MAIL ID" onChange={e=>setEmailid(e.target.value)}/><br/>
    <div>
    {error && emailid.length===0?
      <label style={{color:'red'}}>E-mail ID is required</label>:""} 
    </div><br/>
    PASSWORD:<input type="password" value={password} placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/><br/>
    <div>
    {error && password.length===0?
      <label style={{color:'red'}}>Password is required</label>:""}
    </div><br/>
    CONFIRM PASSWORD:<input type="password" value={confirmpassword} placeholder="CONFIRM PASSWORD" onChange={e=>setConfirmPassword(e.target.value)}/><br/>
    <div>
    {error && password!==confirmpassword?
      <label style={{color:'red'}}>Password Confirmation Failed</label>:""}
      <br/>
      <div className="button-container">
      <Link href="/Ticketbooking"><button class="Submit">SUBMIT</button></Link>
      </div>
    </div>
    </form></h4>
    </div>
    </div>
  )
}
