import { ResponseError } from '@/shared/types/api.types'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { toastMessageHandler } from '@/shared/utils'

import { TypeSettingsSchema } from '../schemes'
import { userService } from '../services'

export function useUpdateProfileMutation() {
  const { mutate: updateProfile, isPending } = useMutation({
    mutationKey: ['update profile'],
    mutationFn: (data: TypeSettingsSchema) => userService.updateProfile(data),
    onSuccess() {
      toast.success('Профиль успешно обновлён')
    },
    onError(error: ResponseError) {
      toastMessageHandler(error)
    },
  })

  return { updateProfile, isPending }
}
