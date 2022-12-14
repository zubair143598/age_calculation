import React from 'react'
// import { useState } from 'react'

const Hero = () => {
  // const [date1, setDate1]=useState("");

  // // let date2=setDate1(data.getDate());
  // console.log(date2)
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-mlg-8 text-center mt-5">
            <h1>Age Colculater</h1>
          </div>
          <div className="row ">
            <div className="col-lg-2"></div>
         <div className="col-lg-8 d-flex">
         <div className='day'>
            <p>Date</p>
            <input type="text" name="date" id="date" placeholder="dd" required="required" minlength="1" maxlength="2" onChange={(e)=>e.target.value} />
          </div>
          <div className='Month ms-4'>
            <p>Month</p>
            <input type="text" name="month" id="month" placeholder="mm" required="required" minlength="1" maxlength="2" onChange={(e)=>e.target.value}/>
          </div>
          <div className='Year ms-4'>
            <p>Year</p>
            <input type="text" name="Year" id="Year" placeholder="yyyy" required="required" minlength="4" maxlength="4" onChange={(e)=>e.target.value} />
          </div>
         </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero