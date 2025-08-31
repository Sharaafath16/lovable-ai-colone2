'use client'

import React from 'react'

type FormState = {
  status: 'idle' | 'submitting' | 'success' | 'error'
  message?: string
}

export default function ContactForm() {
  const [state, setState] = React.useState<FormState>({ status: 'idle' })
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [company, setCompany] = React.useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState({ status: 'submitting' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, company }),
      })

      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        setState({ status: 'success', message: 'Thanks! We will get back to you shortly.' })
        setName('')
        setEmail('')
        setMessage('')
        setCompany('')
      } else {
        setState({ status: 'error', message: data?.error || 'Something went wrong.' })
      }
    } catch (err) {
      setState({ status: 'error', message: 'Network error. Please try again.' })
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-describedby="form-status" aria-live="polite">
      <input
        type="text"
        name="company"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-foreground/80">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 w-full rounded-lg border border-border bg-transparent px-3 outline-none ring-brand/40 placeholder:text-foreground/40 focus:ring-2"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-foreground/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 w-full rounded-lg border border-border bg-transparent px-3 outline-none ring-brand/40 placeholder:text-foreground/40 focus:ring-2"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-foreground/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-border bg-transparent p-3 outline-none ring-brand/40 placeholder:text-foreground/40 focus:ring-2"
          placeholder="How can we help?"
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={state.status === 'submitting'}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-brand px-5 font-medium text-black transition hover:opacity-90 disabled:opacity-50"
        >
          {state.status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
        <span id="form-status" role="status" className="text-sm text-foreground/70">
          {state.status === 'error' && state.message}
          {state.status === 'success' && state.message}
        </span>
      </div>
    </form>
  )
}
