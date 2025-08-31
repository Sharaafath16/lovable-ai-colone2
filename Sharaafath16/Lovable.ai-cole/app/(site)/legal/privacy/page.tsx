import Container from '@/components/Container'
import Section from '@/components/Section'
import Heading from '@/components/Heading'

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <Heading as="h1">Privacy Policy</Heading>
        <p className="mt-4 text-foreground/80">Last updated: August 31, 2025</p>

        <div className="prose prose-invert mt-8 max-w-none">
          <h2 id="information-we-collect">Information we collect</h2>
          <p>
            We collect information you provide directly to us, such as when you submit the
            contact form. This may include your name, email address, and message content.
          </p>

          <h2 id="how-we-use-information">How we use information</h2>
          <p>
            We use your information to respond to inquiries, improve our services, and operate
            this website.
          </p>

          <h2 id="data-retention">Data retention</h2>
          <p>
            We retain personal data only for as long as necessary to provide the requested
            service and to comply with legal obligations.
          </p>

          <h2 id="your-rights">Your rights</h2>
          <p>
            Depending on your location, you may have rights regarding access, correction, or
            deletion of your personal data. Contact us to exercise these rights.
          </p>

          <h2 id="contact">Contact</h2>
          <p>
            If you have questions about this policy, reach us via the contact form on the home
            page.
          </p>
        </div>
      </Container>
    </Section>
  )
}
