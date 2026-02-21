import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { ReviewsMarquee } from "@/components/landing/reviews-marquee";
import { MobileScrollFeature } from "@/components/landing/mobile-scroll-feature";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { JsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen bg-surface">
        <Header />
        <Hero />
        <ReviewsMarquee />
        <MobileScrollFeature />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
