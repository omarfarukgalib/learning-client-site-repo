import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Detail from '../Detail/Detail';


const CourseDetails = () => {
   const details = useLoaderData()
    return (
        <div>
            <Detail></Detail>
           
        </div>
    );
};

export default CourseDetails;