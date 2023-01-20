import { axiosService } from "./axiosService";

const launchService = {
    allLaunches: () => axiosService.get('/launches/')
}

export {
    launchService
}