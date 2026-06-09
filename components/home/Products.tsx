import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { productGroups } from "@/lib/data";

export default function Products() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Product Coverage"
          title="A broader product range that complements fabrication capability."
          description="Our product range covers heavy engineering fabrications and structural steel packages shaped for industrial use, integration readiness, and practical project delivery."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {productGroups.map((group) => (
            <article key={group.title} className="surface-panel p-8 sm:p-10">
              <h3 className="heading-primary text-3xl font-medium text-brand-ink">
                {group.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-brand-muted">
                {group.intro}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-brand-border bg-brand-cream/70 px-4 py-3 text-sm font-medium text-brand-ink"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-brand-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:-translate-y-0.5 hover:bg-brand-ink-soft"
          >
            Discuss your requirement
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
