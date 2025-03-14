import Form from 'react-bootstrap/Form';
import './FunStyle.css';
import {useState} from "react";
import { auth } from './firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import validator from 'validator'

function AccCreate() {
    const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const validateEmail = (e) => {
    var email = e.target.value
     setEmail(email);
  }
  
 const createAcc=()=>
 {
    if (validator.isEmail(email)) {
        toast.success('Account succussfully created');
    } else {
      setEmailError('Enter valid Email!');
      toast.error('Enter valid Email!')
    }
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential)=>
  {
    const user=userCredential.user;
    console.log(user);
  })
  .catch((err)=>
  {
    
    console(err);
  });
  
 } 
  return (
    <>
     <Form >
      <Form.Group className="mt-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"  onChange={(e)=>validateEmail(e)}  />
        
      </Form.Group>
      <Form.Group className="mt-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      </Form>
    <div className="mt-4">
    <input className="checkbox"  type="checkbox"  value="" />I have read and agree to TaskMate's Term at service and privacy policy
  </div>
  <div className="mt-3">
    <input   type="checkbox"  value="" /> We reserve the night to terminate or suspend ypor account at any time for violating our policies
  </div>
  <div className="mt-3">
    <input  type="checkbox"  value="" />I agree to receive helpful emails to find rewarding worksand jobs leads
  </div>
    <div className="mt-5">
    <button onClick={createAcc} type="createAcc" style={{backgroundColor:"#16056B",width:"100%",color:"white"}}  className="btn">Create My Account</button>
    </div>
    <ToastContainer
     position='top-right'
     theme='light'
     autoClose={5000}
     pauseOnHover={false}
    hideProgressBar={false}
   closeOnClick={true}
    />              
</>
   )
}

export default AccCreate;