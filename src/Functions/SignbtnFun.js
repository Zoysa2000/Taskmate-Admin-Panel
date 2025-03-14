import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import {AiFillFacebook} from 'react-icons/ai';
import { auth,provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router';

function SignbtnFun()
{
  const navigate=useNavigate();
 const handleGoogleSignIn=()=>{
    signInWithPopup(auth,provider).then((result)=>{
    const name=result.user.displayName;
    const email=result.user.email;
    const profilePic=result.user.photoURL;
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("profilePic",profilePic);
    })
    .then(auth=>(navigate("../AdminpanelEmail")))
    .catch((err)=>
      {
    console.log(err);
      })
      }
   return(
<>
<div className="mt-5 ">
            <button onClick={handleGoogleSignIn}  style={{width:"100%",color:"#16056B",backgroundColor:"#5696FA",color:"#16056B"}}  type="sign" className="btn">
          <div ><FcGoogle/>&nbsp; 
         Continue with Google
           </div>
        </button>
        </div>
         <div className="mt-3 ">
            <button  style={{width:"100%",color:"#16056B",backgroundColor:"#5696FA",color:"#16056B"}}  type="sign" className="btn">
               <div style={{marginLeft:"12px"}}><AiFillFacebook/>&nbsp; 
              Continue with Facebook
             </div>
           </button>
              </div>
    </>
    )
    
}
export default (SignbtnFun);