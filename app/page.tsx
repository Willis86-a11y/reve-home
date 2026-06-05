import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import WorkPreview from '@/components/WorkPreview';
import WhatWeDo from '@/components/WhatWeDo';
import HowItWorks from '@/components/HowItWorks';
import SocialProof from '@/components/SocialProof';
import ClosingCta from '@/components/ClosingCta';
import { home } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WorkPreview />
      <WhatWeDo />
      <HowItWorks />
      <SocialProof />
      <ClosingCta heading={home.closing.heading} support={home.closing.support} />
    </>
  );
}
