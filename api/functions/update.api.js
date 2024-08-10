import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const update = async (payload) => {
  try {
    const response = await axiosInstance.post(
        endPoints.cms.update,
        payload,
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};