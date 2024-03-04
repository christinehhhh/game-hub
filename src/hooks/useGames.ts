import { useQuery } from '@tanstack/react-query'
import { GameQuery } from '../App'
import { FetchResponse } from '../services/api-client'
import gameService, { Game } from '../services/game-service'

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = () =>
    gameService.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    })

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['posts', gameQuery],
    queryFn: fetchGames,
  })
}

export default useGames
