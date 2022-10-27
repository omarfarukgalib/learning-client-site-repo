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
        
    

  
                    
<div className="navbar bg-primary">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl">
      <img src={logo} alt="" />
    </Link>
    
    <li className='font-semibold list-none'><Link to="/" className='rounded p-3 mx-3 bg-white'>Courses</Link></li>
      <li className='font-semibold list-none'><Link to="/faq" className='rounded p-3 mx-3 bg-white'>FAQ</Link></li>
      <li className='font-semibold list-none'><Link to="/blog" className='rounded p-3 first-line:mx-3 bg-white'>Blog</Link></li>
      <li className='font-semibold list-none'><Link to="/" className='rounded p-3 mx-3 bg-white'>Themes</Link></li>
      

      {user?.email?<button onClick={logOut}>logout</button>:
      
     <>
      <li className='font-semibold list-none'><Link to="/login" className='p-3 rounded mx-8 bg-white'>Login</Link></li>
      <li className='font-semibold list-none'><Link to="/" className='p-3 rounded mx-3 bg-white'>logout</Link></li>
      <li className='font-semibold list-none'><Link to="/Register" className='p-3 rounded mx-8 bg-white'>Register</Link></li>
     </>}
  </div>
  <div>
    
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
     
        <li>
          <Link className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link>Settings</Link></li>
        <li><Link>Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
  


    );
};

export default Header;



{/* <nav>
<div className="navbar bg-primary p-4">
  <div className="flex-1">
    <img src={logo} alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0 font-semibold ">
      <li><Link to="/" className='mx-3 bg-white'>Courses</Link></li>
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
</nav> */}