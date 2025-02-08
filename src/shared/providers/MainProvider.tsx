'use client'

import { type PropsWithChildren } from 'react'
import { TanstackQueryProvider } from './TanstackQueryProvider'
import { ThemeProvider } from './ThemeProvider'

export function MainProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <TanstackQueryProvider>
      <ThemeProvider attribute={'class'} disableTransitionOnChange enableSystem>
        {children}
      </ThemeProvider>
    </TanstackQueryProvider>
  )
}
