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
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center",  flexDirection:"column", height:"full", width:"50%", gap:"24px"}}>
        <div style={{display:"flex", alignItems:"start" , width:"70%" }}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",width:"65px", height:"64px", backgroundColor:"#00D1FF"}}>
            <span style={{color:"#000", textAlign:"center", fontSize:"36px", fontStyle:"normal", fontWeight:700}}>
            1
            </span>
            </div>
        </div>
        <div  style={{display:"flex", alignItems:"start" , width:"70%" , fontSize:"40px",fontWeight:700,lineHeight:"normal",color:"#00D1FF"}}>Lorem ipsum dolor </div>
        <div  style={{display:"flex", alignItems:"start" , width:"70%", fontSize:"16px",fontWeight:400,lineHeight:"normal" ,color:"#FFF"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
       <div style={{height:"auto", width:"70%"}}>
        <button className='stepBtn'  style={{display:"flex", alignItems:"start" }}>Continue</button>
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"center", alignItems:"center",paddingRight:"12px", height:"full", width:"50%", }}>
        <Box/>
      </div>
      </div>
    </div>
  );
};


const Box = () => {
  const arr =[{title:"-d"},
  {title:"-dL"},{title:"-s"},{title:"-recursive"},
  {title:"-all"},{title:"-es"},{title:"-m"},
  {title:"-f"},{title:"-rl"},
  {title:"-rls"},{title:"-t"},{title:"-up"},
  {title:"-duc"},{title:"-o"},{title:"-oJ"},
  {title:"-oD"},{title:"-cs"},{title:"-ol"},
  {title:"-config"},{title:"-pc"},{title:"-r"},
  {title:"-rL"},{title:"-nW"},{title:"-proxy"},
  {title:"-ei"},{title:"-slient"},{title:"-version"},
  {title:"-v"},{title:"-nc"},{title:"-is"}
]  
  
  return (
    <div className="stepOneOptionsContainer">
    {arr.map((i, index) => (
      <div key={index} className='stepOneOptions'>
        <p>{i.title}</p>
      </div>
    ))}
  </div>
  );
};