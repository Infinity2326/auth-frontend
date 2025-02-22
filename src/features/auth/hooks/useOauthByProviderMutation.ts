import { useMutation } from '@tanstack/react-query'
import { authService } from '../services'
import { type OauthProvider } from '../types'

export function useOauthByProviderMutation() {
  const { mutateAsync: registerWithOauth } = useMutation({
    mutationKey: ['oauth by provider'],
    mutationFn: async (provider: OauthProvider) => await authService.oauthByProvider(provider),
  })

  return registerWithOauth
}
