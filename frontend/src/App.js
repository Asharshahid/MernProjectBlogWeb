// import React from "react";
import Settings from "./Components/settings/Settings";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import Topbar from "./Components/topbar/Topbar";
import Write from "./Components/write/Write";
import Home from "./pages/home/Home";
// import FullPost from "./pages/fullPost/FullPost";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import SinglePost from "./Components/singlePost/SinglePost";
// import { useEffect, useState } from "react";
// import axios from "axios";

// console.log(localStorage.getItem())

function App() {

  const {user} = useContext(Context);
  
 return (
  
    <Router>
      <Topbar user={user} />

      <Routes>
        <Route exact path="/" element=   {<Home/>}  />
        <Route path="/login" element=    {user ? <Home/> : <Login/>}     />
        <Route path="/register" element= {user ? <Home/> : <Register/>}  />
        <Route path="/write" element=    {user ? <Write/> : <Register/>} />
        <Route path="/settings" element= {user ? <Settings/> : <Register/>} />
        <Route path="/about" element=    {<About/>} />
        <Route path="/contact" element=  {<Contact/>} />
        <Route path="/post/:_id" element=  {<SinglePost/>} />
      </Routes>
    </Router>
  
  );
}

export default App;
