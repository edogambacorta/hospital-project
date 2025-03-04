import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className=footer>
      <div className=container>
        <div className=footer-content>
          <div className=footer-logo>
            <Link to=/>Hospital AI Tool</Link>
          </div>
          <div className=footer-links>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to=/features>Features</Link></li>
              <li><Link to=/how-it-works>How It Works</Link></li>
              <li><Link to=/resources>Resources</Link></li>
              <li><Link to=/contact>Contact</Link></li>
            </ul>
          </div>
          <div className=footer-social>
            <h4>Follow Us</h4>
            <ul>
              <li><a href=# target=_blank rel=noopener noreferrer>Facebook</a></li>
              <li><a href=# target=_blank rel=noopener noreferrer>Twitter</a></li>
              <li><a href=# target=_blank rel=noopener noreferrer>LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className=footer-bottom>
          <p>&copy; 2025 Hospital AI Tool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
