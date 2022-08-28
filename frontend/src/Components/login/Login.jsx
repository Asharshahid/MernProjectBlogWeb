import axios from 'axios';
// import { useState } from 'react'
// import {Link} from "react-router-dom"
import { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import './login.css'

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} = useContext(Context);

  const handleOnSubmit = async(e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    
    try{
      const res = await axios.post("/login",{
        email:emailRef.current.value,
        password:passwordRef.current.value
      })
      dispatch({type:"LOGIN_SUCCESS", payload:res.data});
      res.data && window.location.replace("/")
    }catch(err){
      dispatch({type:"LOGIN_FAILED"})
    }

  };



  return (
    <div className='login'>
        <span className="loginTitle">LOGIN</span>
        <form className="loginForm" onSubmit={handleOnSubmit}>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Write your email' 
            className="loginInput" 
            ref={emailRef}/>
            <label htmlFor="">Password</label>
            <input type="text" placeholder='Write your password' 
            className="loginInput" 
            ref={passwordRef} />
            <button className="loginSubmit" type='submit' disabled={isFetching}>Login</button>
        </form>
        {/* <button className="registerButton"><Link to="/register">Register</Link></button> */}
    </div>
  )
}
