import Link from 'next/link'
import { buttonVariants } from '../shared/components/ui'

export default function Home() {
  return (
    <div className="space-y-5 text-center">
      <h1 className="font-bold text-4xl">Главная страница</h1>
      <Link href="/auth/login" className={buttonVariants({ variant: 'secondary' })}>
        Войти в аккаунт
      </Link>
    </div>
  )
}
