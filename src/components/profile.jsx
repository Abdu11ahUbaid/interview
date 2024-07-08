import React from 'react'
import Usercontext from '../context/Usercontext'
import { useContext } from 'react'
export default function Profile() {
  const {user}=useContext(Usercontext)
  if(!user)  return <div>please Login</div>
    return <div>welcome {user.username}</div>
  
}
