import './home.css'
import Header from '../../Components/header/Header'
import Posts from '../../Components/posts/Posts'
// import Sidebar from '../../Components/sidebar/Sidebar'
import {useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import Footer from '../footer/Footer';

export default function Home() {

  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get("/getallpost"+ search);
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <div>
        <Header/>
        <div className="home">
          <Posts  posts={posts}/>
          {/* <Sidebar/> */}
        </div>
        <Footer/>
        
    </div>
  )
}
