import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">{" "}<h6 class="credit"> Created By <span style={{color:"#ffa500"}}>
              Suraj gaikwad.</span> | All Rights Reserved !</h6>
              <a  href="#" className="text-decoration-none text-dark fs-5" to="/" rel="noreferrer"></a>
            </p>
            <a className="text-dark fs-4" href="https://github.com/Manish-patil27?tab=repositories" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;