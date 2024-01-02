import React from 'react';
import Navbar from '../components/navbar/Navbar';
export const Steptwo = () => {
  return (
  <div>step two</div>
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