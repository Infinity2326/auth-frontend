import api from './instance'

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Api error:', error)
    return Promise.reject(error)
  },
)
