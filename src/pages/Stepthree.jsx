import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import {  useSelector } from "react-redux";

export const Stepthree = () => {
    const myDomains  = useSelector((state) => state.domain.domain);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
    <Navbar />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "84vw",
        height: "100vh",
        backgroundColor: "red",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "full",
          backgroundColor: "white",
          width: "100%",
          gap: "24px",
          backgroundColor: "#1A1A1A",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              width: "65px",
              height: "64px",
              backgroundColor: "#00D1FF",
            }}
          >
            <span
              style={{
                color: "#000",
                textAlign: "center",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: 700,
              }}
            >
              3
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              width: "65px",
              height: "64px",
              backgroundColor: "#00D1FF",
            }}
          >
            <span
            className="stepBtn"
            
            >
              Exit
            </span>
          </div>

        </div>
      
          <input
            type="text"
            className="custom-input"
            style={{
              width: "70%",
              paddingTop: "16px",
              paddingBottom: "16px",
              borderRadius: "8px",
              placeholder: {
                color: "red", // Mavi renk
              },
            }}
          />
        
       
        <div
          style={{
            display: "flex",
            alignItems: "start",
            width: "70%",
            height:"45%",
            borderRadius:"10px",
            backgroundColor: "#313131",
          }}
        >
<button onClick={()=>console.log("my domains:",myDomains)}>test button</button>
        </div>
       
       
        
      </div>
    </div>  
  </div>
  );
};