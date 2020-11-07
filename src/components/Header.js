import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
        <nav className="main-nav nav">
          <ul className="mx-auto p-0">
            <li className="list-inline-item m-4">
              <Link to="/">HOME</Link>
              {/* <a href="index.html">HOME</a> */}
            </li>
            <li className="list-inline-item m-4">
              <Link to="/Store">STORE</Link>
              {/* <a href="store.html">STORE</a> */}
            </li>
            <li className="list-inline-item m-4">
              <Link to="/About">ABOUT</Link>
              {/* <a href="about.html">ABOUT</a> */}
            </li>
          </ul>
        </nav>
        <h1 className="band-name band-name-large">Genesis CCTV</h1>
        {/* <div class="container fixed-top">
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="/Users/saatchi/Desktop/Ai/logo8.png" width="150" alt="Company Logo">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
              <div class="dropdown">
                  <a class="nav-link dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Security Camera Systems
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <a class="dropdown-item">1 Camera</a>
                    <a class="dropdown-item">2 Camera</a>
                    <a class="dropdown-item">3 Camera</a>
                    <a class="dropdown-item">4 Camera</a>
                    <a class="dropdown-item">5 Camera</a>
                    <a class="dropdown-item">6 Camera</a>
                    <a class="dropdown-item">6 Camera</a>
                    <a class="dropdown-item">8 Camera</a>
                  </div>
                </div>
          </li>
          <li class="nav-item">
              <div class="dropdown">
            <a class="nav-link dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Components</a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <a class="dropdown-item">1 Camera</a>
              <a class="dropdown-item">2 Camera</a>
              <a class="dropdown-item">3 Camera</a>
              <a class="dropdown-item">4 Camera</a>
              <a class="dropdown-item">5 Camera</a>
              <a class="dropdown-item">6 Camera</a>
              <a class="dropdown-item">6 Camera</a>
              <a class="dropdown-item">8 Camera</a> 
            </div>
          </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Request quote</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div> */}
      </header>
    );
  }
}
export default Header;
