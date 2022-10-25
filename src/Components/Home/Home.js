import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <p>home page{topics.length}</p>
           
        </div>
    );
};

export default Home;