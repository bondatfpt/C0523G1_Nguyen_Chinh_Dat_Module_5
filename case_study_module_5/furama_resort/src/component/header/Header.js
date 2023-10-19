import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Header() {
  return (
    <div>
       <header>
         <div className="header">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo">
                              <a href="facilities.html"><img src="/images/logo.png" alt="#"/></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                 <a className="nav-link" href="/facilities.html">Facilities</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="customers.html">Customers</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="contract.html">Contracts</a>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
    </div>
  );
}
