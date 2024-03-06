import { useQuery } from '@tanstack/react-query'
import { Trailer } from '../entities/Trailer'
import ApiClient, { FetchResponse } from '../services/api-client'

const useTrailers = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`)

  const fetchTrailers = () => apiClient.getAll()

  return useQuery<FetchResponse<Trailer>>({
    queryKey: ['trailers', gameId],
    queryFn: fetchTrailers,
  })
}

export default useTrailers
