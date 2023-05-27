import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})


export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => axios.post('/posts', newPost);
export const updatePost = (id, updatedPost) => axios.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`/posts/${id}`);
export const likePost = (id) => axios.patch(`/posts/${id}/likePost`);

export const signin = (formData) => API.post('/user/signin', formData);
export const signup = (formData) => API.post('/user/signup', formData);