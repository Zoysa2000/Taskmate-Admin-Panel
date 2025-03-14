import { AiFillDashboard} from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';  
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import './custom-swal-styles.css';
import { db } from "./Functions/firebase";
import { useState,useEffect } from "react";
import Chart from 'react-google-charts';
import { collection, getDocs } from "firebase/firestore";
import { FaUsers } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { TbUsersPlus } from "react-icons/tb";
import { IoBarChartSharp } from "react-icons/io5";
import { FaFileWaveform } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { TfiSupport } from "react-icons/tfi";
import { TbHandClick } from "react-icons/tb";
function AdminpanelEmail()
{
  
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    const [dataLengthClient, setDataLengthClient] = useState(0);
    const [dataLengthUser, setDataLengthUsers] = useState(0);
    const [dataLengthQfreelancer, setDataLengthQfreelnacer] = useState(0);
    const [dataLengthRfreelancer, setDataLengthRfreelancer] = useState(0);
    const navigate = useNavigate();
    const Logout = () => {
      let timerInterval
      Swal.fire({
        title: 'Log out Admin Panel',
        customClass: {
          title: 'custom-title-class', 
        },
        color:"#16056B",
        timer: 8000,
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
          localStorage.clear();
     navigate("/", { replace: true }); 
        }
      })  
    }
    const alert=()=>
    {
      let timerInterval
      Swal.fire({
        title: 'Fetching data from TaskMate Database',
        customClass: {
          title: 'custom-title-class', 
        },
        color:"#16056B",
        timer: 8000,
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
          navigate("/ClientInfo", { replace: true });
        }
      })  
    }
    const alert2=()=>
    {
      let timerInterval
      Swal.fire({
        title: 'Fetching data from TaskMate Database',
        customClass: {
          title: 'custom-title-class', 
        },
        color:"#16056B",
        timer: 8000,
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
          navigate("/FreelancerInfo", { replace: true });
        }
      })  
    }
    const alert1=()=>
    {
      let timerInterval
      Swal.fire({
        title: 'Fetching data from TaskMate Database',
        customClass: {
        title: 'custom-title-class', 
        },
        color:"#16056B",
        timer: 8000,
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
          navigate("/AddFreelancer", { replace: true });
        }
      })  
    }
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
             getDocs(collection(db, "PermanantUsers"))
             .then((querySnapshot)=>{              
                 const data = querySnapshot.docs
                     .map((doc) => ({...doc.data(), id:doc.id }));
                 setDataLengthQfreelnacer(data.length);                
                 console.log(data, data);
             })
             getDocs(collection(db, "RejectUsers"))
             .then((querySnapshot)=>{              
                 const data = querySnapshot.docs
                     .map((doc) => ({...doc.data(), id:doc.id }));
                 setDataLengthRfreelancer(data.length);                
                 console.log(data, data);
             })
             const chartData = [
              ['People', 'Amount'],
              ['Registerd Clients', dataLengthClient],
              ['', dataLengthUser],
              
            ];
            const chartDataFreelancer = [
              ['People', 'Amount'],
              ['Registerd Freelancer', dataLengthUser],
              ['', dataLengthClient],
              
            ];
            const chartOptions = {
             pieHole: 0.6,
              legend: 'bottom',
              is3D: false,
              slices: {1:{color: 'white'}}
            };
            const chartOption = {
              pieHole: 0.6,
               legend: 'bottom',
               is3D: false,
               slices: {0:{color: '#FD9519'},1:{color: 'white'}}
             };
              const data = [
    ['People', 'Amount'],
    ['Quallifiy Freelancers', dataLengthQfreelancer],
    ['', dataLengthRfreelancer],
  ];
  const chart = {
    pieHole: 0.6,
    legend: 'bottom',
    is3D: false,
    slices: {0:{color: '#16056B'}, 1:{color: 'white'}}
  };
  const openGmail = () => {
    const gmailUrl = 'https://mail.google.com/mail/u/0/#inbox?compose=new';
    window.open(gmailUrl, '_blank');
  };
  const [backgroundColor, setBackgroundColor] = useState('#5696FA');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundColor((prevColor) => (prevColor === '#5696FA' ? '#16056B' : '#5696FA'));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
    return(
        <>
    <div className="d-none d-lg-block">
    <div className="d-flex">
    <div className="container-fluid mx-0 " style={{backgroundColor:"#16056B",height:"100vh",width:"260px"}}>
    <div className="mx-3">
     <img className="mt-4" src={'./logo1.jfif'} style={{"width":"150px","height":"60px"}} alt="image06"/>
    </div>
    <div className="mt-3">
        <div  style={{color:"white",fontSize:"15px"}}>
           <p style={{transform:"translateX(20px)",fontWeight:"700",fontSize:"17px"}}><AiFillDashboard size={20}/>&nbsp;My Dashboard</p>
           <p style={{transform:"translateX(20px)",fontWeight:"700"}}>USERS</p>
           <p style={{transform:"translateX(30px)"}}>
            <Link style={{color:"white",textDecoration:"none"}} onClick={alert} ><FaUsers size={20}/>&nbsp;Clients</Link>
            </p>
            <p style={{transform:"translateX(30px)"}}>
            <Link style={{color:"white",textDecoration:"none"}} onClick={alert2}><HiMiniUsers size={20}/>&nbsp;Freelancers</Link>
            </p>
            <p style={{transform:"translateX(30px)"}} >
            <Link style={{color:"white",textDecoration:"none"}}  to="/AddFreelancer" ><TbUsersPlus size={20}/>&nbsp;Add Freelancers</Link> 
            </p>
            
            <p style={{transform:"translateX(20px)",fontWeight:"700"}}>ANALYTICS</p>
             <p style={{transform:"translateX(30px)"}} >
            <Link style={{color:"white",textDecoration:"none"}}  to="/Charts" ><IoBarChartSharp size={20}/>&nbsp;Static Charts</Link>
            </p>
            <p style={{transform:"translateX(30px)"}}>
            <Link style={{color:"white",textDecoration:"none"}}  to="/FeedbackForm" ><FaFileWaveform size={20}/>&nbsp;Feedback Form</Link>
            </p>
            <p style={{transform:"translateX(30px)"}}>
            <Link style={{color:"white",textDecoration:"none"}}  to="/Reports" ><TbReportSearch size={20}/>&nbsp; TaskMate Reports</Link>  
            </p>
            <p style={{transform:"translateX(30px)"}}>
            <Link style={{color:"white",textDecoration:"none"}}  to="/Review" ><HiCurrencyDollar size={20}/>&nbsp;TaskMate Profit</Link> 
            </p>

            <p style={{transform:"translateX(20px)",fontWeight:"700"}}>JOBS</p>
            <p style={{transform:"translateX(30px)"}}>
            <Link style={{color:"white",textDecoration:"none"}}  to="/FreelancerComJobs"><FaHandHoldingDollar size={20}/>&nbsp; TaskMate Jobs</Link> 
            </p>
            <p  style={{transform:"translateX(30px)"}} >
            <Link style={{color:"white",textDecoration:"none"}}  onClick={openGmail} ><TfiSupport size={20}/>&nbsp;Help & Support</Link> 
            </p>
            </div>
        <button onClick={Logout} className="mx-3" style={{backgroundColor:"white",color:"#16056B",width:"130px",fontWeight:"bold",marginTop:"20px"}}><RiLogoutCircleLine size={20}/>&nbsp;Log out</button>
        <p className="text-light mt-2 mx-3">Log in:{currTime}</p>
        <p className="text-light mx-3">Date:{currDate}</p>
    </div>
    </div>
    <div className="row" style={{width:"100%"}}>
     <div className="container" style={{height:"90vh"}}>
        <div className="text-center  mt-3"  style={{color:"#16056B"}}>
        <h4 style={{color:"#16056B"}}><b>Welcome to TaskMate Backend Admin Panel<img src="./logo2.jfif" width={"170px"} height={"100px"} style={{marginTop:"-20px"}} alt="image7"/></b></h4>
        </div>
        <div className="container mt-3">
        <div className="row d-flex justify-content-center">
        <div className="col-3">
        <div className="container shadow-lg   bg-grey rounded">
          <div className="d-flex" style={{color:"#16056B"}}>
            <h3 className="mt-3 mx-3">{dataLengthClient}</h3>
            <p className="mt-3"><b>Registerd Clients</b></p>
            <Chart
        chartType="PieChart"
        width="100%"
        height="100px"
        data={chartData}
        options={chartOptions}
      />
      </div>
      </div>
        </div>
        <div className="col-3">
         <div className="container shadow-lg bg-grey rounded ">
         <div className="d-flex" style={{color:"#16056B"}}>
            <h3 className="mt-3 mx-3">{dataLengthUser}</h3>
            <p className="mt-3"><b>Registerd Freelancers</b></p>
            <Chart
        chartType="PieChart"
        width="100%"
        height="100px"
        data={chartDataFreelancer}
        options={chartOption}
      />
      </div>
        </div> 
        </div>
        <div className="col-3">
        <div className="container shadow-lg  bg-grey rounded ">
        <div className="d-flex" style={{color:"#16056B"}}>
            <h3 className="mt-3 mx-3">{dataLengthQfreelancer}</h3>
            <p className="mt-3"><b>Quallified Freelancers</b></p>
            <Chart
        chartType="PieChart"
        width="100%"
        height="100px"
        data={data}
        options={chart}
      />
      </div> 
      </div> 
        </div>
       </div>
        </div>
        <div className="container shadow-lg p-5 mb-4 bg-grey rounded m-4" style={{height:"auto",width:"auto"}}>
            <div className="container">
                <div className="row">
                <div className="col-4">
                <div className="card">
          <img className="card-img-top" src="https://static.dashthis.com/media/4369/chart.svg" height={"200px"} alt="image01"/>
          <div className="card-body ">
            <h5 className="card-title"> Add freelancers in TaskMate</h5>
            <p className="card-text">Checking Requrinments of freelancers and add they permanantly in TaskMate.</p>
            <Link style={{color:"white",backgroundColor}} to=""  onClick={alert1} className="btn ">
            <TbHandClick size={20}/>&nbsp;Click here</Link>
          </div>
        </div>
         </div>
        <div className="col-4">
        <div className="card">
          <img className="card-img-top" src="https://content.jdmagicbox.com/comp/kaithal/a9/9999p1746.1746.171003165905.b5a9/catalogue/sharma-mobile-harsola-kaithal-money-transfer-agencies-western-union-1mrqq9wpgu.jpg" height={"200px"} alt="image01"/>
          <div className="card-body ">
            <h5 className="card-title">Money Transtraction</h5>
            <p className="card-text">Hanndle the all payments method very efficiency in throught the Panel. </p>
            <Link style={{color:"white",backgroundColor:"#5696FA"}} to="/FreelancerComJobs"  className="btn ">
            <TbHandClick size={20}/>&nbsp;Click here</Link>
          </div>
        </div>
       </div>
        <div className="col-4">
         <div className="card">
          <img className="card-img-top" src="https://www.geeky-gadgets.com/wp-content/uploads/2023/08/Use-ChatGPT-to-generate-reports-from-CSV-files.webp" height={"200px"} alt="image01"/>
          <div className="card-body ">
            <h5 className="card-title">Generate Reports</h5>
            <p className="card-text">Generate all the PDF about freelancers, clients, and summary information.</p>
            <Link style={{color:"white",backgroundColor:"#5696FA"}} to="/Reports"  className="btn "> 
            <TbHandClick size={20}/>&nbsp;Click here</Link>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div> 
      </div>
    </div>   
    </div>
  </div>
 </>
    )
}
export default AdminpanelEmail;