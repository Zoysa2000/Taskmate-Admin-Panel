import React, { useState } from 'react';
import NavPanel from "./NavPanel";
import Headroom from "react-headroom";
import './style.css';
import { db } from "./Functions/firebase";
import { useEffect } from "react";
import { collection, getDocs} from "firebase/firestore";
import { CircularProgressbar } from 'react-circular-progressbar';
import { Button } from 'react-bootstrap';
import 'react-circular-progressbar/dist/styles.css';
import jsPDF from 'jspdf';
import { autoTable } from 'jspdf-autotable';
const Review = () => 
{
    const[data,setData]=useState([]);
    const [percentage, setPercentage] = useState(0);
    let totalprofit = 0;
    const fetchData= async()=>
    {
        await getDocs(collection(db, "TaskMateProfit"))
        .then((querySnapshot)=>{              
        const data = querySnapshot.docs
        .map((doc) => ({...doc.data(), id:doc.id }));
        setData(data)
        })
    }
    useEffect(()=>{
        fetchData();
    }, [db]); 

    useEffect(() => {
        setTimeout(() => {
            if (percentage<22.5) {
                setPercentage(percentage+1);
              }
        }, 100);
      }, [percentage]);
      const generateFinancialPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
        startY: 10,
        head: [['Job Id','Date', 'Profit']],
        body: financialdata.map(item => [item.id,item.date,item.profit])
          });
    doc.save('Financial-pdf.pdf');
      };
      const [financialdata, setfinancialData] = useState([]);
      const financialData = async () => {
         await getDocs(collection(db, "TaskMateProfit"))
              .then((querySnapshot)=>{              
                  const summarydata = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                  setfinancialData(summarydata)                
              })
              }
     useEffect(()=>{
      financialData();
      }, [db]); 
      
 return(
    <div className="d-none d-lg-block" style={{overflowY:"auto"}}>
<Headroom>
<NavPanel/>
</Headroom> 
<div className="container">
    <div className="row">
    <div className="col-6" >
    <div className=" mt-5">
        <h3 style={{color:"#16056B"}}><b>Financial Information of TaskMate</b></h3>
        <p className="mt-3" style={{textAlign:"justify"}}>
        <span style={{fontSize:"40px",color:"#16056B",fontWeight:"700",textAlign:"justify"}}>T</span><span style={{fontSize:"25px",color:"#16056B",fontWeight:"700"}}>askMate</span> 
        &nbsp; the innovative platform at the forefront of freelance collaboration, has crafted a seamless ecosystem where clients effortlessly transfer payments for services rendered by talented freelancers. As the financial heartbeat of TaskMate pulsates, a key 
        element comes into play—the platform's fee structure. TaskMate ensures a fair and transparent transaction process, wherein a nominal 3% charge is levied on the client's payment. <br/><br/>
        This percentage serves as a gateway fee, allowing TaskMate to sustain and enhance its services.Once the 3% fee is collected, TaskMate orchestrates the graceful transfer of the remaining payment 
        to the deserving freelancers who contribute their skills and expertise to the platform. This meticulous distribution ensures that freelancers receive the lion's share of their hard-earned compensation, 
        fostering a mutually beneficial relationship between clients and freelancers.In the intricate dance of financial transactions on TaskMate, this 3% charge becomes the linchpin that sustains the platform's 
        operations, allowing it to continually connect clients with top-tier freelancers and facilitate a harmonious exchange of value. As we delve deeper into the intricacies of TaskMate's financial dynamics, we 
        unravel a narrative where fairness, efficiency, and innovation converge to redefine the landscape of freelance collaboration.</p>
    </div>
    </div>
    <div className="col-6">
        {data.map((index)=>{
        const profit=index.profit;
        totalprofit+=profit;
        })}
       <div style={{textAlign:"center"}}>
      <div style={{ width: 350, marginLeft: 150,marginTop:60}}>
        <CircularProgressbar value={percentage} text={"LKR"+" "+totalprofit.toFixed(2)} styles={{
          text: {
            fontSize: '12px',
            fill:"#16056B",
          },
          path: {
            stroke:"#16056B",
          },
        }} />
      </div>
      <div className="mt-3 mx-5">
            <p style={{textAlign:"justify"}}>This report aims to provide how circulation money throught the TaskMate and control the payment management for freelancers and the profit of TaskMate when transfer payment for freeelancers</p>
            <Button  onClick={() => generateFinancialPDF()}>
            <img style={{height:"20px",width:"20px"}} src="https://cm.sp.gov.lk/images/Icons/pdf.gif" alt="imag1"/> &nbsp; Download Financial Report 
          </Button>
        </div>
    </div>
    </div>
    </div>
    </div>
   </div>
 )
}

export default Review;