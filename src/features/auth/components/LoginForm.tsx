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
  PasswordInput,
} from '@/shared/components/ui'
import { LoginSchema, TypeLoginSchema } from '../schemes'
import { AuthWrapper } from './AuthWrapper'
import { useLoginMutation } from '../hooks/'

export function LoginForm() {
  const { theme } = useTheme()
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

  const { login, isPending } = useLoginMutation()

  const form = useForm<TypeLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: TypeLoginSchema) => {
    if (recaptchaValue) {
      login({ values: data, recaptcha: recaptchaValue })
    } else {
      toast.error('Подтвердите что вы не робот')
    }
  }

  return (
    <AuthWrapper
      heading="Войти"
      description="Чтобы войти на сайт введите вашу почту и пароль."
      backButtonLabel="Еще нет аккаунта? Регистрация"
      backButtonHref="/auth/register"
      isShowSocial
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
            Войти в аккаунт
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
