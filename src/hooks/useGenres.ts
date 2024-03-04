import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import genres from '../data/genres'
import genreService from '../services/genre-service'

const fetchGenres = () => genreService.getAll()

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: ms('24h'),
    initialData: genres,
  })

export default useGenres
