import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Car.css';
import {faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {carsServices} from "../../Services";

const Car = ({car, setDeleteCar,setCarForUpdate}) => {
    const {id, model, price, year} = car;

    const deleteCar = async (id) => {
        await carsServices.deleteCar(id);
        setDeleteCar(id)
    }
    const setUpdateCar = async (id) => {
        const {data} = await carsServices.getByID(id);
        setCarForUpdate(data)
    }
    return (
        <div className="car_info">
            <h2>ID:{id}</h2>
            <h2>Model:{model}</h2>
            <h2>Price:{price}</h2>
            <h2>Year:{year}</h2>
            <div className="update_car_info">
                <div className="btn" onClick={() => deleteCar(id)}><FontAwesomeIcon icon={faTrashCan}/></div>
                <div className="btn" onClick={()=>setUpdateCar(id)}><FontAwesomeIcon icon={faPenToSquare}/></div>
            </div>
        </div>
    );
};

export default Car;
