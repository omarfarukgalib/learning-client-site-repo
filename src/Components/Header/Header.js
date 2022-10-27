import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo (1).svg'
const Header = () => {
    return (
        
    
<nav>
<div className="navbar bg-primary p-4">
  <div className="flex-1">
    <img src={logo} alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0 font-semibold ">
      <li><Link to="/courses" className='mx-3 bg-white'>Courses</Link></li>
      <li><Link to="/faq" className='mx-3 bg-white'>FAQ</Link></li>
      <li><Link to="/blog" className='mx-3 bg-white'>Blog</Link></li>
      <li><Link to="/" className='mx-3 bg-white'>Themes</Link></li>
      <li><Link to="/login" className='mx-8 bg-white'>Login</Link></li>
      <li><Link to="/register" className='mx-8 bg-white'>Register</Link></li>
    </ul>
    </div>
    </div>
</nav>
  
                    
 
  


    );
};

export default Header;