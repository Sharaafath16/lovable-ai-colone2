'use client'

import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

type Props = React.PropsWithChildren<{
  className?: string
  y?: number
  delay?: number
}>

export default function Reveal({ children, className = '', y = 16, delay = 0 }: Props) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
