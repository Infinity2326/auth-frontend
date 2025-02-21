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
import { RegisterSchema, TypeRegisterSchema } from '../schemes'
import { AuthWrapper } from './AuthWrapper'
import { useRegisterMutation } from '../hooks'

export function RegisterForm() {
  const { theme } = useTheme()
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

  const form = useForm<TypeRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      displayName: '',
      email: '',
      password: '',
      passwordRepeat: '',
    },
  })

  const { register, isPending } = useRegisterMutation()

  const onSubmit = (data: TypeRegisterSchema) => {
    if (recaptchaValue) {
      register({ values: data, recaptcha: recaptchaValue })
    } else {
      toast.error('Подтвердите что вы не робот')
    }
  }

  return (
    <AuthWrapper
      heading="Регистрация"
      description="Чтобы войти на сайт введите вашу почту и пароль."
      backButtonLabel="Уже есть аккаунт? Войти"
      backButtonHref="/auth/login"
      isShowSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2 space-y-2">
          <FormField
            control={form.control}
            name="displayName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input disabled={isPending} placeholder="Иван" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Почта</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    type="email"
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
                    disabled={isPending}
                    type="password"
                    placeholder="******"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordRepeat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Повторите пароль</FormLabel>
                <FormControl>
                  <PasswordInput
                    disabled={isPending}
                    type="password"
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
            Создать аккаунт
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
