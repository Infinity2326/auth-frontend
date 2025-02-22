import type { Metadata } from 'next'
import { NewVerificationForm } from '@/features/auth/components'

export const metadata: Metadata = {
  title: 'Войти в аккаунт',
}

export default function NewVerificationPage() {
  return <NewVerificationForm />
}
