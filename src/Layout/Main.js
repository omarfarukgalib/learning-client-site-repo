import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import logo from '../logo (1).svg'
const Main = () => {
    return (
        <div>
            <nav>
            <div className="navbar bg-primary p-4">
  <div className="flex-1">
    <img src={logo} alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0 font-semibold ">
      <li><Link className='mx-3 bg-white'>Courses</Link></li>
      <li><Link className='mx-3 bg-white'>FAQ</Link></li>
      <li><Link className='mx-3 bg-white'>Blog</Link></li>
      <li><Link className='mx-3 bg-white'>Themes</Link></li>
      <li><Link className='mx-8 bg-white'>Login</Link></li>
    </ul>
  </div>
</div>

            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;