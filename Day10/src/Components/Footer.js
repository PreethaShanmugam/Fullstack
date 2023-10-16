import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <h4 className="footer-heading">Legal</h4>
          <li className="footer-list-item">
            <Link to="/privacy" className="footer-link">
              Privacy policy
            </Link>
          </li>
          <li className="footer-list-item">
            <Link to="/Terms" className="footer-link">
              Terms and conditions
            </Link>
          </li>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li className="footer-list-item">
              <Link to="/Aboutt" className="footer-link">
                About us
              </Link>
            </li>
            <li className="footer-list-item">
              <Link to="/contact" className="footer-link">
                Contact us
              </Link>
            </li>
            <li className="footer-list-item">
              <Link to="/faq" className="footer-link">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Connect withus</h4>
          <ul className="social-icons">
            <li className="social-icons-item">
              <a href="https://www.facebook.com" className="social-icon-link facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="social-icons-item">
              <a href="https://www.instagram.com/?hl=en" className="social-icon-link instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="social-icons-item">
              <a href="https://twitter.com/" className="social-icon-link twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="social-icons-item">
              <a href="https://github.com/" className="social-icon-link github">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">© 2023 All Rights Reserved</p>
    </footer>
  );
}
