import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Некорректная почта' }),
  password: z.string().min(6, { message: 'Пароль должен быть не менее 6 символов' }),
})

export type TypeLoginSchema = z.infer<typeof LoginSchema>
