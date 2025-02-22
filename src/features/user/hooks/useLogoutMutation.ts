import { useMutation } from '@tanstack/react-query'
import { authService } from '@/features/auth/services'
import { toastMessageHandler } from '@/shared/utils'
import { ResponseError } from '@/shared/types'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export function useLogoutMutation() {
  const router = useRouter()

  const { mutate: logout, isPending } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess() {
      toast.success('Вы вышли из аккаунта')
      router.push('/auth/login')
    },
    onError(error: ResponseError) {
      toastMessageHandler(error)
    },
  })

  return { logout, isPending }
}
