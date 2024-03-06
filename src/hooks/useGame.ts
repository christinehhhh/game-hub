import { useQuery } from '@tanstack/react-query'
import ApiClient from '../services/api-client'
import { Game } from '../services/game-service'

const apiClient = new ApiClient<Game>('/games')

const useGame = (slug: string) => {
  const fetchGameDescription = () => apiClient.get(slug)

  return useQuery<Game>({
    queryKey: ['game-description', slug],
    queryFn: fetchGameDescription,
  })
}

export default useGame
