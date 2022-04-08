import axios from "axios";
import baseUrl from "../Constants/urls";

let axiosServices = axios.create({baseURL:baseUrl});

export {axiosServices};