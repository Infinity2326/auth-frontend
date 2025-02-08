'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'
import { Button } from './Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './DropdownMenu'

export function ToggleTheme() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="top-5 left-5 absolute">
        <Button variant="outline" size="icon">
          <Sun className="w-[1.2rem] h-[1.2rem] transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute w-[1.2rem] h-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>Светлая</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Темная</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>Как в системе</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
