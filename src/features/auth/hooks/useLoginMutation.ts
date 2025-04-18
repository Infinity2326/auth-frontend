import { toastMessageHandler } from '@/shared/utils'
import { authService } from '../services'
import { type TypeLoginSchema } from '../schemes'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { type ResponseError } from '@/shared/types'

export function useLoginMutation(
  setIsShowTwoFactor: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const router = useRouter()

  const {
    mutate: login,
    isPending,
    isError,
  } = useMutation({
    mutationKey: ['login user'],
    mutationFn: ({ values, recaptcha }: { values: TypeLoginSchema; recaptcha: string }) =>
      authService.login(values, recaptcha),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess(data: any) {
      if (data.message) {
        toastMessageHandler(data)
        setIsShowTwoFactor(true)
      } else {
        toast.success('Успешная авторизация')
        router.push('/dashboard/settings')
      }
    },
    onError(error: ResponseError) {
      toastMessageHandler(error)
    },
  })

  return { login, isPending, isError }
}
