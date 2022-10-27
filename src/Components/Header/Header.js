import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo (1).svg'
import { authContext } from '../Contexts/UserContext';
const Header = () => {
  const {user,logOut} = useContext(authContext)
  logOut()
  .then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    console.error(error)
  });
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
      

      {user?.email?<button onClick={logOut}>logout</button>:
      
     <>
      <li><Link to="/login" className='mx-8 bg-white'>Login</Link></li>
      <li><Link to="/" className='mx-3 bg-white'>logout</Link></li>
      <li><Link to="/Register" className='mx-8 bg-white'>Register</Link></li>
     </>}
     
      
    </ul>
    </div>
    </div>
</nav>
  
                    
 
  


    );
};

export default Header;