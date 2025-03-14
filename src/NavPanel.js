import { Link, useNavigate } from "react-router-dom";
import './style.css';
import Swal from "sweetalert2";
import { MdOutlineArrowBackIos } from "react-icons/md";
 function NavPanel()
 {
  const navigate=useNavigate();
  const Logout = () => {
    let timerInterval
    Swal.fire({
      title: 'Log out Admin Panel',
      customClass: {
        title: 'custom-title-class', 
      },
      color:"#16056B",
      timer: 8000,
      timerProgressBar:false,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      
      if (result.dismiss === Swal.DismissReason.timer) {
        localStorage.clear();
   navigate("/", { replace: true }); 
      }
    })  
  }
  const currDate = new Date().toLocaleDateString();
return(
        <>
      <nav className="navbar navbar-expand-md d-block d-md-block "style={{backgroundColor:"#16056B"}} >
      <div className="container">
        <img className="navbar-brand d-sm-block d-none" src="./logo1.jfif" style={{height:"70px",width:"150px"}} alt="logo" />
        <img className="navbar-brand d-block d-sm-none" src="./logo1.jfif" style={{height:"60px",width:"115px"}} alt="logo" />
         <button id="nav-toggle-button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#micon"
         >
        <span className="navbar-toggler-icon" style={{ backgroundColor: 'white' }}/>
        </button>
        <div className="collapse navbar-collapse" id="micon">
          <ul className="navbar-nav  ms-auto">
          <li className="nav-item mx-2">
            <b><Link style={{color:"white"}} to="/AdminpanelEmail"><MdOutlineArrowBackIos/>&nbsp;Back</Link></b> 
            </li>
           <li className="nav-item mx-2 ">
            <b><Link onClick={Logout} style={{color:"white"}} to="">Log out</Link></b>
            </li>
            <li className="nav-item mx-2">
            <b><Link style={{color:"white"}} to="">{currDate}</Link></b>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
    )
 }
 export default NavPanel;