import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import platforms from '../data/platforms'
import platformService from '../services/platform-service'

const fetchPlatforms = () => platformService.getAll()

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: ms('24h'),
    initialData: platforms,
  })

export default usePlatforms
