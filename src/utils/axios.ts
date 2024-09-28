import axios from "axios";

export const serverAxios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    transformRequest: () => {

    }
})