import axios from 'axios'

const requestAxios = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || 'https://api.example.com',
  timeout: 10000,
})

requestAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

requestAxios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error('Unauthorized: Please log in again.')
      } else if (error.response.status === 403) {
        console.error('Forbidden: You do not have access to this resource.')
      }
    }
    return Promise.reject(error)
  },
)

export default requestAxios
