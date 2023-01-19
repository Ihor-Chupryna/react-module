import axios from "axios";

export const axiosService = axios.create({baseURL: 'https://api.spacexdata.com/v3'});