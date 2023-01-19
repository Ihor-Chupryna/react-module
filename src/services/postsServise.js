import {axiosService} from "./axiosService";

export const postsService = {
    getByUserId: (id) => axiosService.get(`/users/${id}/posts`)
}