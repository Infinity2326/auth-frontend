import { z } from 'zod'

export const SettingsSchema = z.object({
  displayName: z.string().min(1, { message: 'Введите имя' }),
  email: z.string().email({ message: 'Некорректная почта' }),
  isTwoFactorEnabled: z.boolean(),
})

export type TypeSettingsSchema = z.infer<typeof SettingsSchema>
