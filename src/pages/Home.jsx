import useDocumentTitle from '../hooks/useDocumentTitle';
import Hero from '../components/sections/Hero';
import AIDemo from '../components/sections/AIDemo';
import FeaturesTeaser from '../components/sections/FeaturesTeaser';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import CTABanner from '../components/sections/CTABanner';

export default function Home() {
  useDocumentTitle(null, 'Replyora - Support product that drafts a reply grounded in a pasted knowledge snippet.');
  return (
    <>
      <Hero />
      <AIDemo />
      <FeaturesTeaser />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  );
}
