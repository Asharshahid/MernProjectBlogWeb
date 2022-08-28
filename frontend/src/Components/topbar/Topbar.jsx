import axios from 'axios';
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context';
import './topbar.css'


function Topbar(props) {

  const {dispatch} = useContext(Context);

  const handleLogout = async(e)=>{
    e.preventDefault()
    try{
      dispatch({type:"LOGGED_OUT"})
      const res = await axios.get("/logout")
      res.data && window.location.replace("/login")

    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="topbarMain">
        <div className="left">
             <i className="fa-brands fa-square-facebook"></i>
             <i className="fa-brands fa-square-instagram"></i>
             <i className="fa-brands fa-square-twitter"></i>
             <i className="fa-brands fa-square-instagram"></i>

        </div>
        <div className="center">
            <ul>
                <li><Link className='link' to="/">HOME</Link></li>
                <li><Link className='link' to="/contact">CONTACT</Link></li>
                <li><Link className='link' to="/about">ABOUT</Link></li>
                <li><Link className='link' to="/write"> {props.user  && "WRITE"}</Link></li>
                <li><Link className='link' to="/logout" onClick={handleLogout} >{ props.user && "LOGOUT"}</Link></li>
            </ul>
        </div>
        <div className="right">
          { props.user ? 
          (
            <Link className='myProfileImgLink' to={"/settings"}>
              <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
            </Link>
          ) : 
          (
            <>
            <Link className='registerLoginLinkTopbar'  to="/login">LOGIN</Link>
            <Link className='registerLoginLinkTopbar' to="/register">REGISTER</Link>
            </>
          )
        }
          {/* <i className="fa-solid fa-magnifying-glass"></i> */}
        </div>
    </div>
  )
}

export default Topbar;