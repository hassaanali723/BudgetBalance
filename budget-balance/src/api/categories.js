import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getCategories = async () => {
  try {
    const response = await axios.get(`${baseUrl}/categories`);
    if (response.data) {
      console.log(response);
    }
    return response.data;
  } catch (error) {
    throw new Error("Error");
  }
};

export const createCategory = async (category) => {
  try {
    const response = await axios.post(`${baseUrl}/categories`, category);
    return response.data;
  } catch (error) {
    throw new Error("Error");
  }
};
