import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

// USERS
export const getUsers = () => API.get("/users");
export const addUser = (data) => API.post("/users", data);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/${id}`);

// REQUESTS
export const getRequests = () => API.get("/requests");
export const addRequest = (data) => API.post("/requests", data);
export const updateRequest = (id, data) =>
  API.put(`/requests/${id}`, data);
export const deleteRequest = (id) =>
  API.delete(`/requests/${id}`);

export default API;