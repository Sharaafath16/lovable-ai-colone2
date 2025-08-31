import React from 'react'

type Props = React.PropsWithChildren<{
  id?: string
  className?: string
}>

export default function Section({ id, className = '', children }: Props) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  )
}
