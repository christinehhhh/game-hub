import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import platforms from '../data/platforms'
import Platform from '../entities/Platform'
import ApiClient from '../services/api-client'

const apiClient = new ApiClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => {
  const fetchPlatforms = () => apiClient.getAll()

  return useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: ms('24h'),
    initialData: platforms,
  })
}

export default usePlatforms
