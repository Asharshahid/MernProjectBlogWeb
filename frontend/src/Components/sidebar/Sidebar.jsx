import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span>About Me</span>
            <img src="data:image/jpeg;base64,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" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 A, ex quae id nulla quam.
            </p>
        </div>
        <div className="sidebarItem">
            <span>Categories</span>
            <div className="ulClass">
            <ul>
                <li>Sport</li>
                <li>Game</li>
                <li>Cemena</li>
            </ul>
            <ul>
            <li>Style</li>
                <li>Tech</li>
                <li>Music</li>
            </ul>
            </div>
        </div>
        <div className="sidebarItem">
            <span>Follow Me</span>
            <div className="icondiv">
               <i className="fa-brands fa-square-facebook"></i>
               <i className="fa-brands fa-square-instagram"></i>
               <i className="fa-brands fa-square-twitter"></i>
               <i className="fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
