import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCourse = ({topic}) => {
    
    const {name,image,description,id,price,duration} = topic
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title justify-center">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className='justify-center font-semibold'>{description}</p>
          <div className="card-actions justify-center font-semibold">
            <div className="badge badge-outline bg-pink-600 text-white">Price: {price}</div> 
            <div className="badge badge-outline bg-pink-600 text-white">Time: {duration}</div>
          </div>
          <Link to={`/courses/${id}`}><button className='bg-pink-600 px-20 py-2 text-white font-semibold'>Details</button></Link>
        </div>
      </div>
    );
};

export default SingleCourse;