import NavPanel from "./NavPanel";
import React from 'react';
import Headroom from "react-headroom";
import { Table } from "react-bootstrap";
import { db } from "./Functions/firebase";
import { useEffect,useState } from "react";
import { collection, doc, getDocs,updateDoc,setDoc } from 'firebase/firestore';
import './style.css';
import Swal from "sweetalert2";
import 'react-toastify/dist/ReactToastify.css';
const uid=localStorage.getItem("id");
function CompleteJob()
{
   const name=localStorage.getItem("name");
   let totalBudget03 = 0;
    const [data, setData] = useState([]);
    const dataDocRef = doc(db, 'jobs',uid); 
    const dataCollectionRef = collection(dataDocRef, 'jobsnew');
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(dataCollectionRef);
            const dataList = [];
             querySnapshot.forEach((doc) => {
              const commentData = doc.data();
              dataList.push({ id: doc.id, ...commentData });
            });
          setData(dataList);
          } catch (error) {
           alert("error")
          }
      };
      useEffect(()=>{
        fetchData();
    }, [db]); 

   const ReleaseMoney=  async  (id,uid,value,profit,status)=>
   {
  const dataDocRef = doc(db, 'jobs', uid, 'jobsnew', id);
  const newData = {
    'releaseMoney': value,
    'Precentage': profit,
    'Transtraction':"Transtraction Succussfully",

    };
    if(status==="Transtraction Succussfully")
    {
      Swal.fire({
        position: 'center',
        icon: 'success',
        html: `
         <p><span style="color:#16056B;font-size:25px"><b>Already Succussfully</b></span></p>
        `,
        showConfirmButton: false,
        timer: 5000
      }) 
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'success',
        html: `
         <p><span style="color:#16056B;font-size:25px"><b>Your Transtraction is Succussfully</b></span></p>
        `,
        showConfirmButton: false,
        timer: 5000
      })
      updateDoc(dataDocRef, newData)
      .then(() => {
      })
      .catch((error) => {
       alert("error")
      }); 
      const date = new Date().toLocaleDateString();
      const fbCollRef=collection(db,'TaskMateProfit')
      setDoc(doc(fbCollRef, id), {
       date,
       profit
      });
    }
   } 
   useEffect(()=>{
    ReleaseMoney();
}, [db]); 
return(
    <>
  <Headroom>
  <NavPanel/>
  </Headroom> 
<div className="d-none d-lg-block" > 
<div className="m-4 text-center">
    <h4 style={{color:"#16056B"}}> {name} Posted Jobs Information </h4>
    </div> 
  <div className="todo-content m-5 ">
    {
  <div className="table-container">
  <Table className="table table-striped">
  <thead >
  <tr>
    <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Job Id</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Job Title</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Budget</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Release</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>TaskMate Profit</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Status</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Transtraction</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Status</th>
    </tr> 
  </thead>
  <tbody>
    {data?.map((item) => (
      
             <tr key={item.id}>
               <td>{item.JobID}</td>
               <td>{item.jobTitle}</td>
               <td>LKR{'\n'}{item.budget}</td>
               <td>LKR{'\n'}{item.budget-item.budget*0.03}</td>
               <td>LKR{'\n'}{item.budget*0.03}</td>
               <td>{item.status}</td>
               <td><button onClick={()=>ReleaseMoney(item.id,uid,item.budget-item.budget*0.03,item.budget*0.03,item.Transtraction)}style={{backgroundColor:"#16056B",
               borderColor:"#16056B",color:"#fff"}}>Pay</button></td>
      <td>{item.Transtraction}</td>
             </tr>
       ))}
   </tbody>
</Table>
</div>
    }
</div>
</div>
</>
  )
  }


export default CompleteJob;