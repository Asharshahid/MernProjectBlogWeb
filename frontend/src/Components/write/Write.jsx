import axios from 'axios';
import { useState } from 'react'
import './write.css'

export default function Write() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handlePostSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post("/createpost", {
        title,
        desc
      })
      res.data && window.location.replace("/")
      console.log(res.data)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='write'>
      <div className="writeImage">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivTWLrm5bXsGhNOHarhq26Ts_jy3V6sYaPw&usqp=CAU" alt="" />
      </div>
        <form action="" className="writeForm" onSubmit={handlePostSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                   <i class="fa-solid fa-circle-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}} />
                <input type="text" className='writeInput' onChange={e=>setTitle(e.target.value)} placeholder='Title Of Your Post' onFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story' onChange={e=>setDesc(e.target.value)} className='writeInput writeText' type="text"></textarea>
            </div>
            <button className="writeSubmit" type='submit'>Publish</button>
        </form>
    </div>
  )
}
