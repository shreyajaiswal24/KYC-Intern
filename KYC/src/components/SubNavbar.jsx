
import "./SubNavbar.css"


const SubNavbar = () => {
  return (
    <div className='list'>
       <div className="navbar-center">
          <ul className="nav-links">
            <li>Home</li>
            <li>Programs</li>
            <li>College Events</li>
            <li>College Predictor</li>
            <li>Review Your College</li>
          </ul>
        </div>

        <div className="navbar-right">
          <button className="btn mentor-btn">Become a mentor</button>
          <button className="btn login-btn">Login</button>
        </div>
    </div>
  )
}

export default SubNavbar
