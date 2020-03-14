import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-section">
            <h1>React SPA Project</h1>
            <a href="/">Home</a>
            <a href="/profile">Profile</a>
            <a href="/friend-list">Friend List</a>
        </div>
    );
};

export default Header;