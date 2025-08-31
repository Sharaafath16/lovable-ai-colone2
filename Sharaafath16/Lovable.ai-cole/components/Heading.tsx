import React from 'react'

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  children: React.ReactNode
}

export default function Heading({ as: Tag = 'h2', className = '', children }: Props) {
  const base =
    Tag === 'h1'
      ? 'text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight'
      : Tag === 'h2'
      ? 'text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight'
      : Tag === 'h3'
      ? 'text-2xl sm:text-3xl font-semibold'
      : 'text-lg sm:text-xl text-muted'

  return <Tag className={`${base} ${className}`}>{children}</Tag>
}
