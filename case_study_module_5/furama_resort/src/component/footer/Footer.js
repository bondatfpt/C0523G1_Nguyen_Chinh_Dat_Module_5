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
                     <ul className="conta">
                        <li><i className="fa fa-map-marker" aria-hidden="true"></i> Address</li>
                        <li><i className="fa fa-mobile" aria-hidden="true"></i> +01 1234569540</li>
                        <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="#"> demo@gmail.com</a></li>
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
                     <ul className="social_icon">
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      </footer>
    </div>
  );
}
