"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companyInfo, heroPillars, heroSlides } from "@/lib/data";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] overflow-hidden border-b border-white/15">
      {heroSlides.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,26,48,0.92),rgba(8,26,48,0.78),rgba(8,26,48,0.2))]" />

      <div className="section-shell relative flex min-h-[80vh] items-center py-24">
        <div className="w-full space-y-10 lg:space-y-12">
          <div className="max-w-none">
            <p className="eyebrow text-brand-sand">Premium fabrication partner</p>
            <h1 className="heading-primary mt-6 max-w-none text-5xl font-semibold leading-[0.96] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.2rem] xl:text-[4.85rem]">
              <span className="block">Industrial Fabrication</span>
              <span className="block">Engineered for Demanding Execution</span>
            </h1>
          </div>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_27rem] lg:items-end">
            <div className="max-w-3xl">
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
              {companyInfo.heroDescription}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-orange px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_18px_40px_rgba(211,93,47,0.26)] hover:-translate-y-0.5 hover:bg-brand-orange-deep"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/8 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm hover:bg-white hover:text-brand-ink"
              >
                Start an Enquiry
              </Link>
            </div>
            </div>

            <div className="surface-panel grid gap-4 p-6 text-brand-ink">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-orange">
                What defines the standard
              </p>
              <div className="section-divider" />
              {heroPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-[1.5rem] border border-brand-border bg-brand-cream/70 px-5 py-4"
                >
                  <h2 className="heading-primary text-2xl font-medium text-brand-ink">
                    {pillar}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {heroSlides.map((slide, index) => (
          <button
            key={slide}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-12 bg-brand-orange"
                : "w-3 bg-white/55 hover:bg-white/85"
            }`}
            onClick={() => setCurrentIndex(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
