'use client'

import Link from 'next/link'
import React from 'react'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="container-base flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand text-black">C</span>
          <span className="hidden sm:inline">Cole</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="#features">Features</Link>
          <Link href="#value">Value</Link>
          <Link href="#contact">Contact</Link>
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get started
          </Button>
        </nav>

        <button
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:bg-foreground/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 lg:hidden">
          <div className="container-base flex flex-col gap-4 py-4">
            <Link href="#features" onClick={() => setOpen(false)}>
              Features
            </Link>
            <Link href="#value" onClick={() => setOpen(false)}>
              Value
            </Link>
            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
