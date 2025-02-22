import api from '@/shared/api'
import { User } from '@/features/auth/types'
import { TypeSettingsSchema } from '../schemes'

class UserService {
  public async findProfile() {
    const { data } = await api.get<User>('/users/profile')

    return data
  }

  public async updateProfile(body: TypeSettingsSchema) {
    const { data } = await api.patch<User>('/users/profile', body)

    return data
  }
}

export const userService = new UserService()
