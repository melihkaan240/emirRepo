import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';

export const Steptwo = () => {
  // State'i tanımla
  const [inputValue, setInputValue] = useState('');
  const [dvalue, setDvalue] = useState('-d');
  
  // Input değeri değiştiğinde state'i güncelle
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Butona tıklandığında console'a yazdır
  const handleButtonClick = () => {
    // buraya tıklandığında backende value atacak
    console.log("-d value:",dvalue);
    console.log('Input Değeri:', inputValue);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Navbar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '84vw',
          height: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: 'full',
            backgroundColor: 'red',
            width: '50%',
            gap: '24px',
          }}
        >
          {/* Input ve Buton */}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="stepBtn" onClick={handleButtonClick}>
            Continue
          </button>
        </div>
        <div style={{ height: 'auto', width: '70%' }}></div>
      </div>
    </div>
  );
};
