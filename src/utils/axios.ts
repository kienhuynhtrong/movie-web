import axios from "axios";
const client = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: '97cfcf56efda1a3bf1923b8793630b7b' },
});
export default client;
