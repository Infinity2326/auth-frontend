import { AxiosError } from 'axios'
import { toast } from 'sonner'

export function toastMessageHandler(error: AxiosError<ErrorResponse>) {
  if (error.response?.data?.message) {
    const errorMessage = error.response.data.message as string
    toast.error(errorMessage)
  } else if (error.message) {
    toast.error(error.message)
  } else {
    toast.error('Ошибка со стороны сервера')
  }
}

interface ErrorResponse {
  message: string
}
