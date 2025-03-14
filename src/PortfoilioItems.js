import React from 'react';
import NavPanel from "./NavPanel";
import Headroom from "react-headroom";
import { db } from "./Functions/firebase";
import { useEffect,useState } from "react";
import { collection, doc, getDocs } from 'firebase/firestore';
import Swal from "sweetalert2";
import './style.css';  
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Bounce } from 'react-reveal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';

const PortfoilioItems = () => {
const uid=localStorage.getItem("id");
const navigate=useNavigate();
const [selectedValue, setSelectedValue] = useState('');
localStorage.setItem("level",selectedValue);
   const [images, setImages] = useState([]);
     const imageDocRef = doc(db, 'Users', uid);
     const imageCollectionRef = collection(imageDocRef, 'portfolio_items');
 // Fetch data from the subcollection
     const fetchData = async () => {
       try {
         const querySnapshot = await getDocs(imageCollectionRef);
         const imageList = [];
          querySnapshot.forEach((doc) => {
           // Retrieve data from each document in the subcollection
           const commentData = doc.data();
           imageList.push({ id: doc.id, ...commentData });
         });
       setImages(imageList);
       } catch (error) {
         console.error('Error fetching comments:', error);
       }
     };
 
     useEffect(()=>{
      fetchData();
  }, [db]); 

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    Swal.fire({
      position: 'center',
      icon: 'success',
      html: `
       <p><span style="color:#16056B;font-size:25px"><b>${localStorage.getItem("name")}&nbsp is verifyed as a ${selectedValue} Freelancer</b></span></p>
      `,
      showConfirmButton: false,
      timer: 5000
    })
  };
  const add=()=>
  {
  if(selectedValue==='')
  {
   toast.error("Before Add Please Level Up")
  }
  else{
    navigate("/AddFreelancer")
  }
  }
  
return (
<div className='d-none d-lg-block'>
<Headroom>
<NavPanel/>
</Headroom>
<div className="container mt-5">
<div className="row mt-3">
  <div className="col-lg-6">
    <Bounce top>
    <div className="card shadow-lg p-2 mb-5 bg-grey rounded ">
   <div className="card-title">
     <h5 style={{color:"#16056B"}} >Collection I</h5>
    </div>
   <ul className="d-flex gap-3">
        {images.map((index) => (
         <img  src={index.image_urls[0]}  style={{height:"120px",width:"120px"}} alt="portfolio"/>
        ))}
      </ul>
    </div> 
    </Bounce>
  </div>
  <div className="col-lg-6">
    <Bounce top>
    <div className="card shadow-lg p-2 mb-5 bg-grey rounded">
    <div className="card-title">
     <h5 style={{color:"#16056B"}}>Collection II</h5>
    </div>
   <ul className="d-flex gap-3">
        {images.map((index) => (
           <img src={index.image_urls[1]}  style={{height:"120px",width:"120px"}} alt="portfolio" />
        ))}
      </ul>
    </div> 
    </Bounce>
  </div>
</div>
<div className="row">
  <div className="col-lg-6">
    <Bounce top>
    <div className="card shadow-lg p-2 mb-5 bg-grey rounded">
   <div className="card-title">
     <h5 style={{color:"#16056B"}}>Collection III</h5>
    </div>
   <ul className="d-flex gap-3">
        {images.map((index) => (
         <img src={index.image_urls[2]}  style={{height:"120px",width:"120px"}} alt="portfolio"/>
        ))}
      </ul>
    </div> 
    </Bounce>
  </div>
  <div className="col-lg-6">
    <Bounce top>
    <div className="card shadow-lg p-2 mb-5 bg-grey rounded">
   <div className="card-title">
     <h5 style={{color:"#16056B"}}>Collection IV</h5>
    </div>
   <ul className="d-flex gap-3">
        {images.map((index) => (
           <img src={index.image_urls[3]}  style={{height:"120px",width:"120px"}}alt="portfolio" />
        ))}
      </ul>
    </div> 
    </Bounce>
  </div>
</div>
<div className=" d-flex justify-content-center gap-3"  style={{color:"#16056B",fontSize:"20px",fontWeight:"600"}}>
<img src={localStorage.getItem("img")} style={{clipPath:"circle()",height:"60px",width:"60px"}} alt="portfolio"/>
<label className='mt-2'>
        Select an option You want to Level up {localStorage.getItem("name")}:
        <select className="mx-3" value={selectedValue} onChange={handleDropdownChange} >
        <option value="Beginner Level">Level</option>
        <option value="Not Level">Not Level</option>
          <option value="Beginner Level">Beginner Level</option>
          <option value="Middle Level">Middle Level</option>
          <option value="Top Level">Top Level</option>
        </select>
      </label>
      <Button style={{height:"40px",width:"100px",backgroundColor:"#16056B",borderColor:"#16056B"}} onClick={() =>add()}>
        Back  </Button>
</div>
</div>
<ToastContainer
     position='top-center'
     theme='light'
     autoClose={4000}
     pauseOnHover={false}
    hideProgressBar={false}
   closeOnClick={true}
    />         
</div>
       
 )
}
export default PortfoilioItems;
