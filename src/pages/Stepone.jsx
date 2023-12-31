import React from 'react';
import Navbar from '../components/navbar/Navbar';
import "./stepone.css"
export const Stepone = () => {
  return (
    <div style={{display:"flex", flexDirection:"row",  }}>
      <Navbar />
      <div style={{ display:"flex", 
      flexDirection:"row", 
      width:"84vw",height:"100vh",
       }} >
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center",  flexDirection:"column", height:"full", width:"50%", backgroundColor:"blue"}}>
        <div style={{display:"flex", alignItems:"start" , width:"70%" }}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",width:"65px", height:"64px", backgroundColor:"#00D1FF"}}>
            <span style={{color:"#000", textAlign:"center", fontSize:"36px", fontStyle:"normal", fontWeight:700}}>
            1

            </span>
            </div>
        </div>
        <div  style={{display:"flex", alignItems:"start" , width:"70%" }}>Lorem ipsum dolor </div>
        <div  style={{display:"flex", alignItems:"start" , width:"70%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        <button className='stepBtn'  style={{display:"flex", alignItems:"start" }}>Continue</button>
      </div>
      <div style={{height:"full", width:"50%", backgroundColor:"red"}}>Right</div>
      </div>
    </div>
  );
};
