import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const productList = async () => {
  try {
    const response = await axiosInstance.post(endPoints.cms.list);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};