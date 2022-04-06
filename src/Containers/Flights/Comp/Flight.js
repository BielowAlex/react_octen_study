import React from 'react';
import './Flight.css'

const Flight = ({flight}) => {
    const {mission_name,launch_year, links} = flight;
    return (
        <div className={'flight'}>
            <img src={links.mission_patch_small} alt="mission_patch"/>
            <h2>{mission_name} Year:{launch_year}</h2>
        </div>
    );
};

export default Flight;
