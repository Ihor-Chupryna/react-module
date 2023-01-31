import { axiosRequest } from "../../utils/axiosConfig";
import { requestsLinks } from "../endpoints";

export const postsRequest = {
    getById: (postId) => axiosRequest.get(`${requestsLinks.post}/${postId}`)
}