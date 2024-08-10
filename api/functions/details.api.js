import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const GetLandingPageDetails = async (id)=> {
  try {
    const response = await axiosInstance.get(`${endPoints.cms.details}/${id}`);
    if (!response) throw new Error("Network response was not ok");

    return response?.data?.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};