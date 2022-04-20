import './App.css';
import React, {useState} from "react";
import CarForm from "./сomponents/CarForm/CarForm";
import Cars from "./сomponents/Cars/Cars";


function App() {
    const [newCar, setNewCar] = useState(null);
    const [deletedCar, setDeletedCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate}/>
            <Cars newCar={newCar} deletedCar={deletedCar} setDeletedCar={setDeletedCar} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
}

export default App;
