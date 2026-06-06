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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <video
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>
      <HowItWorks />
      <SocialProof />
      <ClosingCta heading={home.closing.heading} support={home.closing.support} />
    </>
  );
}
