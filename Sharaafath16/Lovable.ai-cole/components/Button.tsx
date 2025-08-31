import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:opacity-50 disabled:cursor-not-allowed'

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
  }[size]

  const variants = {
    primary: 'bg-brand text-black hover:opacity-90',
    secondary: 'bg-foreground/10 text-foreground hover:bg-foreground/15',
    ghost: 'bg-transparent text-foreground hover:bg-foreground/10',
  }[variant]

  return <button className={`${base} ${sizes} ${variants} ${className}`} {...props} />
}
