# Cole Marketing Site (v1 scaffold)

Tech: Next.js App Router (TypeScript), Tailwind CSS, framer-motion, pnpm. Static pages + a serverless contact form via Resend. Ready for Vercel.

## Quick start

1. Install dependencies

```bash
pnpm i
```

2. Run locally

```bash
pnpm dev
```

3. Lint, format, type-check

```bash
pnpm lint
pnpm format
pnpm type-check
```

## Environment variables

Create `.env.local` from `.env.example`.

```
RESEND_API_KEY=
CONTACT_TO=anversharaafath16@gmail.com
CONTACT_FROM=onboarding@resend.dev
CONTACT_SUBJECT=[Site] Contact
CONTACT_RATE_LIMIT=true
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Notes:
- In dev/staging, `CONTACT_FROM` defaults to `onboarding@resend.dev`.
- For production, verify a custom domain on Resend and set `CONTACT_FROM` accordingly.
- `CONTACT_RATE_LIMIT=true` enables a minimal in-memory throttle (5 req / 10 min per IP). For production hardening, swap to Upstash Ratelimit or Vercel KV.

## Tech decisions

- App Router with route handlers for `/api/contact`.
- Tailwind tokens via CSS variables for quick theming later.
- `Reveal` component for lightweight fade/slide animations and `prefers-reduced-motion` aware.

## Deploying to Vercel

1. Import this repo in Vercel.
2. Framework preset: Next.js. Install command `pnpm i`, build `pnpm build`.
3. Set environment variables from above.
4. Ensure Node 18 runtime (default on Vercel). No Edge runtime required.
5. Deploy. The API route uses the default Node runtime.

