import {axiosServices} from "./axios_services";
import {urls} from "../Constants";

const postServices = {
    getAll:()=>axiosServices.get(urls.posts),
    getByID:(id)=>axiosServices.get(`${urls.posts}/${id}`),

}

export {postServices};