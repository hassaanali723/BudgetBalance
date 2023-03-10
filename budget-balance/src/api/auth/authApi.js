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

export const createAccount = async (account) => {
  try {
    const response = await axios.post(`${baseUrl}/accounts`, account);
    return response.data.data;
  } catch (error) {
    throw new Error("Error");
  }
};

export const fetchAccounts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/accounts`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error("Error");
  }
};

export const deleteAccount = (id) => {
  axios.delete(`${baseUrl}/accounts/${id}`)
    .then((response) => {
      console.log(response.data.message);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}