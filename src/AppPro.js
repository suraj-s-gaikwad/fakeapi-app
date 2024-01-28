import React from "react";
import './Appstyle.css';
import NavPro from "./NavPro";
import HomePro from "./HomePro";
import { Route,Routes } from "react-router-dom";
//import { Switch} from "react";
import ProductPro from "./ProductPro";
import Products from "./Products";
import Aboutpro from "./Aboutpro";
import Contact from "./Contact";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
import Checkout from "./Checkout";
export default function  AppPro() {
  return (
    <>
    
     <NavPro/> 
       {/* <HomePro/> */}
       
      <Routes> 
          <Route path="/" element={<HomePro/>} />
          <Route path="product" element={<ProductPro/>} /> 
         <Route  path="/productpro/:id" element={<Products/>} />
         <Route  path="/about" element={<Aboutpro/>} />
         <Route  path="/contact" element={<Contact/>} /> 
         <Route  path="/cart" element={<Cart/>} /> 
         <Route  path="/login" element={<Login/>} /> 
         <Route  path="/register" element={<Register/>} /> 
         <Route  path="/checkout" element={<Checkout/>} /> 
            </Routes>  
          

{/* <Switch> 
        <Route exact path="/" component={HomePro} />
        <Route exact path="/product" component={ProductPro} /> 
         <Route exact path="/product/:id" component={Products} /> 
         <Route exact path="/about" component={Aboutpro} /> 
        </Switch>   */}
            {/* <Aboutpro/> */}
      {/* <BrowserRouter>
      <NavPro/>
      <Routes>

     <Route path="/" element={<HomePro/>}/>
     <Route path="ProductPro" element={<ProductPro/>}/>
     <Route path="ProductPro" element={<ProductPro/>}/>
     <Route/>
      </Routes>
      
      </BrowserRouter> */}

      {/* <NavPro /> 
      <HomePro/>
      
        <Routes> 
          <Route path="/" element={<HomePro/>} />
          <Route path="product" element={<Product/>} /> 
         <Route  path="/productpro/:id" element={Products} />
            </Routes>    */}
      
     
       
    </>
  );
}


