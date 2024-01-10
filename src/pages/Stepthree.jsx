import React from "react";
import Navbar from "../components/navbar/Navbar";
import "./stepone.css";
import { Link } from "react-router-dom";
export const Stepthree = ({props}) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Navbar />
      <div style={{color:"white"}}>Burasıııı:: {props}</div>
      <button onClick={()=> console.log("props : ", props)}>test buttton</button>




    </div>
  );
};

