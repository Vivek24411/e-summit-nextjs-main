import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="/images/esummit-logo.png" alt="E-Summit 23" />
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#hi-res">Hi-Res</a>
          <a href="#benefits">Benefits</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact Us</a>
        </nav>
        
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Signup</button>
        </div>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}