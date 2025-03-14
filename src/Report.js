import React from 'react';
import NavPanel from "./NavPanel";
import Headroom from "react-headroom";
import jsPDF from 'jspdf';
import { db } from "./Functions/firebase";
import { useEffect,useState } from "react";
import { Bounce } from 'react-reveal';
import { collection, getDocs} from "firebase/firestore";
import { Button } from 'react-bootstrap';

const Reports = () => {
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
        startY: 10,
        head: [['Name', 'Gender', 'City','Role','Contact-Number','Email']],
        body: data.map(item => [item.firstName, item.gender, item.city,item.professionalRole,item.phoneNo,item.email])
          });
    doc.save('Client-pdf.pdf');
      };
      const generatefreelancerPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
        startY: 10,
        head: [['Name', 'Gender', 'City','Role','Contact-Number','Email']],
        body: reportdata.map(item => [item.firstName, item.gender, item.city,item.role,item.phoneNo,item.email])
          });
    doc.save('freelancer-pdf.pdf');
      };
      const generatesummaryPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
        startY: 10,
        head: [['Date','Client', 'Users','Reject Freelancers','Qualified Freelancer','Recommandation']],
        body: summarydata.map(item => [item.day,item.client, item.users,item.reject,item.qualified,item.text])
          });
    doc.save('summary-pdf.pdf');
      };
      const generateFinancialPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
        startY: 10,
        head: [['Job Id','Date', 'Profit']],
        body: financialdata.map(item => [item.id,item.date,item.profit])
          });
    doc.save('Financial-pdf.pdf');
      };
    const [data, setData] = useState([]);
    const fetcData = async () => {
       await getDocs(collection(db, "Clients"))
            .then((querySnapshot)=>{              
                const data = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
                setData(data)   
            })
            }
   useEffect(()=>{
        fetcData();
    }, [db]);

    const [reportdata, setreportData] = useState([]);
    const reportData = async () => {
       await getDocs(collection(db, "Users"))
            .then((querySnapshot)=>{              
                const reportdata = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
                setreportData(reportdata)                
            })
            }
   useEffect(()=>{
        reportData();
    }, [db]);  

    const [summarydata, setSData] = useState([]);
    const summarytData = async () => {
       await getDocs(collection(db, "ReportInformation"))
            .then((querySnapshot)=>{              
                const summarydata = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
                setSData(summarydata)                
            })
            }
   useEffect(()=>{
    summarytData();
    }, [db]);  

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
    <>
    <div className="d-none d-lg-block">
    <Headroom>
    <NavPanel/>
    </Headroom>
    <div className="container mt-5">
    <div className="row">
    <div className="col-md-6 col-lg-6">
        <div className="d-md-block">
          <div className="text-center">
            <Bounce left>
            <img alt='bg'  src="https://www.quickstartadmin.com/images/client-management-software-img.png" width="450px" height="400px" />
            </Bounce>
           </div>
           <div className="mt-3 mx-3">
            <h5>3.Financial Report of TaskMate</h5>
            <p>This report aims to provide how circulation money throught the TaskMate and control the payment management for freelancers.</p>
            <Button onClick={() => generateFinancialPDF()}>
             Financial Report <img alt='bg' style={{height:"20px",width:"20px"}} src="https://cm.sp.gov.lk/images/Icons/pdf.gif"></img>
          </Button>
        </div>
        </div>
      </div>
     <div className="col-md-6 col-lg-6 ">
        <h3 style={{color:"#16056B"}} className="mx-3">TaskMate Generate PDF Reports</h3>
        <div className="mt-3 mx-3 ">
            <h5>1.Dawnload TaskMate Client Information Report</h5>
            <p> This report serves as a comprehensive overview of each client, offering insights into their background, preferences, and interactions with the application.</p>
          <Button onClick={() => generatePDF()}>
            Client Report <img alt='bg'style={{height:"20px",width:"20px"}} src="https://cm.sp.gov.lk/images/Icons/pdf.gif"></img>
          </Button>
        </div>
        <div className="mt-3 mx-3">
            <h5>2.Dawnload TaskMate Freelancer Information Report</h5>
            <p>This report aims to provide valuable information about TaskMate freelancers, including their demographics, skills, availability, 
              and the benefits of working with this dynamic community of independent professionals.</p>
            <Button onClick={() => generatefreelancerPDF()}>
            Freelancer Report <img alt='bg' style={{height:"20px",width:"20px"}} src="https://cm.sp.gov.lk/images/Icons/pdf.gif"></img>
          </Button>
        </div>
        <div className="mt-3 mx-3">
            <h5>3.Summary Report of TaskMate Users</h5>
            <p>This report aims to provide how manipulate users by Admin panel of the TaskMate and give their recommandation.</p>
            <Button onClick={() => generatesummaryPDF()}>
             Summary Report <img alt='bg' style={{height:"20px",width:"20px"}} src="https://cm.sp.gov.lk/images/Icons/pdf.gif"></img>
          </Button>
        </div>
    </div>
    </div>
  </div>
    </div>
   </>
 )  
  
};

export default Reports;