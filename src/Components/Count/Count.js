import React from 'react';

const Count = () => {
    return (
        <div className="mt-24 hidden">
        <div className="">
          <span className="countdown font-mono text-5xl">
            <span style={{"--value":15}}></span>
          </span>
          days
        </div> 
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{"--value":10}}></span>
          </span>
          hours
        </div> 
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{"--value":24}}></span>
          </span>
          min
        </div> 
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{"--value":39}}></span>
          </span>
          sec
        </div>
      </div>
    );
};

export default Count;