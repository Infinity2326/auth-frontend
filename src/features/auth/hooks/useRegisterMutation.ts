import { toastMessageHandler } from '@/shared/utils'
import { authService } from '../services'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { type TypeRegisterSchema } from './../schemes'
import { type ResponseError } from '@/shared/types'

export function useRegisterMutation() {
  const { mutate: register, isPending } = useMutation({
    mutationKey: ['register user'],
    mutationFn: ({ values, recaptcha }: { values: TypeRegisterSchema; recaptcha: string }) =>
      authService.register(values, recaptcha),
    onSuccess() {
      toast.success('Вы успешно зарегистрировались', {
        description: 'Проверьте вашу почту для подтверждения аккаунта',
      })
    },
    onError(error: ResponseError) {
      toastMessageHandler(error)
    },
  })

  return { register, isPending }
}
