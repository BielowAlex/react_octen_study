import React, {useEffect, useState} from 'react';

import Flight from "./Comp/Flight";


const Flights = () => {
    const [flights, setFlights] = useState([]);
    let tre = true;
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setFlights(value));
    }, []);
    return (
        <div>
            {/* eslint-disable-next-line array-callback-return */}
            {flights.map(flight => {
                if (flight.launch_year !== "2020") {
                    return <Flight key={flight.mission_name} flight={flight}/>;
                }
            })}
        </div>
    );
};

export default Flights;
