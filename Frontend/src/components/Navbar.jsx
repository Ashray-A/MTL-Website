// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="logo">Logo</div>
                <div className="menu-icon" onClick={toggleSidebar}>
                    &#9776; {/* Hamburger icon */}
                </div>
                <ul className={`nav-links`}>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about-us'><li>About</li></Link>
                    <Link to='/faq'><li>Faq</li></Link>
                    <Link to='/contact-us'><li>Contact</li></Link>
                    <Link to='/login'><li>Login</li></Link>
                    <Link to='/signup'><li>Sign Up</li></Link>
                </ul>
            </nav>
            <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <h2>Menu</h2>
                    <span className="close-icon" onClick={toggleSidebar}>&times;</span>
                </div>
                <ul className="sidebar-links">
                    <Link to='/'><li onClick={toggleSidebar}>Home</li></Link>
                    <Link to='/about-us'><li onClick={toggleSidebar}>About</li></Link>
                    <Link to='/faq'><li onClick={toggleSidebar}>Faq</li></Link>
                    <Link to='/contact-us'><li onClick={toggleSidebar}>Contact</li></Link>
                    <Link to='/login'><li>Login</li></Link>
                    <Link to='/signup'><li>Sign Up</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;