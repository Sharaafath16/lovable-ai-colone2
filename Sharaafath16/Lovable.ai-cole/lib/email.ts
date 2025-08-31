import { Resend } from 'resend'

const resendKey = process.env.RESEND_API_KEY
const resend = resendKey ? new Resend(resendKey) : null

export async function sendContactEmail(input: {
  name: string
  email: string
  message: string
}) {
  const to = process.env.CONTACT_TO
  const subject = process.env.CONTACT_SUBJECT || '[Site] Contact'
  const from = process.env.CONTACT_FROM || 'onboarding@resend.dev'

  if (!to) {
    return { ok: false as const, error: 'Missing CONTACT_TO' }
  }
  if (!resend) {
    return { ok: false as const, error: 'Missing RESEND_API_KEY' }
  }

  const text = `New contact submission\n\nFrom: ${input.name} <${input.email}>\n\n${input.message}`

  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    text,
    reply_to: input.email,
  })

  if (error) {
    return { ok: false as const, error: String(error) }
  }

  return { ok: true as const }
}
