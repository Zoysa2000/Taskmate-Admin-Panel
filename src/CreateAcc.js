import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import AccForm from './Functions/AccForm';
function CreateAcc()
{
    return(
<div>
<div className="container mt-5 col-12 col-md-4">
      <div className="card" style={{"width":"auto"}}>
        <div className="card-body">
          <h3 className="card-title" style={{color:"#16056B"}}><b>Create Admin Account</b></h3>
          <div className="mt-4">
            <AccForm/>
        </div>
        <div className="footer mt-4 text-center">
        <p>Already registerd? <Link style={{textDecoration:"none"}} to="/Join"><span style={{color:"#16056B"}}>Log in</span></Link></p>
         </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default CreateAcc;