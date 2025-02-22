import { toastMessageHandler } from '@/shared/utils'
import { type TypeResetPasswordSchema } from '../schemes'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { type ResponseError } from '@/shared/types'
import { passwordRecoveryService } from '../services'

export function useResetPasswordMutation() {
  const { mutate: resetPassword, isPending } = useMutation({
    mutationKey: ['reset password'],
    mutationFn: ({ values, recaptcha }: { values: TypeResetPasswordSchema; recaptcha: string }) =>
      passwordRecoveryService.resetPasssword(values, recaptcha),

    onSuccess() {
      toast.success('Проверьте почту', {
        description: 'На вашу почту отправлено письмо для сброса пароля',
      })
    },
    onError(error: ResponseError) {
      toastMessageHandler(error)
    },
  })

  return { resetPassword, isPending }
}
