import NavPanel from "./NavPanel";
import Headroom from "react-headroom";
import { db } from "./Functions/firebase";
import { useEffect,useState } from "react";
import { collection, getDocs} from "firebase/firestore";
import { Table } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import './style.css';
function   FreelancerComJobs()
{
  const navigate=useNavigate();
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
   
  
    const checkJobs =(id,fname) =>{
       localStorage.setItem("id",id);
       localStorage.setItem("name",fname);
       navigate("/CompleteJob"); 
     }
return(
    <>
   <Headroom>
  <NavPanel/>
  </Headroom>
<div className="d-none d-lg-block" >  
  <div className="todo-content m-5 ">
    {
  <div className="table-container">
  <Table className="table table-striped">
  <thead >
  <tr>
    <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Profile</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>First Name</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Last Name</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Email</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Phone Number</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Posted Jobs</th>
    </tr> 
  </thead>
  <tbody>
   {data?.map((item) => (
            <tr key={item.id}>
            <td> <img src={item.profilePhotoUrl} style={{"clip-path":"circle()","width":"60px","height":"60px"}} alt="imge1"/></td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phoneNo}</td>
              <td><button onClick={() => checkJobs(item.id,item.firstName)} style={{backgroundColor:"#16056B",borderColor:"#16056B",color:"white"}}>Posted Jobs</button></td>
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


export default FreelancerComJobs;