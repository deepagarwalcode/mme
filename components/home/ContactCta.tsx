import Link from "next/link";
import { companyInfo } from "@/lib/data";

export default function ContactCta() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#0b1f35,#173452,#d35d2f)] p-10 text-white shadow-[0_24px_70px_rgba(10,37,64,0.18)] sm:p-12 lg:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-sand">
            Contact
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="heading-primary max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                Let&apos;s collaborate on your next fabrication requirement.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80">
                Reach out for a focused discussion on scope, timelines, and how
                we can support the work from enquiry onward.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/14 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-sand">
                Reach us directly
              </p>
              <p className="mt-4 text-2xl font-medium">{companyInfo.phone}</p>
              <p className="mt-2 text-base text-white/75">{companyInfo.email}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-ink hover:-translate-y-0.5"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
