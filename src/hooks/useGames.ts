import { useInfiniteQuery } from '@tanstack/react-query'
import ms from 'ms'
import { FetchResponse } from '../services/api-client'
import gameService, { Game } from '../services/game-service'
import useGameQueryStore from '../store'

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery)

  const fetchGames = ({ pageParam = 1 }) =>
    gameService.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    })

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: fetchGames,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
    staleTime: ms('24h'),
  })
}

export default useGames
