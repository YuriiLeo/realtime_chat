import React from 'react';

const InfoBar = ({ name }) => (
    <div className="flex items-center justify-between bg-blue-500 rounded-t-md h-16 w-full">
        <div className="flex items-center flex-1 ml-5 text-white">
            <h3>{name}</h3>
        </div>
    </div>

);

export default InfoBar;