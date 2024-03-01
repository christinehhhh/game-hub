import axios from 'axios'

export interface FetchResponse<T> {
  count: number
  results: T[]
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '406a1ec0d3384f67b8819431e0342c79',
  },
})
