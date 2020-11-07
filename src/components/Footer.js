import React, { Component } from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="container main-footer-container">
          <h3 className="band-name">Genesis CCTV</h3>
          <ul className="nav footer-nav">
            <li>
              <a href="https://www.youtube.com" target="_blank">
                <img src="/image/YouTube Logo.png" />
              </a>
            </li>
            <li>
              <a href="https://www.spotify.com" target="_blank">
                <img src="/image/Spotify Logo.png" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <img src="/image/Facebook Logo.png" />
              </a>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img src="/image/logo8.png" width={100} alt="Company Logo" />
            </div>
            <div className="col-8 pt-3">
              <p>
                © 2020 Genesis CCTV Ltd. All Rights Reserved | privacy Policy
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
