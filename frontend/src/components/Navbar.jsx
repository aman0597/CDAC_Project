import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; 

const NavbarWrapper = styled.nav`
  background-color: #000000; /* Dark black background color */
  .navbar-brand {
    color: #f8f9fa; /* Off-white text color */
    text-decoration: none;
    display: flex;
    align-items: center;
    &:hover {
      text-decoration: underline;
    }
    img {
      max-height: 40px; /* Adjust the size as needed */
      width: auto; /* Maintain aspect ratio */
      margin-right: 10px; /* Spacing between logo and text */
    }
  }
  .navbar-nav .nav-link {
    color: #f8f9fa; /* Off-white text color */
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Daffodils Security System" />
          <span>Daffodils Security System</span> 
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dashboard</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entry">Daffodils Portal</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Login
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><Link className="dropdown-item" to="/visitor-login">Visitor Login</Link></li>
                  <li><Link className="dropdown-item" to="/society-member-login">Society Member Login</Link></li>
                  <li><Link className="dropdown-item" to="/watchman-login">Watchman Login</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
