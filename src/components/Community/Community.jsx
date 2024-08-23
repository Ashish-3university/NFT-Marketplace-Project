import React from 'react';
import './Community.css';
import { FaWhatsapp, FaInstagram, FaDiscord, FaTwitter, FaTelegram, FaLinkedin } from 'react-icons/fa';

const Community = () => {
  return (
    <section className="join-for-free-section">
      <div className="container join-container text-center py-5">
        <h2 className="join-title mb-3">Join for free today.</h2>
        <p className="join-subtitle mb-4">Supercharge your team with the best sales acceleration and business automation tools.</p>
        <form className="join-form d-flex justify-content-center mb-4">
          <input type="email" className="form-control me-2" placeholder="Enter your business email" required />
          <button type="submit" className="btn btn-primary">Join Now</button>
        </form>
        <div className="social-icons d-flex justify-content-center gap-3">
          <a href="https://chat.whatsapp.com/FSl4a1idtDIA50pYE1DBFF" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={32} className="social-icon" />
          </a>
          <a href="https://www.instagram.com/real3uni/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} className="social-icon" />
          </a>
          <a href="https://discord.gg/yb83GAqFBQ" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={32} className="social-icon" />
          </a>
          <a href="https://x.com/real3uni" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={32} className="social-icon" />
          </a>
          <a href="https://t.me/+uvxS3oxnYQsyZWQ1" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={32} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/real3uni/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
