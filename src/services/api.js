import axios from "axios";

const API_URL = "https://guesteauai-backend.onrender.com/api";

const API = axios.create({
  baseURL: `${API_URL}/recipes`,
});

export const generateRecipe = async (data) => {
  const response = await API.post("/generate", data);
  return response.data;
};
