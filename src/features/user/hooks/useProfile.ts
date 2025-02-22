import { useQuery } from '@tanstack/react-query'
import { userService } from '../services'

export function useProfile() {
  const { data: user, isPending } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userService.findProfile(),
  })

  return { user, isPending }
}
