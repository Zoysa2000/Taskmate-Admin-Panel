import React from 'react';
import './style.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { sendPasswordResetEmail} from 'firebase/auth';
import { auth } from './Functions/firebase'; 
import {useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
function ResetPass()
{
    const[email,setEmail]=useState("");
    const reset=()=>
{
  sendPasswordResetEmail(auth, email)
  .then(() => {
      toast.success('Please check your email inbox')
          })
        .catch((error) => {
         toast.error("Usernot found")
         
        });
}
let navigateCreateAccount = useNavigate(); 
  const routeChange = () =>{ 
  let path = '/Join'; 
  navigateCreateAccount (path);
  }
    return(
<>
<div className="container mt-5 col-12 col-md-4">
      <div className="card" style={{"width":'auto'}}>
        <div className="card-body">
          <h3 className="card-title" style={{color:"#16056B"}}><b>Forgot Password</b></h3>
          <div className=" text-center">
            <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?size=626&ext=jpg" height={"300px"} width={"300px"}
            alt="imag1"/>
          </div>
          <p>Enter your Email account to reset password</p>
          <div className="mt-3">
          <Form >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}  />
      </Form.Group>
      </Form>
          </div>
        <Button onClick={reset} className="mt-3" style={{backgroundColor:"#16056B",width:"100%"}}>Continue</Button> <br/>
        <Button onClick={routeChange} className="mt-3" style={{backgroundColor:"#5696FA",width:"100%"}}>Cancel</Button> 
        </div>
      </div>
    </div>
  <ToastContainer
     position='top-right'
     theme='light'
     autoClose={4000}
     pauseOnHover={false}
    hideProgressBar={false}
   closeOnClick={true}
    />        
</>
    )
}

export default  ResetPass;