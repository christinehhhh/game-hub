import { useQuery } from '@tanstack/react-query'
import Screenshot from '../entities/Screenshot'
import ApiClient, { FetchResponse } from '../services/api-client'

const useScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`)

  const fetchScreenshots = () => apiClient.getAll()

  return useQuery<FetchResponse<Screenshot>>({
    queryKey: ['screenshots', gameId],
    queryFn: fetchScreenshots,
  })
}

export default useScreenshots
