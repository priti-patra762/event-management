import React from "react";
import { MdWifiCalling3 } from "react-icons/md";
import { Link } from "react-router-dom";



function Header() {
  return (
    <nav className="navbar navbar-expand-lg  transparent-navbar fixed-top custom-nav py-0">
      <div className="container-fluid" style={{ background: "#fff", height: "100%" }}>

        <a className="navbar-brand" href="#">
          Navbar
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="btn" to="/" >HOME</Link>
            </li>



            <ul className=" navbar-nav">
              <li className="nav-item dropdown  hover-dropdown">
                <Link to="/about" className="nav-link dropdown-toggle" role="button">
                  ABOUT
                </Link>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li><Link className="dropdown-item" to="/blog">Blogs by Melodia</Link></li>
                  <li><Link className="dropdown-item" to="/testmonial">Testimonials</Link></li>
                </ul>
              </li>
            </ul>






            <li className="nav-item dropdown hover-dropdown">
              <a className="nav-link dropdown-toggle" role="button">
                SERVICES
              </a>
              <ul className="dropdown-menu dropdown-menu-light">
                <li><Link className="dropdown-item" to="/wedding-planners">Wedding Planners</Link></li>
                <li><Link className="dropdown-item" to="/destination-wedding-kerala">Destination Wedding in Kerala</Link></li>
                <li><Link className="dropdown-item" to="/corporate-events">Corporate Event Management</Link></li>
                <li><Link className="dropdown-item" to="/photography">Photography & Videography</Link></li>
                <li><Link className="dropdown-item" to="/catering">Catering Service</Link></li>
                <li><Link className="dropdown-item" to="/beach-wedding">Beach Wedding</Link></li>


              </ul>
            </li>


            <li className="nav-item">
              <Link to="/venues" className="nav-link " role="button">
                VENUES
              </Link>
            </li>




            <li className="nav-item dropdown hover-dropdown">
              <a href="#" className="nav-link dropdown-toggle" role="button">
                GALLERY
              </a>
              <ul className="dropdown-menu dropdown-menu-light">

                <li><Link className="dropdown-item" to="/photos">Photo Gallery</Link></li>
                <li><Link className="dropdown-item" to="/video">Video Gallery</Link></li>


              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link toggle" role="button">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>


        <a href="tel:+918590010011" className="custom-btn text-white d-none d-lg-block">
          <MdWifiCalling3 /> +91-859-001-0011
        </a>
      </div>
    </nav>
  );
}

export default Header;   