'use client'

import { useState } from 'react'

interface CTAButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export function CTAButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
}: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseClasses = 'px-8 py-3 text-sm tracking-wide font-medium transition-all duration-300'
  const variantClasses = {
    primary: `${isHovered ? 'bg-foreground text-background' : 'bg-background text-foreground border border-foreground'} border`,
    secondary: `${isHovered ? 'bg-muted text-foreground' : 'bg-transparent text-foreground border border-foreground'}`,
  }

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
