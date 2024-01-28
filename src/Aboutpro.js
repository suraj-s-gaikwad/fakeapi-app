

import React from 'react'
import Footer from './Footer'

//import NavPro from './NavPro';
const Aboutpro = () => {
  return (
    <>
      {/* <NavPro /> */}
      <div className="container my-3 py-3">
        <h1 className="text-center fw-bolder mb-0">ABOUT US</h1>
        <hr />
        <p className="lead text-center">
        Launched in India in 2023, influenced by the lifestyle of its creative director İlkyaz Özel, 
        New Arrivals is meant to inject luxury into the everyday ...Look stylish with ONLY's New Arrivals collection for women. Buy trendy new denim jeans, shirts, tops, skirts, dresses and more!
        Firstly, KAZO's new arrivals collection features jeans, tops, dresses, shirts, jeggings, t-shirts, jumpsuits,
         and pants. Find your favorite styles and always ...Explore and buy latest designer outfits online on FabAlley. For all the fashion
          lovers across the globe, we offer the best of new arrivals outfits online.Browse through the new arrivals at Miaminx. Buy latest and stylish clothing options for Women like shorts, 
          pants, kaftans, jumpsuits, coords, ...Browse through the new arrivals at Miaminx. Buy latest and stylish clothing options for Women like shorts, pants, kaftans, jumpsuits, coords, ...
          Create fashionable outfits with items from the Gas Jeans collection! Discover Women's clothing and accessories new arrivals on the official website.
          
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/5418890/pexels-photo-5418890.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center" >Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/6625943/pexels-photo-6625943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
     <Footer/>
    </>
  )
}

export default Aboutpro
 