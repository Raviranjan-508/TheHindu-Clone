import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import nav from "../components/Navbar.module.css";
const Navbar = () => {
    const navigate = useNavigate();
    
  return (
      <div>
    <nav class="navbar bg-light fixed-top">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-start"   id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Close This Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      <Link to="/today" className='link dropdown-toggle'>TODAY'S PAPER</Link>
      <Link to="/news" className='link dropdown-toggle'>NEWS</Link>
      <Link to="/opinion" className='link dropdown-toggle'>OPINION</Link>
      <Link to="/buisness" className='link dropdown-toggle'>BUSINESS</Link>
      <Link to="/sport" className='link dropdown-toggle'>SPORT</Link>
      <Link to="/entertainment" className='link dropdown-toggle'>ENTERTAINMENT</Link>
      <Link to="/crossword" className='link dropdown-toggle'>
      CROSSWORD+
      </Link>
      
      <button className={nav.trial}  onClick={() => navigate("/trial")}>GET TRIAL</button>
      <button className={nav.subscribe}  onClick={() => navigate("/subscribe")}>SUBSCRIBE NOW</button>
      <button className={nav.login} onClick={() => navigate("/login")}>LOG IN</button>
      

    </div>
    <Link className='link' to='/today'>TRENDING TODAY</Link>
    <Link className='link' to='/today'>RUSSIA-UKRAINE CRISIS</Link>
     
  </nav>
  </div>
  )
}

export default Navbar