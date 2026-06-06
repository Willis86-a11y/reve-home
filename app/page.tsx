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
          <iframe
            src="https://www.youtube.com/embed/qFWrCZ-drcQ?autoplay=1&mute=1&loop=1&playlist=qFWrCZ-drcQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1"
            className="w-full rounded-2xl aspect-video"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </section>
      <HowItWorks />
      <SocialProof />
      <ClosingCta heading={home.closing.heading} support={home.closing.support} />
    </>
  );
}
