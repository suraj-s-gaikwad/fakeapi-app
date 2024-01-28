import React from 'react'
//import ProductPro from './ProductPro'
import Footer from "./Footer";
export default function HomePro() {
  return (
    <div className='hero'>
        <div className="card bg-dark text-white border-0">
        <img src="./lady.jpg" className="card-img" alt="Backgroundd" height="600px" />
  <div className="card-img-overlay d-flex flex-column justify-content-">
      <div className="container">
    <h5 className="card-title display-3 fw-bolder mb-0" style={{color:"black"}}>NEW SEASON ARRIVALS</h5>
    <p className="card-text lead fs-2" style={{color:"black"}}> 
      CHECK OUT ALL THE TRENDS
    </p>
  </div>
</div>
    </div>
      {/* <ProductPro/> */}
      <br></br>
      <Footer/>
    </div>
  )
}






