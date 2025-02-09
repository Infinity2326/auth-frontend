'use client'

import { Toaster } from '../components/ui'

export function ToastProvider() {
  return (
    <Toaster position="bottom-right" duration={6000} visibleToasts={5} gap={12} offset="16px" />
  )
}
