import axiosDefault from 'axios';

export const axiosInstance = axiosDefault.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});