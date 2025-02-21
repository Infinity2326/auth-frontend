import type { Metadata } from 'next'
import { NewVerificationForm } from '../../../features/auth/components/NewVerificationForm'

export const metadata: Metadata = {
  title: 'Войти в аккаунт',
}

export default function NewVerificationPage() {
  return <NewVerificationForm />
}
