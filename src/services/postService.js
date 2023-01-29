import { axiosService } from "./axiosService";
import { urls } from "../configs";

const postService = {
    postByComment: (postId) => axiosService.get(`${urls.posts}/${postId}`)
}

export { postService }