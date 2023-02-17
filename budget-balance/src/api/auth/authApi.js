import axios from "axios";

const baseUrl = "http://localhost:5000";

export const createUser = (user) => {
  return axios.post(`${baseUrl}/users/register`, user);
};

export const getUser = async (user) => {
  try {
    const response = await axios.post(`${baseUrl}/users/login`, user);
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
}