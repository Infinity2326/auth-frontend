'use client'

import React from 'react'
import { FaGoogle, FaYandex } from 'react-icons/fa'
import { Button } from '@/shared/components/ui'
import { useRouter } from 'next/navigation'
import { useOauthByProvider } from '../hooks/useOauthByProvider'
import { OauthProvider } from '../types'

export function AuthSocial() {
  const router = useRouter()

  const registerWithOauth = useOauthByProvider()

  const handleOAuthClick = async (provider: OauthProvider) => {
    const url = await registerWithOauth(provider)

    if (url) {
      router.push(url)
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <Button onClick={() => handleOAuthClick('google')} variant="outline">
          <FaGoogle className="mr-2 size-4" />
          Google
        </Button>
        <Button onClick={() => handleOAuthClick('yandex')} variant="outline">
          <FaYandex className="mr-2 size-4" />
          Яндекс
        </Button>
      </div>
      <div className="relative mb-2 space-y-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Или</span>
        </div>
      </div>
    </>
  )
}
