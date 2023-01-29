import { axiosService } from "./axiosService";
import { urls } from "../configs";

const todoService = {
    getAll: () => axiosService.get(urls.todos)
}

export { todoService }