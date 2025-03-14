import DatePicker from "react-datepicker";
import  { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import NavPanel from "./NavPanel";
import Headroom from "react-headroom";
import { db } from "./Functions/firebase";
import { collection,addDoc} from "firebase/firestore";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
 function FeedbackForm ()
{
 const [date, setDate] = useState(new Date());
 const [text,setText]=useState("");
 const [client,setClient]=useState("");
 const [users,setUsers]=useState("");
 const [qualified,setQuser]=useState("");
 const [reject,setRuser]=useState("");
 var today=new Date();
const day = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear(); 

const addInformation =()=>
{
 try {
  if(client===" "||date===" "||qualified===" "||reject===" "||text===""||users===" ")
  {
    toast.error("Again Please check the Form")
  }
  else{
    const fbCollRef=collection(db,'ReportInformation')
    addDoc(fbCollRef, {client,day,qualified,reject,text,users})
    toast.success("Your Response had recorded")
  }

  } catch (error) {
    console.error('Error adding document: ', error);
    alert('An error occurred while adding the document.');
  }

}
const Nuser=parseInt(localStorage.getItem("users"))
  const Nrusers=parseInt(localStorage.getItem("Rfreelancers"))
  const totalUser=Nrusers+Nuser
 return(
    <>
    <Headroom>
    <NavPanel/>
    </Headroom>
    <div className="container mt-3 col-12 col-md-8 col-lg-5 mt-4 d-block d-md-block">
      <div className="card" style={{"width":'auto',borderColor:"#16056B"}}>
        <div className="card-body">
          <h3 className="card-title" style={{color:"#16056B"}}><b>TaskMate Weekly Feedback Form</b></h3>
          <div className="mt-3">
        <p>Date</p>
      <DatePicker selected={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="row mt-4">
        <div className="col-6">
        <p>Number of Registerd Clients</p>
        <input type="number" placeholder={localStorage.getItem("client")}   onChange={(e)=>setClient(e.target.value)} />
        </div>
        <div className="col-6">
        <p>Number of Registerd Freelancers</p>
        <input type="number" placeholder={totalUser}   onChange={(e)=>setUsers(e.target.value)} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6">
        <p>Number of Quallified Freelancers</p>
        <input type="number" placeholder={localStorage.getItem("Qfreelancers")}   onChange={(e)=>setQuser(e.target.value)} />
        </div>
        <div className="col-6">
        <p>Number of Reject Freelancers</p>
        <input type="number" placeholder={localStorage.getItem("Rfreelancers")}   onChange={(e)=>setRuser(e.target.value)} />
        </div>
      </div>
      <div className="mt-4">
      <p>Recommandation of Administrator</p>
      <textarea style={{width:"100%"}}  rows="5"  maxlength="100" onChange={(e)=>setText(e.target.value)} />
      </div>
      <button onClick={addInformation} style={{width:"100%",color:"white",backgroundColor:"#16056B"}} className="btn mt-4" type="submit">
        Submit Form
     </button>
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

export default FeedbackForm;