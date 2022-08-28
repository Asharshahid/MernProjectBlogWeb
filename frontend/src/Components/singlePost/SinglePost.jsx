import './singlePost.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function SinglePost() {
  
   const {user} = useContext(Context)
   const location = useLocation()
   const path = location.pathname.split("/")[2]

   const [singlePost, setSinglePost] = useState([]);

  useEffect(()=>{
    const getSinglePost = async()=>{
      const res = await axios.get("/getpost/" + path)
      setSinglePost(res.data)
    }
    getSinglePost()
  },[path])

  const handleDeletePost = async(e)=>{
    e.preventDefault();
    const res = await axios.delete("/deletepost/" + path)
    res.data && window.location.replace("/")
  }


  return (
    <div className='singlePost'>
        <div className="siglePostImage">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivTWLrm5bXsGhNOHarhq26Ts_jy3V6sYaPw&usqp=CAU" alt="" />
        </div>
        
        <div className="singlePostTitleArea">
            <h4>{singlePost.title}</h4>
            <div className="singlePostIcon">
               {/* <i className="fa-solid fa-pen-to-square"></i> */}
               <i 
              //  style={{display:"none"}:{display:"inline"}}
              style={{display:singlePost.username===user.username?"flex":"none"}}
               onClick={handleDeletePost} 
               className="fa-solid fa-trash-can"></i>
            </div>
        </div>
        <div className="singlePostAuthorTime">
           <div className="author">Author : 
           <Link to={`/?user=${singlePost.username}`} className="authorNameLink">{singlePost.username}
           </Link> 
           </div>
           <div className="singlePostTime">{new Date(singlePost.createdAt).toDateString()}</div>
        </div> 
        <div className="singlePostDescrption">
         {singlePost.desc}
         </div>
    </div>
  )
}
