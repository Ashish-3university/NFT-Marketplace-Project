import React from "react";
import { FaWhatsapp, FaDiscord, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff' }} className="">
      <div className="container">
        <footer className="pt-5">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-white">Home</a>
            </li>
            <li className="nav-item">
              <a href="/marketplace" className="nav-link px-2 text-white">Marketplace</a>
            </li>
            <li className="nav-item">
              <a href="/create-nft" className="nav-link px-2 text-white">Crete NFT</a>
            </li>
            <li className="nav-item">
              <a href="https://3university.io" className="nav-link px-2 text-white">3.0 University</a>
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
            <span className="mb-md-0 text-white">&copy; 3.0 University, Inc</span>
          </div>
          <ul className="nav mb-3 col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
            <a href="https://discord.gg/yb83GAqFBQ" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={32} className="social-icon" />
          </a>
            </li>
            <li className="ms-3">
            <a href="https://chat.whatsapp.com/FSl4a1idtDIA50pYE1DBFF" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={32} className="social-icon" />
          </a>
            </li>
            <li className="ms-3">
            <a href="https://t.me/+uvxS3oxnYQsyZWQ1" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={32} className="social-icon" />
          </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
