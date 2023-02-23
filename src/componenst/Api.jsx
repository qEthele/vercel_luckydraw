import axios from "axios";

const apiUrl = "https://api-honda-new.vercel.app";
// const apiUrl = "http://localhost:4000";

export const Api = axios.create({ baseURL: apiUrl });
