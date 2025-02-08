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
import { RegisterSchema, TypeRegisterSchema } from '../../schemes'
import { AuthWrapper } from './AuthWrapper'

export function RegisterForm() {
  const form = useForm<TypeRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordRepeat: '',
    },
  })

  const onSubmit = (data: TypeRegisterSchema) => {
    console.log(data)
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
          <FormField
            control={form.control}
            name="passwordRepeat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Повторите пароль</FormLabel>
                <FormControl>
                  <PasswordInput type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Создать аккаунт</Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
