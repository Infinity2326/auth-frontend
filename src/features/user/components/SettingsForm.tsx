'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Loader,
  Switch,
} from '@/shared/components/ui'
import { SettingsSchema, TypeSettingsSchema } from '../schemes'
import { UserButton, UserButtonLoading } from './UserButton'
import { useProfile, useUpdateProfileMutation } from '../hooks'

export function SettingsForm() {
  const { user, isPending } = useProfile()

  const form = useForm<TypeSettingsSchema>({
    resolver: zodResolver(SettingsSchema),
    values: {
      displayName: user?.displayName || '',
      email: user?.email || '',
      isTwoFactorEnabled: user?.isTwoFactorEnabled || false,
    },
  })

  const { updateProfile, isPending: isPendingUpdate } = useUpdateProfileMutation()

  const onSubmit = (data: TypeSettingsSchema) => {
    updateProfile(data)
  }

  if (!user) return null

  return (
    <Card className="w-[400px]">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Настройки профиля</CardTitle>
        {isPending ? <UserButtonLoading /> : <UserButton user={user} />}
      </CardHeader>
      <CardContent>
        {isPending ? (
          <Loader />
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2 space-y-2">
              <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Иван" disabled={isPendingUpdate} {...field} />
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
                        placeholder="example@gmail.com"
                        disabled={isPendingUpdate}
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isTwoFactorEnabled"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Двухфакторная аутентификация</FormLabel>
                      <FormDescription>
                        Включите двухфакторную аутентификацию для вашей учетной записи
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPendingUpdate}>
                Сохранить
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  )
}
