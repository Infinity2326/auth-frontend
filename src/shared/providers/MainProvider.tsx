'use client'

import { type PropsWithChildren } from 'react'
import { ToastProvider, ThemeProvider, TanstackQueryProvider } from './index'

export function MainProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <TanstackQueryProvider>
      <ThemeProvider attribute={'class'} disableTransitionOnChange enableSystem>
        <ToastProvider />
        {children}
      </ThemeProvider>
    </TanstackQueryProvider>
  )
}
