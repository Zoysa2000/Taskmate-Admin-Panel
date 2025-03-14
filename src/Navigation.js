import { Link } from "react-router-dom";
import './style.css';
 function Navigation()
 {
    return(
        <>
      <nav className="navbar navbar-expand-md "style={{backgroundColor:"#16056B"}} >
      <div className="container">
        <img className="navbar-brand d-lg-block d-none" src="./logo1.jfif" style={{height:"70px",width:"150px"}} />
         <button id="nav-toggle-button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#micon">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="micon">
          <ul className="navbar-nav  ms-auto mt-3">
          <li className="nav-item mx-1">
            <b><Link style={{color:"white"}} to="/">Home</Link></b> 
            </li>
            <li className="nav-item mx-2">
           <b><Link style={{color:"white"}} to="/Join">Introduction</Link></b>    
            </li>
            <li className="nav-item mx-2">
            <b><Link style={{color:"white"}} to="/Sign">Sign Up</Link></b> 
            </li>
            <li className="nav-item mx-2">
           <b><Link style={{color:"white"}} to="/Join">Log In</Link></b>    
            </li>
            <li className="nav-item mx-2 d-none d-md-block">
            <b><Link style={{color:"white"}} to="/Join">DashBoard</Link></b>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
        </>
    )
 }
 export default Navigation;