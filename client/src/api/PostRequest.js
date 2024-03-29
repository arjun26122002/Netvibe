import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//       req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
  
//     return req;
//   });

export const getTimelinePosts= (id)=> API.get(`/posts/${id}/timeline`);
// Change this line
export const likedPost = (id, userId) => API.put(`/posts/${id}/like`, { userId: userId });
