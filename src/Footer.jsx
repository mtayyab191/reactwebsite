import React from "react";
// import './index.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Footer= () => {

  const Year = new Date().getFullYear();



  return (
    <footer>
      <div className="d-flex justify-content-center justify-content-lg-between p-5  border-bottom"></div>
      <p className="text-center p-4 w-100 m-0" >Copyright © {Year} </p>
    </footer>
  );
}

export default Footer;
