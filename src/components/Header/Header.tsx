import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className=header>
      <div className=container>
        <Link to=/ className=logo>Hospital AI Tool</Link>
        <nav>
          <ul>
            <li><Link to=/features>Features</Link></li>
            <li><Link to=/how-it-works>How It Works</Link></li>
            <li><Link to=/resources>Resources</Link></li>
            <li><Link to=/contact>Contact</Link></li>
          </ul>
        </nav>
        <Link to=/contact className=btn btn-primary>Get Started</Link>
      </div>
    </header>
  );
};

export default Header;
