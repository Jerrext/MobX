import axios from "axios";
import { PostsList } from "../types";

const API_URL = "https://jsonplaceholder.typicode.com";

const apiAxios = axios.create({ baseURL: API_URL });

const getPostsRequest = async () => {
  return (await axios.get<PostsList>("https://jsonplaceholder.typicode.com/posts")).data;
  // return apiAxios.get("/posts");
};

export default { getPostsRequest };
