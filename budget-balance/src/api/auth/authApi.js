import axios from "axios";

const baseUrl = "http://localhost:5000";

export const createUser = (user) => {
  return axios.post(`${baseUrl}/users/register`, user);
};
