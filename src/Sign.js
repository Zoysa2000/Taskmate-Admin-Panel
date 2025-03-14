import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import SignbtnFun from './Functions/SignbtnFun';
import { useNavigate } from "react-router-dom";
function Sign()
{
  let navigateCreateAccount = useNavigate(); 
  const routeChange = () =>{ 
  let path = '/CreateAcc'; 
  navigateCreateAccount (path);
  }
    return(
<div className="body">
    <div className="container mt-5 col-12 col-md-4">
      <div className="card">
        <div className="text-center">
        <img className="card-img-top " style={{width:"300px",height:"150px"}} src="./logo2.jfif" />
        </div>
        <div className="card-body">
            <div className="text-center">
              <h4 style={{marginTop:"-20px",color:"#16056B",fontFamily:"poppin"}}><b>Sign up to Admin panel</b></h4>
            </div>
            <div className="mt-5 text-center">
             <button onClick={routeChange}  style={{backgroundColor:"#16056B",width:"100%",color:"white"}} type="google" className="btn">Continue with Email or Mobile</button>
            </div>
         <div className="text-center mt-5">
          <div className="d-flex">
            <div className="line"></div>
            Or continue with
            <div className="line"></div>
          </div>
          </div>            
          <SignbtnFun/>
          <div className="footer mt-5 text-center">
            <p>Already registered?<Link style={{textDecoration:"none"}} to="/Join"><span style={{color:"#16056B"}}>Log in</span></Link></p>
         </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>
  
</div>
    )
}
export default Sign;