import { useState } from "react";
import "./Navbar.css"; // We'll create this CSS file

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleButton = () => {
        setIsOpen(!isOpen);
    }
    
    return(
        <nav className="navbar-container">
            <div className="navbar">
              <h1 className="logo">silent_debugger</h1>
              
              <button 
                onClick={toggleButton} 
                className={`hamburger ${isOpen ? 'active' : ''}`}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              
              <ul className={`nav-links ${isOpen ? 'mobile-menu-open' : ''}`}>
                <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                <li><a href="#services" onClick={() => setIsOpen(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
              </ul>
            </div>
        </nav>
    )
}

export default Navbar;