import axios from "axios";

const apiUrl = "https://api-honda.onrender.com";
// const apiUrl = "http://localhost:4000";

export const Api = axios.create({ baseURL: apiUrl });
