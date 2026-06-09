import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="bg-white/55 py-20">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Core Services"
            title="Fabrication and engineering support shaped around industrial realities."
            description="Each service line is presented as part of a premium execution model: technically grounded, carefully fabricated, and delivered with a level of professionalism that elevates the brand."
          />

          <Link
            href="/services"
            className="inline-flex items-center gap-3 self-start rounded-full border border-brand-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-ink hover:-translate-y-0.5 hover:border-brand-orange hover:text-brand-orange"
          >
            View full service scope
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.shortform}
              className="surface-panel overflow-hidden p-0"
            >
              <div className="relative aspect-[4/4.2] overflow-hidden">
                <Image
                  alt={service.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  src={service.image}
                />
              </div>
              <div className="p-6">
                <h3 className="heading-primary max-w-[15ch] text-[2rem] font-medium leading-[1.12] text-brand-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">
                  {service.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
