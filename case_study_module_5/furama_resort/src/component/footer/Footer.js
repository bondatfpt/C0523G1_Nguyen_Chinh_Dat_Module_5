import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div>
      <footer>
      <footer>
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className=" col-md-4">
                     <h3>Contact US</h3>
                     <ul className="link_menu" style={{color:"white"}}>
                        <li><a > Address: Đà Nẵng</a></li>
                        <li><a> Phone: 0842007468</a></li>
                        <li><a> Email: bondatfpt@gmail.com</a></li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <h3>Menu Link</h3>
                     <ul className="link_menu">
                        <li><Link to="/">Facilities</Link></li>
                        <li><Link to="/customers"> Customers</Link></li>
                        <li><Link to="/contracts">Contracts</Link></li>                 
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <h3>News letter</h3>
                     <form className="bottom_form">
                        <input className="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                        <button className="sub_btn">subscribe</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      </footer>
    </div>
  );
}
