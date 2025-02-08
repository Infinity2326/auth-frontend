'use client'

import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Input } from '@/shared/components/ui'

export function PasswordInput({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className="relative">
      <Input {...props} type={isVisible ? 'text' : 'password'} className="pr-10" />
      <button
        type="button"
        onClick={toggleVisibility}
        className="right-0 absolute inset-y-0 flex items-center px-2 text-foreground"
      >
        {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>
    </div>
  )
}
