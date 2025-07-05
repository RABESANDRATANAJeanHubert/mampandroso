import axios from 'axios';
import { API_BASE_URL } from './config/env';
export const shortenUrl = async (longUrl) => {
  const response = await axios.post(`${API_BASE_URL}/url`, { longUrl });
  return response.data;
};