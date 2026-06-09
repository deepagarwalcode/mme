import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { companyInfo } from "@/lib/data";

export default function About() {
  return (
    <section className="py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/30 shadow-[0_24px_70px_rgba(10,37,64,0.1)]">
          <div
            className="min-h-[500px] bg-cover bg-center"
            style={{ backgroundImage: "url('/infra/18.jpeg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,26,48,0.78))]" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-sand">
              Positioning
            </p>
            <h2 className="heading-primary mt-3 text-3xl font-medium">
              Built to reflect the standards serious industrial clients expect.
            </h2>
          </div>
        </div>

        <div className="surface-panel p-8 sm:p-10 lg:p-12">
          <SectionHeading
            eyebrow="About Metal Matrix"
            title="A more refined fabrication presence for technically demanding work."
            description={`${companyInfo.aboutIntro} ${companyInfo.aboutBody}`}
          />

          <p className="mt-8 max-w-2xl text-base leading-8 text-brand-muted">
            We work to build collaborative project relationships where technical
            understanding, fabrication discipline, and dependable communication
            remain visible from the first discussion through final delivery.
          </p>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-full border border-brand-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-ink hover:-translate-y-0.5 hover:border-brand-orange hover:text-brand-orange"
            >
              Discover the company
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
