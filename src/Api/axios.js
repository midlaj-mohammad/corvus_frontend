import axios from "axios";

export const AxiosInstanse = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL

});
