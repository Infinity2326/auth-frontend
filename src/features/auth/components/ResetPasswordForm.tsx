'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'next-themes'
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/shared/components/ui'
import { ResetPasswordSchema, type TypeResetPasswordSchema } from '../schemes'
import { AuthWrapper } from './AuthWrapper'
import { useResetPasswordMutation } from '../hooks'

export function ResetPasswordForm() {
  const { theme } = useTheme()
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

  const { resetPassword, isPending } = useResetPasswordMutation()

  const form = useForm<TypeResetPasswordSchema>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (data: TypeResetPasswordSchema) => {
    if (recaptchaValue) {
      resetPassword({ values: data, recaptcha: recaptchaValue })
    } else {
      toast.error('Подтвердите что вы не робот')
    }
  }

  return (
    <AuthWrapper
      heading="Сброс пароля"
      description="Для сброса пароля укажите свою почту"
      backButtonLabel="Войти в аккаунт"
      backButtonHref="/auth/logion"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2 space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Почта</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    disabled={isPending}
                    placeholder="example@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
              onChange={setRecaptchaValue}
              theme={theme === 'light' ? 'light' : 'dark'}
            />
          </div>
          <Button disabled={isPending} type="submit">
            Сбросить пароль
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
