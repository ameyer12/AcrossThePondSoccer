import React from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand navbar" href="/">Across the Pond Soccer</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarWithDropdown" aria-controls="navbarWithDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse show" id="navbarWithDropdown">
      <ul className="navbar-nav ms-md-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Top Scorers
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="/pltopscorers">Premier League</a></li>
            <li><a className="dropdown-item" href="/laligatopscorers">La Liga</a></li>
            <li><a className="dropdown-item" href="/bundesligatopscorers">Bundesliga</a></li>
            <li><a className="dropdown-item" href="/serieatopscorers">Serie A</a></li>
            <li><a className="dropdown-item" href="/ligue1topscorers">Ligue 1</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Top Assisters
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="/pltopassisters">Premier League</a></li>
            <li><a className="dropdown-item" href="/laligatopassisters">La Liga</a></li>
            <li><a className="dropdown-item" href="/bundesligatopassisters">Bundesliga</a></li>
            <li><a className="dropdown-item" href="/serieatopassisters">Serie A</a></li>
            <li><a className="dropdown-item" href="/ligue1topassisters">Ligue 1</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}


export default NavBar

