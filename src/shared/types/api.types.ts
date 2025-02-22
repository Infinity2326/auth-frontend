import { AxiosError } from 'axios'

export type ResponseError = AxiosError<ResponseData>

interface ResponseData {
  message: string
}
