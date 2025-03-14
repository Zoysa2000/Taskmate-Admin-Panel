import Navigation from "./Navigation";
import Headroom from "react-headroom";
import './style.css';  
import Typewriter from 'typewriter-effect';
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";

function Home()
{
    return(
  <>
<div className=" d-none  d-lg-block">
  <Headroom>
  <Navigation/>
  </Headroom>
  <div className="bg-image">
  <div className="container">
  <div className="row">
  <div className="col-md-12 col-lg-9 mt-5 text-light">
  <div>
  <Zoom left>
  <p className="d-flex" style={{"font-size":"40px",marginTop:"25px",fontWeight:"600"}}>TaskMate Backend Services &nbsp; 
  <Typewriter 
  options={{
  autoStart:true,
  loop:true,
  delay:50,
  strings:["Money Transtraction","Checking Requrinments","Generate Reports","Customer Security",]
  }}        
  /> 
  </p>
  <h2 className="mt-3" style={{"font-size":"30px"}}>Find the perfect <i style={{color:"#F4f7f9","font-family":"domaine"}}><b>freelance services</b></i>  for your business</h2>
  <p style={{"font-size":"17px","font-family":"Arial, Helvetica, sans-serif","color":"white"}} className="mt-4 d-md-none d-lg-block ">When we think about logos, we often imagine huge corporations and big-name brands. But logos are just as important for freelancers like you as well. 
  A logo is a visual reference that invites prospective clients to explore your offerings.</p>
  <p style={{"font-size":"17px","font-family":"Arial, Helvetica, sans-serif"}} className=" mt-2 d-md-block d-lg-none ">When we think about logos, we often imagine huge corporations and big-name brands. But logos are just as important for freelancers like you as well. </p>
  <Link style={{color:"white",backgroundColor:"#16056B"}} to="#" onClick={()=>{window.scroll(0,0)}} className="btn">Introduction</Link>
  </Zoom>
  </div>
   </div>
  </div>
  </div>
  </div>
  </div>
  </>
    )
}
export default Home;