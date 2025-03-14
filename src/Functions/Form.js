import Form from 'react-bootstrap/Form';
import './FunStyle.css';
import { auth } from './firebase'; 
import {useState} from "react";
import {useNavigate } from 'react-router';
import { signInWithEmailAndPassword ,sendPasswordResetEmail} from 'firebase/auth';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import Swal from "sweetalert2";
import '../custom-swal-styles.css';

function LoginForm() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();
  const signIn = () => {

   signInWithEmailAndPassword(auth,email, password).then((result)=>{
    const email=result.user.email;
  localStorage.setItem("email",email);
})
    
 .then(auth=>(redirectPanel()))
.catch(error =>  toast.error('Email or password not valid'))
}
const reset=()=>
{
  sendPasswordResetEmail(auth, email)
  .then(() => {
      toast.success('Please check your email inbox')
          })
        .catch((error) => {
         toast.error("Üser not found")
         
        });
}
const redirectPanel=()=>
    {
      let timerInterval
      Swal.fire({
        title:"Welcome TaskMate Admin Panel",
        customClass: {
          title: 'custom-title-class', 
        },
        color:"#16056B",
        timer: 5000,
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
          navigate("../AdminpanelEmail", { replace: true });
        }
      })  
    }

return (
    <>
     <Form >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"  onChange={(e)=>setEmail(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
    </Form>
    <div className="mt-4">
    <button onClick={signIn} style={{backgroundColor:"#16056B",width:"100%",color:"white"}} className='btn' > Log in</button>
    </div>
    <div className="mt-3 text-center">
    <Link style={{textDecoration:"none"}} to="/ResetPass"><span style={{color:"black"}}>Forget your password?</span></Link>
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

export default LoginForm;