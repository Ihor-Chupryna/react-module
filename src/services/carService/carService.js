import { axiosService } from "../axoisService/axiosService";
import { urls } from "../../configs";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (newCar) => axiosService.post(urls.cars, newCar),
    updateById: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export { carService }