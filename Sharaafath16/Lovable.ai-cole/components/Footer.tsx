import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 text-sm">
      <div className="container-base flex flex-col items-start justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand text-black">C</span>
          <span className="hidden sm:inline">Cole</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-foreground/80">
          <Link href="#">About</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Docs</Link>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
        </div>
      </div>
      <div className="container-base mt-6 text-foreground/60">© {new Date().getFullYear()} Cole. All rights reserved.</div>
    </footer>
  )
}
