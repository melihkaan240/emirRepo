import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { Stepthree } from "./Stepthree";

export const Steptwo = () => {
  // State tanımları
  const [inputValue, setInputValue] = useState("");
  const [subfinderResults, setSubfinderResults] = useState(""); // Subfinder sonuçlarını saklamak için yeni state

  // Input değeri değiştiğinde state'i güncelle
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Butona tıklandığında backend'e istek yap
  const handleButtonClick = async () => {
    try {
      const response = await fetch("http://localhost:3001/runSubfinder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domain: inputValue }),
      });
      const data = await response.text();
      setSubfinderResults(data); // Elde edilen sonucu state'e kaydet
    } catch (error) {
      console.error("Error:", error);
      setSubfinderResults("Bir hata oluştu!"); // Hata durumunda state'i güncelle
    }
  };

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
              justifyContent: "start",
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
                2
              </span>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="custom-input"
              style={{
                minWidth: "70%",
                paddingLeft: "18px",
                paddingTop: "16px",
                paddingBottom: "16px",
                borderRadius: "8px",
                placeholder: {
                  color: "red", // Mavi renk
                },
              }}
              placeholder="Domain.."
            />
             <div style={{position:"absolute", left:"76%"}}>
          <select class="select-input" style={{fontSize:"16px",fontWeight:600,color:"#1A1A1A",borderRadius:"6px",padding:"8px", paddingLeft:"18px",paddingRight:"18px",backgroundColor:"#00D1FF"}}>
            <option>.com</option>
            <option>.dev</option>
            <option>.io</option>
          </select>
          </div>
          </div>
         
          <div
            style={{
              display: "flex",
              alignItems: "start",
              width: "70%",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "normal",
              color: "#00D1FF",
            }}
          >
            Lorem ipsum dolor{" "}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              width: "70%",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "normal",
              color: "#FFF",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <Link
            to="/stepthree"
            className="textOptions"
            style={{ textDecoration: "none", height: "auto", width: "70%" }}
          >
            <button
              className="stepBtn"
              style={{ display: "flex", alignItems: "start" }}
              onClick={handleButtonClick}
            >
              Continue
            </button>
          </Link>

          {/* Subfinder Sonuçlarını Göster */}

          {subfinderResults && (
            <div>
              <h3>Subfinder Sonuçları:</h3>
              <pre>{subfinderResults}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
