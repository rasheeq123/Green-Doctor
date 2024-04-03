import { Tooltip } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* Site footer */}
      <footer className="site-footer mt-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>Green Doctor</h6>
              <p className="text-justify">
                Web Based Solution to identify and solve disease in
                plants/crops. Provides tailored treatment plans and proactive
                measures to combat plant disease.Designed for urban farmers,
                farmers and amateur gardener to protect their crops/plants and
                boost production.
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="/main/home">Home</a>
                </li>
                <li>
                  <a href="/user/dashboard">Prediction</a>
                </li>
                <li>
                  <a href="/user/profile">Diagnosis</a>
                </li>
                <li>
                  <a href="/user/dashboard">Messages</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3 ">
              <Tooltip title="Green Doctor Logo" arrow>
                <img
                  src="/images/GD_Logo-.png"
                  alt="Logo"
                  style={{ marginRight: "0px", maxHeight: "120px" }}
                />
              </Tooltip>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright © 2023 All Rights Reserved by
                <a href="/"> Green Doctor</a>.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    className="github"
                    href="https://github.com/omkarsharma2821/Green-Doctor"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="https://instagram.com/omkarsharmaa_"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/omkarsharmaa/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
