import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Courses</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/themes">Themes</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;