import axios from "axios";

const baseUrl = "http://localhost:5000";

export const createUser = async (user) => {
  try {
    const response = await axios.post(`${baseUrl}/users/register`, user);
    return response.data;
  } catch (error) {
    throw new Error("Registration Error");
  }
};
export const getUser = async (user) => {
  try {
    const response = await axios.post(`${baseUrl}/users/login`, user);
    if (response.data.AccessToken) {
      localStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.AccessToken)
      );
    }
    return response.data;
  } catch (error) {
    throw new Error("Login Error");
  }
};
