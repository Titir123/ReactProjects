import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const profileDetails = async () => {
  try {
    const response = await axiosInstance.get(
        endPoints.cms.profile, 
    );
    return response?.data?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};