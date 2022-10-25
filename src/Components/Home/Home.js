import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <p>home page</p>
           
        </div>
    );
};

export default Home;