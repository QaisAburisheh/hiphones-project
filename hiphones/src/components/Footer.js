import React from "react";
import MyLogo from "../logo-white.png";

const Footer = () => {
  return (
    <footer expand="lg" className="page-footer font-small blue pt-4 footer">
      <div className="container-fluid text-center text-md-left">
        <div className="row d-flex justify-content-around">
          <div className="col-md-4 mt-md-0 mt-3">
            <img className="footer--logo" src={MyLogo} alt="" />
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-4 mb-md-0 mb-3">
            <h5>HiPhones</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="footer-href">
                  About
                </a>
              </li>
              <li>
                <a href="#!" className="footer-href">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" className="footer-href">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-md-0 mb-3">
            <h5>Download</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="footer-href">
                  HiPhones App(IOS)
                </a>
              </li>
              <li>
                <a href="#!" className="footer-href">
                  HiPhone App (Android )
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copyright text-center py-3">
        © 2023 Copyright:
        <a href="#" className="footer--website-link">
          {" "}
          hi-phones.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
