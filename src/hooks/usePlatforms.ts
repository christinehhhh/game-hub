import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import platformService from '../services/platform-service'

const fetchPlatforms = () => platformService.getAll()

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  })

export default usePlatforms
