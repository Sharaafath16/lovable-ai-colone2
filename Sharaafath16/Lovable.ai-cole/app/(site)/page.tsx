import Container from '@/components/Container'
import Section from '@/components/Section'
import Heading from '@/components/Heading'
import Button from '@/components/Button'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'

export default function HomePage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <Container>
          <Reveal>
            <Heading as="h1" className="text-balance">
              Build a memorable product site fast
            </Heading>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-2xl text-lg text-foreground/80">
              A lightweight scaffold that mirrors lovable.dev’s layout pattern with fresh branding.
              Built with Next.js App Router, Tailwind, and tasteful motion.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact us
              </Button>
              <a href="#value" className="inline-flex h-12 items-center rounded-lg border border-border px-5 text-sm text-foreground/80 hover:bg-foreground/10">
                Learn more
              </a>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section id="features">
        <Container>
          <Reveal>
            <Heading as="h2">Layout primitives</Heading>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Container & Section',
                desc: 'Compose clean pages quickly with accessible building blocks.',
              },
              {
                title: 'Reveal',
                desc: 'Subtle fade/slide in animations that respect reduced motion.',
              },
              {
                title: 'SEO-ready',
                desc: 'Metadata, canonical, and social previews out of the box.',
              },
            ].map((f) => (
              <Reveal key={f.title}>
                <div className="rounded-xl border border-border/80 bg-foreground/[0.03] p-6 shadow-soft">
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-foreground/80">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="value">
        <Container>
          <Reveal>
            <Heading as="h2">Built for speed</Heading>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-2xl text-foreground/80">
              Ship a polished marketing site in hours, not weeks. Swap branding later without
              touching structure.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <Reveal>
            <Heading as="h2">Contact</Heading>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-2 max-w-2xl text-foreground/80">
              Send a message and we’ll get back to you.
            </p>
          </Reveal>
          <div className="mt-8 max-w-2xl">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
