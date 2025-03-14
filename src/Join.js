import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Form from './Functions/Form';
import SignbtnFun from './Functions/SignbtnFun';
function Join()
{
return(
<>
<div className="container mt-5 col-12 col-md-4">
      <div className="card" style={{"width":'auto'}}>
        <div className="card-body">
          <h3 className="card-title" style={{color:"#16056B"}}><b>Welcome Back</b></h3>
          <div className="mt-5">
          <Form/>
          </div>
            <div className="text-center mt-4">
            <div className="d-flex">
            <div className="line"></div>
            Or continue with
            <div className="line"></div>
          </div>
          </div> 
          <div className="mt-5">
          <SignbtnFun/>
          </div>
          <div className="footer mt-4 text-center">
            <p>Create a <Link style={{textDecoration:"none"}} to="/CreateAcc"><span style={{color:"#16056B"}}>TaskMate</span></Link> Account</p>
         </div>
        </div>
      </div>
    </div>
</>
    )
}

export default Join;