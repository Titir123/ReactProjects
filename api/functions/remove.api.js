import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const removeProduct = async (productId) => {
  try {
    const response = await axiosInstance.post(
        endPoints.cms.remove,
        {id: productId}
    );
    return response?.data;
  } catch (error) {
    console.error('Error removing product:', error.response?.data || error.message);
    throw error;
  }
};