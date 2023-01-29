import { axiosService } from "./axiosService";
import { urls } from "../configs";

const albumService = {
    getAll: () => axiosService.get(urls.albums)
}

export { albumService }