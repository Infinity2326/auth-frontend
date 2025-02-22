import { toast } from 'sonner'
import { type ResponseError } from '@/shared/types'

export function toastMessageHandler(error: ResponseError) {
  if (error.response?.data?.message) {
    const errorMessage = error.response.data.message as string
    toast.error(errorMessage)
  } else if (error.message) {
    toast.error(error.message)
  } else {
    toast.error('Ошибка со стороны сервера')
  }
}
