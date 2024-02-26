import platforms from '../data/platforms'
import useData from './useData'

interface Platform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () => ({ data: platforms, isLading: false, error: null })

export default usePlatforms
