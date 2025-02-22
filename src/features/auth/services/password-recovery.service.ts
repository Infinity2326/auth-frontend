import api from '@/shared/api'
import { TypeNewPasswordSchema, TypeResetPasswordSchema } from '../schemes/'

class PasswordRecoveryService {
  public async resetPasssword(body: TypeResetPasswordSchema, recaptcha: string) {
    const headers = recaptcha ? { recaptcha } : undefined

    const response = await api.post('auth/password-recovery/reset', body, { headers })

    return response.data
  }

  public async setNewPassword(
    body: TypeNewPasswordSchema,
    token: string | null,
    recaptcha: string,
  ) {
    const headers = recaptcha ? { recaptcha } : undefined
    const response = await api.post(`auth/password-recovery/new/${token}`, body, { headers })

    return response.data
  }
}

export const passwordRecoveryService = new PasswordRecoveryService()
