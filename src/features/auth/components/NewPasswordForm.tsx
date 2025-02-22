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
  PasswordInput,
} from '@/shared/components/ui'
import { NewPasswordSchema, type TypeNewPasswordSchema } from '../schemes'
import { AuthWrapper } from './AuthWrapper'
import { useNewPasswordMutation } from '../hooks'

export function NewPasswordForm() {
  const { theme } = useTheme()
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

  const { setNewPassword, isPending } = useNewPasswordMutation()

  const form = useForm<TypeNewPasswordSchema>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  })

  const onSubmit = (data: TypeNewPasswordSchema) => {
    if (recaptchaValue) {
      setNewPassword({ values: data, recaptcha: recaptchaValue })
    } else {
      toast.error('Подтвердите что вы не робот')
    }
  }

  return (
    <AuthWrapper
      heading="Новый пароль"
      description="Введите новый пароль для вашего аккаунта"
      backButtonLabel="Войти в аккаунт"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2 space-y-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <PasswordInput
                    type="password"
                    disabled={isPending}
                    placeholder="******"
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
            Установить пароль
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
