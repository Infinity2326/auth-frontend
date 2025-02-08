import React from 'react'
import { FaGoogle, FaYandex } from 'react-icons/fa'
import { Button } from '@/shared/components/ui'

export function AuthSocial() {
  return (
    <>
      <div className="gap-6 grid grid-cols-2">
        <Button variant="outline">
          <FaGoogle className="mr-2 size-4" />
          Google
        </Button>
        <Button variant="outline">
          <FaYandex className="mr-2 size-4" />
          Яндекс
        </Button>
      </div>
      <div className="relative space-y-4 mb-2">
        <div className="absolute inset-0 flex items-center">
          <span className="border-t w-full"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Или</span>
        </div>
      </div>
    </>
  )
}
