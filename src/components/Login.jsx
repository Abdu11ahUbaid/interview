import React, { useState } from 'react'
import { useContext } from 'react'
import Usercontext  from '../context/Usercontext'

export default function Login() {
    const [username,setusername]=useState();
    const [password,setpassword]=useState();
const {setuser}=useContext(Usercontext);
    const handlesubmit=(event)=>{
event.preventDefault();
 setuser({username,password});
    }

    
  return (
    <>
    <div>Login</div>
    <input type="text" placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)}/>
    <input type="text" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
    <button onClick={handlesubmit}>submit</button>
</>
  )
}
