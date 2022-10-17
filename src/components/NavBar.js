import React from 'react';
import { Link } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';
import "./Navbar.css";

const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-light">
      <Link to="/" className="navbar-brand flex-grow-1" >Across the Pond Soccer</Link>
      <Link to="/" className="navbar-text">Home</Link>
      <Link to="/topscorers" className="navbar-text">Top Scorers</Link>
      <Link to="/topassisters" className="navbar-text">Top Assisters</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarWithDropdown" aria-controls="navbarWithDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  )
}


export default NavBar

