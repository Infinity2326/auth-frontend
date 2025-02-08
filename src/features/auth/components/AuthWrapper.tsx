import Link from 'next/link'
import React, { type PropsWithChildren } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui'
import { AuthSocial } from './AuthSocial'

interface AuthWrapperProps {
  heading: string
  description?: string
  backButtonLabel?: string
  backButtonHref?: string
  isShowSocial?: boolean
}

export function AuthWrapper({
  children,
  heading,
  description,
  backButtonLabel,
  backButtonHref,
  isShowSocial = false,
}: PropsWithChildren<AuthWrapperProps>) {
  return (
    <Card className="w-[400px]">
      <CardHeader className="space-y-2">
        <CardTitle>{heading}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {isShowSocial && <AuthSocial />}
      <CardContent>{children}</CardContent>
      <CardFooter>
        {backButtonLabel && backButtonHref && (
          <Button variant={'link'} className="w-full font-normal">
            <Link href={backButtonHref}>{backButtonLabel}</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
