// import {Link} from "react-router-dom"
import './register.css'
import { useState } from 'react';
import axios from 'axios';

export default function Register() {

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(false);

  const handleSubmitRegister = async(e)=>{
    e.preventDefault()
    try{
      const res = await axios.post("/register",{
        username,
        email,
        password
      })
      res.data && window.location.replace("/login")
    }
    catch(err){
      setError(true)
      console.log(err)
    }

  }
  return (
    <div className='register'>
        <span className="registerTitle">REGISTER</span>
        <form className="registerForm" onSubmit={handleSubmitRegister}>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Username' onChange={e=>setUsername(e.target.value)} className="registerInput" />
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Email' onChange={e=>setEmail(e.target.value)} className="registerInput" />
            <label htmlFor="">Password</label>
            <input type="text" placeholder='Password' onChange={e=>setPassword(e.target.value)} className="registerInput" />
            <button className="registerSubmit" type="submit">Register</button>
            { error && <span>Something is wrong</span>}
        </form>
        {/* <button type='submit' className="loginButton"><Link to="/login">Login</Link></button> */}
    </div>
  )
}
