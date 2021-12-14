import { axiosInstance } from '../axios/axiosConfig';
import { SEARCH } from '../constants/urls';

export const searchByMovileTitle = async (title) => {
  try {
    const response = await axiosInstance.get(SEARCH, { params: { title } });
    return response;
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};
