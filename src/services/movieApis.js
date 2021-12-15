import { axiosInstance } from '../axios/axiosConfig';
import { SERVER_URL } from '../constants/serverUrls';
import { MOVIES } from '../constants/urls';

export const getMovies = async () => {
  try {
    const response = await axiosInstance.get(SERVER_URL + MOVIES);
    return response;
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};
