import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.SERVER_URL as string,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
