import axios from 'axios';
import jwt from 'jwt-decode';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export const createOrGetUser = async (response) =>{
    const decoded = jwt(response.credential);
    const {name, picture, sub} = decoded;
    
    const user = {
        _id: sub,
        _type: 'user',
        userName: name,
        imageUrl: picture
    }
    await axios.post(`http://localhost:3000/api/auth`, user);
};