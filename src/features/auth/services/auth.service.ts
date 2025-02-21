import api from '@/shared/api'
import { TypeLoginSchema, TypeRegisterSchema } from '../schemes'
import { User } from '../types'

class AuthService {
  public async register(body: TypeRegisterSchema, recaptcha?: string) {
    const headers = recaptcha ? { recaptcha } : {}
    const { data } = await api.post<User>('auth/register', body, { headers })
    return data
  }

  public async login(body: TypeLoginSchema, recaptcha?: string) {
    const headers = recaptcha ? { recaptcha } : {}
    const { data } = await api.post<User>('auth/login', body, { headers })
    return data
  }

  public async logout() {
    const response = await api.post('auth/logout')
    return response
  }
}

export const authService = new AuthService()
