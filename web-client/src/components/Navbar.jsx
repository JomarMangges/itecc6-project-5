import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🏋️ FitTrack</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/progress">Progress</Link></li>
        <li><Link to="/export">Export</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
