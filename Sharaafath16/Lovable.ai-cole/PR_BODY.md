## Summary

Initial v1 marketing site scaffold mirroring lovable.dev’s layout pattern with new branding foundation.

- Next.js 14 App Router (TypeScript) with pnpm
- Tailwind CSS (postcss + autoprefixer) and global design tokens via CSS variables
- ESLint + Prettier (Next + Tailwind rules)
- framer-motion Reveal component for subtle, reduced-motion–aware animations
- zod validation, Resend-backed contact form API with honeypot + optional rate limit
- Base layout with Navbar/Footer, SEO metadata, Inter via next/font
- Home skeleton (hero, features, value, contact), legal pages (Privacy, Terms)
- .env.example, README with local dev + Vercel deploy notes

## Changes

- app/(site): layout with metadata, home page skeleton; legal/privacy + legal/terms
- app/api/contact/route.ts: POST handler validating with zod, honeypot, optional in-memory IP throttle (5 req/10 min), Resend email send
- components: Container, Section, Heading, Button, Navbar, Footer, Reveal, ContactForm (client)
- lib: email (Resend client), validation (zod schemas), rate-limit (guarded by CONTACT_RATE_LIMIT)
- styles/globals.css with tokens
- Config: next.config.ts, tailwind.config.ts, postcss.config.js, tsconfig.json (strict), .eslintrc.cjs, .prettierrc, .editorconfig, .nvmrc, package.json engines, vercel.json
- public: favicon.svg, og-image.svg

## Environment

Create `.env.local`:

```
RESEND_API_KEY=
CONTACT_TO=anversharaafath16@gmail.com
CONTACT_FROM=onboarding@resend.dev
CONTACT_SUBJECT=[Site] Contact
CONTACT_RATE_LIMIT=true
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Notes:
- Dev default from is `onboarding@resend.dev`. For prod, verify a custom domain in Resend and set CONTACT_FROM.
- If desired, replace in-memory throttle with Upstash Ratelimit before launch.

## Type of change
- Feature: new marketing scaffold and contact flow

## Impact
- New project structure; no breaking changes to existing code.

## Checklist
- [ ] Set RESEND_API_KEY in Vercel
- [ ] Set CONTACT_TO/CONTACT_FROM/CONTACT_SUBJECT
- [ ] Verify sending domain in Resend for production
- [ ] Set NEXT_PUBLIC_SITE_URL
