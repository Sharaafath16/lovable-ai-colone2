import Container from '@/components/Container'
import Section from '@/components/Section'
import Heading from '@/components/Heading'

export default function TermsPage() {
  return (
    <Section>
      <Container>
        <Heading as="h1">Terms of Service</Heading>
        <p className="mt-4 text-foreground/80">Last updated: August 31, 2025</p>

        <div className="prose prose-invert mt-8 max-w-none">
          <h2 id="acceptance-of-terms">Acceptance of terms</h2>
          <p>
            By accessing or using this website, you agree to be bound by these Terms of Service.
          </p>

          <h2 id="use-of-site">Use of site</h2>
          <p>
            You agree not to misuse the site or assist others in doing so. The site is provided
            "as is" without warranties of any kind.
          </p>

          <h2 id="intellectual-property">Intellectual property</h2>
          <p>
            All content and materials on this site are owned by their respective holders and may
            not be used without permission.
          </p>

          <h2 id="limitation-of-liability">Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect or
            consequential damages arising from your use of the site.
          </p>

          <h2 id="changes">Changes</h2>
          <p>
            We may update these terms from time to time. Changes will be posted on this page.
          </p>
        </div>
      </Container>
    </Section>
  )
}
