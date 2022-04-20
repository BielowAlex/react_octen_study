import React, {useEffect, useState} from 'react';
import {carsServices} from "../../Services";
import Car from "../Car/Car";

const Cars = ({newCar,deletedCar,setDeletedCar,setCarForUpdate}) => {
    const [cars, setCars] = useState([]);


    useEffect(() => {
        carsServices.getAll().then(({data}) => setCars(data));

    }, [deletedCar,newCar])



    return (
        <div>
            {cars && cars.map(car => <Car key={car.id} car={car} setDeleteCar={setDeletedCar} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;
