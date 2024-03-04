import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
  count: number
  next?: string | null
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '406a1ec0d3384f67b8819431e0342c79',
  },
})

class ApiClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data)
  }
}

export default ApiClient
