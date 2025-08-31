import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { contactSchema } from '@/lib/validation'
import { rateLimitCheck } from '@/lib/rate-limit'
import { sendContactEmail } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const h = headers()
    const ip =
      h.get('x-forwarded-for')?.split(',')[0].trim() || h.get('x-real-ip') || 'unknown'

    const data = await req.json()
    const parsed = contactSchema.safeParse(data)

    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: 'Invalid input' }, { status: 400 })
    }

    if (parsed.data.company && parsed.data.company.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    const rl = rateLimitCheck(ip)
    if (!rl.allowed) {
      return NextResponse.json(
        { ok: false, error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(rl.retryAfterSec) } },
      )
    }

    const result = await sendContactEmail({
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
    })

    if (!('ok' in result) || !result.ok) {
      return NextResponse.json({ ok: false, error: result.error || 'Email failed' }, { status: 400 })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 })
  }
}
