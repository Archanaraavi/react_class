const NavBar=()=>{
    const lightMode=true
    return(
<nav className={`navbar navbar-expand-sm bg-${lightMode ? "light" : "dark"} 
navbar-${lightMode ? "light" : "dark"}`}>
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">
          Disabled
        </a>
      </li>
    </ul>
  </div>
</nav>
    )
   }
   export default NavBar