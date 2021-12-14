import axios from 'axios';
import { SERVER_URL } from '../constants/serverUrls';

export const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 10000,
});
