import axios from 'axios'
const API = axios.create({
    baseURL: `http://localhost:5000/api`,
});


export const signIn = (formData) => API.post("/auth/login", formData);
export const signUp = (formData, profilePicture, coverPicture) => API.post("/auth/register", { formData, profilePicture, coverPicture });
export const getAllUsers = () => API.get("/users/getUsers/getAllUsers");
export const getUser = (id) => API.get(`/users/${id}`);
export const createPost = (formData) => API.post("/posts/", formData);
export const getAllPosts = (user) => API.post("/posts/timeline/all", user);
export const getAllPostsById = (userId) => API.get(`/posts/getAllPosts/${userId}`);
export const getAllTimelinePosts = (userId) => API.post(`posts/timeline/all`, userId)