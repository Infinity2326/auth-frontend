import { toastMessageHandler } from '@/shared/utils'
import { type TypeNewPasswordSchema } from '../schemes'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { type ResponseError } from '@/shared/types'
import { passwordRecoveryService } from '../services'
import { useRouter, useSearchParams } from 'next/navigation'

export function useNewPasswordMutation() {
  const router = useRouter()

  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const { mutate: setNewPassword, isPending } = useMutation({
    mutationKey: ['set new password'],
    mutationFn: ({ values, recaptcha }: { values: TypeNewPasswordSchema; recaptcha: string }) =>
      passwordRecoveryService.setNewPassword(values, token, recaptcha),

    onSuccess() {
      toast.success('Пароль успешно изменен', {
        description: 'Теперь вы можете войти в аккаунт используя новый пароль',
      })
      router.push('/dashboard/setting')
    },
    onError(error: ResponseError) {
      toastMessageHandler(error)
    },
  })

  return { setNewPassword, isPending }
}
