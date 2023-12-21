import React from 'react'
import Navbar from '../components/navbar/Navbar'
import "./discovery.css"
export const Discovery = () => {
  return (
   <div className="App">
       <Navbar/>
       <div>
       <div className='mainTitle'>
       <span className='mainTitleTextLeft'>Subfinder</span>
       <span className='mainTitleTextRight'>Subfinder</span>
       </div>
       <div className='main'>
       <div className='mainleft'>
        <div className='leftChildContainer'>
                  <p className='leftTextTitle'>Phantom</p>

       <p className='leftText'>
     ua. mco laboris nisi ut aliquip ex ea commodo consequat.
       </p>
         <button className='homeBtn'>Run</button>

       </div>
       </div>
       <div className='mainright'>
       <img src={'/discoveryPhoto.png'} alt="Home" />
       </div>
       </div>
       </div>
    </div>
  )
}
