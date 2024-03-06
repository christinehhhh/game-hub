import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import genres from '../data/genres'
import { Genre } from '../entities/Genre'
import ApiClient from '../services/api-client'

const apiClient = new ApiClient<Genre>('/genres')

const useGenres = () => {
  const fetchGenres = () => apiClient.getAll()

  useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: ms('24h'),
    initialData: genres,
  })
}

export default useGenres
