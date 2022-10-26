import React from 'react';
import logo1 from '../../images/software-development.png'
import logo2 from '../../images/apache.jpeg'
import logo3 from '../../images/minimalist-design.jpg'
import logo4 from '../../images/python.jpg' 
import logo5 from '../../images/robotics.jpg'
import logo6 from '../../images/virtual.jpg'
const Courses = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
    
    <div className='grid grid-cols-2 gap-2  px-5 '>
    <div>
        <div className='mt-2 font-bold text-orange-700'>
            <p className=''>software development</p>
        <img className="mt-2 rounded-xl" src={logo1} alt="" />
        </div>
        <div className='mt-2 font-bold text-orange-700'>
            <p>apche</p>
        <div className='font-semibold'>
            <p></p>
            <div className='font-semibold'>
                <p></p>
                <img className=" rounded-xl mt-2" src={logo2} alt="" />
            </div>
        </div>
        </div>
        <div className='mt-2 font-bold text-orange-700'>
            <p>Minimalist Design</p>
            <img className="rounded-xl mt-2" src={logo3} alt="" />
        </div>
        </div>
        <div>
        <div className='mt-2 font-bold text-orange-700'>
            <p>Python Development</p>
            <img className="rounded-xl mt-2" src={logo4} alt="" />
        </div>
        <div className='mt-2 font-bold text-orange-700'>
            <p>Robotics Development</p>
            <img className="rounded-xl mt-2" src={logo5} alt="" />
        </div>
        <div className='mt-2 font-bold text-orange-700'>
            <p>Virtual Reality</p>
            <img className="rounded-xl mt-2" src={logo6} alt="" />
        </div>
        </div>
    </div>
    <div className="">
        
        </div>
    
    
</div>
    );
};

export default Courses;