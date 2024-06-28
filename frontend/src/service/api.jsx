import axios from "axios";

// const API_URL = "http://localhost:8000";
const API_URL = import.meta.env.VITE_BACKEND_URL;

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, data); // data is the payload here
    return response.data;
  } catch (error) {
    console.log(
      "Error while calling the upload method",
      error.response ? error.response.data : error.message
    );
  }
};
