import NavPanel from "./NavPanel";
import Headroom from "react-headroom";
import { db } from "./Functions/firebase";
import { useEffect,useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Table } from "react-bootstrap";
import './style.css'
function ClientInfo()
{
    const currDate = new Date().toLocaleDateString();
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);
    const fetchPost = async () => {
       await getDocs(collection(db, "Clients"))
            .then((querySnapshot)=>{              
                const data = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setData(data);
                setDataLength(data.length);                
                console.log(data, data);
            })
       }
   useEffect(()=>{
        fetchPost();
    }, [])
    
     return(
    <>
   <Headroom>
  <NavPanel/>
  </Headroom>
  <div className="d-none d-lg-block">
   <div className="m-5 text-center">
    <h4 style={{color:"#16056B"}}>{dataLength} Clients are Registerd in TaskMate {currDate}</h4>
    </div>   
  <div className="todo-content" style={{marginLeft:"50px",marginRight:"50px",marginTop:"-20px"}}>
    {
  <div className="table-container">
  <Table className="table table-striped">
  <thead >
    <tr>
    <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Profile Pic</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>First Name</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Last Name</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Gender</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Birthday</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Province</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>City</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Address</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Prof-Role</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Eamil</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Phone</th>
    </tr>
  </thead>
  <tbody>
  {data?.map((item,i) => (
            <tr key={i}>
             <td> <img src={item.profilePhotoUrl}  style={{"clip-path":"circle()","width":"60px","height":"60px"}} alt="image1"/></td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.birthday}</td>
              <td>{item.province}</td>
              <td>{item.city}</td>
              <td>{item.address}</td>
              <td>{item.professionalRole}</td>
              <td>{item.email}</td>
              <td>{item.phoneNo}</td>
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

export default ClientInfo;