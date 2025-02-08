'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
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
import { LoginSchema, TypeLoginSchema } from '../../schemes'
import { AuthWrapper } from './AuthWrapper'

export function LoginForm() {
  const form = useForm<TypeLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: TypeLoginSchema) => {
    console.log(data)
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="gap-2 space-y-2 grid">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input placeholder="Иван" {...field} />
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
                  <Input type="email" placeholder="example@gmail.com" {...field} />
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
                  <PasswordInput type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Войти в аккаунт</Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
