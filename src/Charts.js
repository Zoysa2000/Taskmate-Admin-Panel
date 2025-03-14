import React from 'react';
import NavPanel from "./NavPanel";
import Headroom from "react-headroom";
import Chart from 'react-google-charts';
import { db } from "./Functions/firebase";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Bounce } from 'react-reveal';
const Charts = () => {
    const currDate = new Date().toLocaleDateString();
    const [dataLengthClient, setDataLengthClient] = useState(0);
    const [dataLengthUser, setDataLengthUsers] = useState(0);
    const [dataLengthQfreelancer, setDataLengthQfreelnacer] = useState(0);
    const [dataLengthRfreelancer, setDataLengthRfreelancer] = useState(0);
    localStorage.setItem("client",dataLengthClient);
    localStorage.setItem("users",dataLengthUser);
    localStorage.setItem("Qfreelancers",dataLengthQfreelancer);
    localStorage.setItem("Rfreelancers",dataLengthRfreelancer);
getDocs(collection(db, "Clients"))
             .then((querySnapshot)=>{              
                 const data = querySnapshot.docs
                     .map((doc) => ({...doc.data(), id:doc.id }));
                 setDataLengthClient(data.length);                
                 console.log(data, data);
             })

             getDocs(collection(db, "Users"))
             .then((querySnapshot)=>{              
                 const data = querySnapshot.docs
                     .map((doc) => ({...doc.data(), id:doc.id }));
                 setDataLengthUsers(data.length);                
                 console.log(data, data);
             })
             getDocs(collection(db, "RejectUsers"))
             .then((querySnapshot)=>{              
                 const data = querySnapshot.docs
                     .map((doc) => ({...doc.data(), id:doc.id }));
                 setDataLengthRfreelancer(data.length);                
                 console.log(data, data);
             })
             getDocs(collection(db, "PermanantUsers"))
             .then((querySnapshot)=>{              
                 const data = querySnapshot.docs
                     .map((doc) => ({...doc.data(), id:doc.id }));
                 setDataLengthQfreelnacer(data.length);                
                 console.log(data, data);
             })
        
  const chartData = [
    ['People', 'Amount'],
    ['Registerd Clients', dataLengthClient],
    ['Registerd Freelancers', dataLengthUser],
    
  ];
  const summaryData = [
    ['People', 'Amount'],
    ['Registerd Clients', dataLengthClient],
    ['Registerd Freelancers', dataLengthUser],
    ['Quallifiy Freelancers', dataLengthQfreelancer],
    ['Reject Freelancers', dataLengthRfreelancer],
    
  ];
  const data = [
    ['People', 'Amount'],
    ['Quallifiy Freelancers', dataLengthQfreelancer],
    ['Reject Freelancers', dataLengthRfreelancer],
  ];
  const chartOptions = {
    title:"Registerd Freelancers and Clients in TaskMate",
    titleTextStyle: {    
      fontSize: 12,                             
  },
   pieHole: 0.5,
    legend: 'bottom',
    is3D: false,
    slices: {1:{color: '#FD9519'}}
  };
  const chartOption = {
    title:"Quallified Freelancers and Reject Freelancers in TaskMate",
    titleTextStyle: {    
      fontSize: 12,                             
  },
    pieHole: 0.5,
    legend: 'bottom',
    is3D: false,
    slices: {0:{color: '#16056B'}, 1:{color: '5696FA'}}
  };
  const summarychartOptions = {
    title:"Users Summary Precentage in TaskMate Application",
    titleTextStyle: {    
    fontSize: 12,                             
  },
    pieHole: 0.5,
    legend: 'bottom',
    is3D: true,
    slices: { 1:{color: '#FD9519'},2:{color: '#16056B'},3:{color: '#5696FA'}}
  };
  return (
    <div className="d-none d-lg-block">
        <Headroom>
        <NavPanel/>
        </Headroom>
        <div className="mt-4 text-center">
    <h4 style={{color:"#16056B"}}>Graphical Representation of TaskMate Users Till {currDate}</h4>
    <img src="./icon.png" style={{height:"50px",width:"50px"}} alt="image03"/>
    </div>
      <div className="container shadow-lg p-5 mb-5 bg-grey rounded mt-3" style={{height:"auto",width:"auto"}}>
            <div className="container">
                <div className="row" >
                <div className="col-4" >
                <div className="card">
                  <Bounce top>
                  <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={chartData}
        options={chartOptions}
      />
    </Bounce>
     </div>
        </div>
        <div className="col-4">
          <div className="card">
            <Bounce top>
            <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={chartOption}
      />
 </Bounce>
    </div>
       </div>
        <div className="col-4">
         <div className="card">
          <Bounce top>
          <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={summaryData}
        options={summarychartOptions}
      />    
      </Bounce>
        </div>
       </div>
        </div>
        </div>
        </div> 
    </div>
  );
};

export default Charts;
