'use client'
import { useLogoutMutation } from '../hooks'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  Avatar,
  AvatarImage,
  AvatarFallback,
  DropdownMenuContent,
  DropdownMenuItem,
  Skeleton,
} from '@/shared/components/ui'
import { LuLogOut } from 'react-icons/lu'
import { User } from '../../auth/types'
interface UserButtonProps {
  user: User
}
export function UserButton({ user }: UserButtonProps) {
  const { logout, isPending } = useLogoutMutation()

  if (!user) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user.picture} />
          <AvatarFallback>{user.displayName.slice(0, 1)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem disabled={isPending} onClick={() => logout()}>
          <LuLogOut className="mr-2 size-4" />
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function UserButtonLoading() {
  return <Skeleton className="h-10 w-10 rounded-full" />
}
