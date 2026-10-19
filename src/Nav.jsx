import React, { useState } from "react";
import "./Nav.css";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="/" className="logo">
          <span className="logo-mark">◆</span>
          <span>LAP</span>
          <b>X</b>
        </a>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <a href="#home" className="nav-link active">
            Home
            <span></span>
          </a>

          <a href="#laptops" className="nav-link">
            Laptops
            <span></span>
          </a>

          <a href="#about" className="nav-link">
            About
            <span></span>
          </a>

          <a href="#contact" className="nav-link">
            Contact
            <span></span>
          </a>
        </nav>

        <div className="nav-actions">

          
          <div className="search-box">
            <input
              type="text"
              placeholder="Search laptops..."
            />
            <FiSearch className="search-icon" />
          </div>

          <button className="icon-btn">
            <FiUser />
            <span className="tooltip">Account</span>
          </button>

          <button className="icon-btn cart-btn">
            <FiShoppingCart />
            <span className="cart-count">0</span>
            <span className="tooltip">Cart</span>
          </button>

          <button
            className="mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Nav;