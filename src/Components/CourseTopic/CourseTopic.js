import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const CourseTopic = () => {
    const courseTopic = useLoaderData()
    return (
        <div className='grid grid-cols-2 gap-10  '>
        
           {
            courseTopic.map(topic=><SingleCourse
            key={topic.id}
            topic = {topic}
            ></SingleCourse>)
           }
           
        </div>
    );
};

export default CourseTopic;