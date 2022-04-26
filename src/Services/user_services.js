import {axiosServices} from "./axios_services";
import {urls} from "../Constants";

const userServices = {
    getAll:()=>axiosServices.get(urls.users),
    getByID:(id)=>axiosServices.get(`${urls.users}/${id}`),

}

export {userServices};