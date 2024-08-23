import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff' }} className="">
      <div className="container">
        <footer className="pt-5">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">Features</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">FAQs</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">About</a>
            </li>
          </ul>
        </footer>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top border-light">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <span className="mb-md-0 text-white">&copy; 2024 Company, Inc</span>
          </div>
          <ul className="nav mb-3 col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-white" href="#">
                <FaTwitter size={28} />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-white" href="#">
                <FaInstagram size={28} />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-white" href="#">
                <FaFacebook size={28} />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
