import { useQuery } from '@tanstack/react-query'
import Game from '../entities/Game'
import ApiClient from '../services/api-client'

const apiClient = new ApiClient<Game>('/games')

const useGame = (slug: string) => {
  const fetchGameDescription = () => apiClient.get(slug)

  return useQuery<Game>({
    queryKey: ['game-description', slug],
    queryFn: fetchGameDescription,
  })
}

export default useGame
