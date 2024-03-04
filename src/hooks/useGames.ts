import { useInfiniteQuery } from '@tanstack/react-query'
import { GameQuery } from '../App'
import { FetchResponse } from '../services/api-client'
import gameService, { Game } from '../services/game-service'

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = ({ pageParam = 1 }) =>
    gameService.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    })

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['posts', gameQuery],
    queryFn: fetchGames,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
  })
}

export default useGames
