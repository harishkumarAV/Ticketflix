import React, { useState } from 'react'

function LoginPage() {

    const[UserName,setUserName]=useState('');
    const[Password,setPassword]=useState('');
    const[error,setError]=useState(false);
    const formHandler=(event)=>
    {
        event.preventDefault();
        if(UserName!=="admin" && Password.length!=="admin")
        {
            setError(true);
        }
        if(UserName && Password)
        {
        const loginObj={
            name:UserName,pwd:Password
        }

        console.log(loginObj);
        alert(JSON.stringify(loginObj));
    }
    }
    return(
        <div>
        <h3>Login page</h3>
        <form onSubmit={formHandler} >
        UserName:<input type="text" value={UserName} placeholder="Username" onChange={e=>setUserName(e.target.value)}/><br></br>
        <div>
        {error&& UserName!=="admin"?
        <label style={{color:'red'}}>Incorrect Username</label>:""}
        </div>
        Password:<input type="password" value={Password} placeholder="password" onChange={e=>setPassword(e.target.value)}/><br></br>
        <div>
        {error&& Password!=="admin"?
        <label style={{color:'red'}}>Incorrect Password</label>:""}
        </div>
        <button type="submit">Login</button>
        </form>
        </div>
    )
}
export default LoginPage