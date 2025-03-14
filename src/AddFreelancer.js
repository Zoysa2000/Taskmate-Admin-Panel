import NavPanel from "./NavPanel";
import Headroom from "react-headroom";
import { db } from "./Functions/firebase";
import { useEffect,useState } from "react";
import { collection, getDocs,addDoc,updateDoc} from "firebase/firestore";
import { doc} from "firebase/firestore";
import { Table } from "react-bootstrap";
import './custom-swal-styles.css'; 
import Swal from "sweetalert2";
import './style.css';
import axios from "axios";
function AddFreelancer()
{
    const [data, setData] = useState([]);
    const [id,setId]=useState("");
    const level=localStorage.getItem("level");
    localStorage.setItem("id",id);
    const fetcData = async () => {
       await getDocs(collection(db, "Users"))
            .then((querySnapshot)=>{              
            const data = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id }));
            setData(data)
            })
            }
   useEffect(()=>{
        fetcData();
    }, []); 
    const addToAnotherCollection = async (item, name, id, Status) => {
      Swal.fire({
          html: `<p><span style="color:#16056B;font-size:25px"><b>Do you want to add ${name} to TaskMate database?</b></span></p>`,
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: 'No',
      }).then(async (result) => {
          if (result.isConfirmed) {
              if (Status === "Add TaskMate") {
                  Swal.fire({
                      icon: 'success',
                      html: `<p><span style="color:#16056B;font-size:25px"><b>${name} is already added to TaskMate database</b></span></p>`,
                      showConfirmButton: false,
                      timer: 3000
                  });
              } else {
                  const randomName = await fetchFirstFirstName();
                  const dataDocRef = doc(db, 'Users', id);
                  const newData = {
                      'Level': level,
                      'Status': "Add TaskMate",
                      'verify': true,
                      'username': randomName,
                  };
                  try {
                      await updateDoc(dataDocRef, newData);
                      Swal.fire({
                          icon: 'success',
                          html: `<p><span style="color:#16056B;font-size:25px"><b>${name} is added to TaskMate database. Nickname is ${randomName}</b></span></p>`,
                          showConfirmButton: false,
                          timer: 3000
                      });
                      const fbCollRef = collection(db, 'PermanantUsers');
                      await addDoc(fbCollRef, { data: item });
                  } catch (error) {
                      console.error('Error updating document:', error);
                  }
              }
          } else if (result.isDenied) {
              // Handle denial case if needed
          }
      });
  };
  const fetchFirstFirstName = async () => {
    try {
        const { data } = await axios.get('https://randomuser.me/api/?results=12&inc=name');
        return data.results[0].name.first;
    } catch (error) {
        console.error('Error fetching first first name:', error);
        return null;
    }
};
const handleReject = async (item, name, id) => {
  Swal.fire({
      html: `<p><span style="color:#16056B;font-size:25px"><b>Do you want to reject ${name} from TaskMate database?</b></span></p>`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
  }).then(async (result) => {
      if (result.isConfirmed) {
          const dataDocRef = doc(db, 'Users', id);
          const newData = {
              'Level': "Not Level",
              'Status': "Add Not TaskMate",
              'verify': false
          };
          try {
              await updateDoc(dataDocRef, newData);
              Swal.fire({
                  icon: 'success',
                  html: `<p><span style="color:#16056B;font-size:25px"><b>${name} is rejected from TaskMate database</b></span></p>`,
                  showConfirmButton: false,
                  timer: 3000
              });
              const fbCollRef = collection(db, 'RejectUsers');
              await addDoc(fbCollRef, { data: item });
          } catch (error) {
              console.error('Error updating document:', error);
          }
      } else if (result.isDenied) {
          // Handle denial case if needed
      }
  });
};

     
    const checkReq =(fname,lname,bio,services,skills,hourlyRate,socialLink,profilePhotoUrl,email,province,professionalRole,id) =>{
     setId(id);
     localStorage.setItem("img",profilePhotoUrl);
     localStorage.setItem("name",fname);
      Swal.fire({
      html: `
       <p><span style="color:#16056B;font-size:25px"><b>${fname}&nbsp ${lname}</b></span></p>
       <img style="clip-path:circle();width:50px;height:50px" src="${profilePhotoUrl}"></img>
        <p style="font-size:12px"><span style="color:#16056B">Bio</span> :&nbsp${bio}</p>
        <p style="font-size:12px"><span style="color:#16056B">ProfessionalRole</span> :&nbsp${professionalRole}</p>
        <p style="font-size:12px"><span style="color:#16056B">Services</span> :&nbsp${services}</p>
        <p style="font-size:12px"><span style="color:#16056B">Province</span> :&nbsp${province}</p>
        <p style="font-size:12px"><span style="color:#16056B">Skills</span> :&nbsp${skills}</p>
        <p style="font-size:12px"><span style="color:#16056B">Email</span> :&nbsp${email}</p>
        <p style="font-size:12px"><span style="color:#16056B">Hourly Rate LKR</span> :&nbsp${hourlyRate}.00</p>
        <p style="font-size:12px"><span style="color:#16056B">PortfolioItmes</span> :&nbsp<a style="text-decoration:none" href="/PortfoilioItems">Click Here</a></p>
        <p style="font-size:12px"><span style="color:#16056B">SocialLink</span> :&nbsp<a style="text-decoration:none" href="${socialLink}" target="blank">Click Here</a></p>
        <button id="customButton" style="background-color:#16056B;color:white;border:none;padding:10px 20px;border-radius:5px;margin-top:10px;">Analyze Profile</button>
      `,
      showConfirmButton: false,
     

      })
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
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>FName</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>LName</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Gender</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Birthday</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>City</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Phone</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>More</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Add</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Reject</th>
      <th scope="col" style={{backgroundColor:"#B4D7FE"}}>Status</th>
    </tr> 
  </thead>
  <tbody>
   {data?.map((item) => (
            <tr key={item.id}>
            <td> <img src={item.profilePhotoUrl} style={{"clip-path":"circle()","width":"60px","height":"60px"}} alt="portfolio"/></td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.birthday}</td>
              <td>{item.city}</td>
              <td>{item.phoneNo}</td>
              <td><button onClick={() => checkReq(item.firstName,item.lastName,item.bio,item.services,item.skills,item.hourlyRate,item.socialLink,item.profilePhotoUrl,item.email,item.province,item.professionalRole,item.id)} style={{backgroundColor:"#16056B",borderColor:"#16056B",color:"white"}}>See more</button></td>
              <td><button onClick={() => addToAnotherCollection(item,item.firstName,item.id,item.Status)}  style={{backgroundColor:"green",borderColor:"green",color:"white"}}>Add {item.firstName}</button></td>
              <td><button onClick={() => handleReject(item,item.firstName,item.id)} style={{backgroundColor:"red",color:"white",borderColor:"red",}}>Reject {item.firstName}</button></td>
              <td style={{color:"green",fontWeight:"700"}}>{item.Status}</td>
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


export default AddFreelancer;