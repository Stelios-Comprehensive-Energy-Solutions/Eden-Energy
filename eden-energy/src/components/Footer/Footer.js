// src/components/Footer/Footer.js

import React from 'react';
import './Footer.css';
import Logo from '../Logo/Logo'; // Import the SVG

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <Logo />
                </div>
                <nav className="footer-links" aria-label="Footer Navigation">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="footer-social">
                    <a href="#"><img src="/path_to_facebook_icon.png" alt="Facebook" /></a>
                    <a href="#"><img src="/path_to_twitter_icon.png" alt="Twitter" /></a>
                    {/* ... other social media icons ... */}
                </div>
                <address className="footer-contact">
                    <p>Stelios Comprehensive Energy Solutions Pty (Ltd t/a Eden-Energy)</p>
                    <p>Based in George, South Africa</p>
                    <p>Email: <a href="mailto:your_email@example.com">your_email@example.com</a></p>
                    <p>Phone: <a href="tel:+27-XX-XXX-XXXX">+27-XX-XXX-XXXX</a></p>
                </address>
            </div>
            {/* Back-to-Top Button */}
            <button id="backToTop" title="Go to top">Top</button>
        </footer>
    );
}

export default Footer;
