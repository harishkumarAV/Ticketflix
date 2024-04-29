import { Link } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Forget.css';

export default function For() {
    const[email,setEmail]=useState('');
    const[mob,setMobile]=useState('');
    const[otp,setOtp]=useState('');
    const[error,seterror]=useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>
    {
        event.preventDefault();
        //validation:
        if(email.length===0 && mob.length===0)
        {
          seterror(true);
        }
        if( otp.length===0)
        {
          seterror(true);
        }
        if(email && mob )
        {

          const loginobj={
            mail:email,
            mobno:mob,
            verify:otp
          }
          console.log(loginobj);
          alert(JSON.stringify(loginobj));
          navigate("/Login");
        }
      }
  return (
    <div className='body3'>
    <form  onSubmit={formHandler}>
    <br/><br/><br/>
    <h1>ACCOUNT RECOVERY</h1><br/><br/>
    <input type="text" value={email} placeholder="ENTER E-MAIL" onChange={e=>setEmail(e.target.value)}/>
    <center><p>or</p></center>
    <input type="text" value={mob} placeholder="ENTER MOBILE NUMBER" onChange={e=>setMobile(e.target.value)}/>
    <div>
    {error && mob.length===0 && email.length===0?
      <label style={{color:'white'}}>E-Mail ID or Mobile Number is required</label>:""}
    </div>
    <br/><br/>
    <input type="text" value={otp} placeholder="ENTER OTP" onChange={e=>setOtp(e.target.value)}/><br/>
    <div>
    {error && otp.length===0?
      <label style={{color:'white'}}>OTP is required</label>:""}
    </div>
    <div className='resend'>
    
    </div>
    <br/>
    <div>
    <br/><br/>
    <Link href="/Login"><button class="forget">SUBMIT</button></Link>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    </form>
    </div>
  )
}