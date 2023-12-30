import axios from "axios";

const API_URL = "/api/tasks";

export const getTasks = () => {
  return axios.get(API_URL);
};

export const addTask = (taskData) => {
  return axios.post(API_URL, taskData);
};

export const updateTask = (taskId, updatedData) => {
  return axios.put(`${API_URL}/${taskId}`, updatedData);
};

export const deleteTask = (taskId) => {
  return axios.delete(`${API_URL}/${taskId}`);
};
