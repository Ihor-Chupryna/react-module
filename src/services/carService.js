import { axiosService } from "./axiosService";

import { urls } from "../configs";

const carService = {
    getAll: (numberPage = 1) => axiosService.get(urls.cars, { params: { page: numberPage } }),
    create: (car) => axiosService.post(urls.cars, car),
    update: (id, car) => axiosService.put(urls.carById(id), car),
    delete: (id) => axiosService.delete(urls.carById(id))
}

export { carService }