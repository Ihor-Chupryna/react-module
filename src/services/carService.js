import { axiosService } from "./axiosService";
import { urls } from "../configs";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars, car),
    update: (id, car) => axiosService.put(urls.carById(id), car),
    delete: (id) => axiosService.delete(urls.carById(id))
}

export { carService }