import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">YouTube Clone</Link>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
      </div>

      {/* Profile Icon */}
      <div className="profile">U</div>
    </nav>
  );
}

export default Navbar;
