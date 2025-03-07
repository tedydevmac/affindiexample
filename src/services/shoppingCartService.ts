import axios from "axios";

const API_URL = "http://localhost:3000/api/cart";

export const getItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    alert("Error fetching items: " + error); // Log any error
    throw error;
  }
};

export const addItem = async (item: {
  id: number;
  title: string;
  description: string;
  price: string;
  quantity: number;
  image: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/add`, item);
    return response.data;
  } catch (error) {
    alert("Error adding item: " + error); // Log any error
    throw error;
  }
};

export const removeItem = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/remove/${id}`);
    return response.data;
  } catch (error) {
    alert("Error removing item:" + error); // Log any error
    throw error;
  }
};
export const updateItem = async (
  id: number,
  updateData: {
    title?: string;
    description?: string;
    price?: string;
    quantity?: number;
    image?: string;
  }
) => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, updateData);
    return response.data;
  } catch (error) {
    alert("Error updating item: " + error); // Log any error
    throw error;
  }
};
