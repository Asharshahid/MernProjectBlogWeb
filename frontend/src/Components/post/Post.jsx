import './post.css'
import {Link} from "react-router-dom"; 

export default function Post({post}) {
  return (
    <div className='post'>
        <div className="postImage">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivTWLrm5bXsGhNOHarhq26Ts_jy3V6sYaPw&usqp=CAU" alt="" />
      </div>
      <div className="postInfo">
        <div className="postType">
          <span className="type1">Sport</span>
          <span className="type2">Game</span>
        </div>
        <Link className='postTitleLink' to={`/post/${post._id}`}>
           <div className="postTitle">{post.title}</div>
        </Link>
        <div className="postTime">{new Date(post.createdAt).toDateString()}</div>
        <p className="postDescrpt">{post.desc}</p>
        </div>
    </div>
  )
}
