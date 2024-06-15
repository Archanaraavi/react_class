import { Link } from "react-router-dom"

const NavBar=()=>{
    const lightMode=true;

    const linkstyle = { 
      textDecoration:"none",
      padding:20,
      color:"black"
     
    }
    return(
<nav className={`navbar navbar-expand-sm bg-${lightMode ? "light" : "dark"} 
navbar-${lightMode ? "light" : "dark"}`}>
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link style={linkstyle} to={"./"}>Home</Link>
      </li>
      <li className="nav-item">
      <Link style={linkstyle} to={"./About"}>About</Link>
      </li>
      <li className="nav-item">
      <Link style={linkstyle} to={"./contact"}>contact</Link>
      </li>
      <li className="nav-item">
      <Link style={linkstyle} to={"./settings"}>settings</Link>
      </li>
    </ul>
  </div>
</nav>
    )
   }
   export default NavBar