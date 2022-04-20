import {axiosServices} from "./axios_services";
import {urls} from "../Constants";

const carsServices = {
    getAll:()=>axiosServices.get(urls.cars),
    getByID:(id)=>axiosServices.get(`${urls.cars}/${id}`),
    newCar:(Car)=>axiosServices.post(urls.cars,Car),
    updateCar:(id, newCar)=>axiosServices.put(`${urls.cars}/${id}`, newCar),
    deleteCar:(id)=>axiosServices.delete(`${urls.cars}/${id}`)
}

export {carsServices};