import { useQuery } from '@tanstack/react-query'
import genres from '../data/genres'
import genreService from '../services/genre-service'

const fetchGenres = () => genreService.getAll()

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  })

export default useGenres
