import type { Metadata } from "next";
import {
  Building2,
  Mail,
  MapPin,
  Phone,
  Send,
  UserRound,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Metal Matrix Equipment through the current phone number, email address, and a premium contact page layout ready for future form functionality.",
};

const contactBlocks = [
  {
    label: "Phone",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
  {
    label: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    icon: Mail,
  },
  {
    label: "Office",
    value: companyInfo.addressLines.join(", "),
    href: undefined,
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Contact"
            title="Get In Touch"
            description="Share your requirement with us and our team will be ready to review the scope and discuss the next step."
          />

          <div className="mt-14 grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="surface-panel p-8 sm:p-10 lg:p-12">
              <p className="eyebrow">Get In Touch</p>
              <div className="section-divider mt-5" />

              <div className="mt-10 space-y-8">
                {contactBlocks.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-ink text-white">
                        <Icon className="h-7 w-7" strokeWidth={1.8} />
                      </div>
                      <div>
                        <h2 className="heading-primary text-2xl font-medium uppercase tracking-[0.08em] text-brand-ink">
                          {item.label}
                        </h2>
                        <p className="mt-2 max-w-md text-lg leading-8 text-brand-muted">
                          {item.value}
                        </p>
                      </div>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      className="flex items-start gap-5"
                      href={item.href}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="flex items-start gap-5">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="surface-panel p-8 sm:p-10 lg:p-12">
              <p className="eyebrow">Send Us a Message</p>
              <div className="section-divider mt-5" />

              <form className="mt-10 grid gap-7">
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="grid gap-3">
                    <span className="heading-primary inline-flex items-center gap-3 text-2xl font-medium uppercase tracking-[0.08em] text-brand-ink">
                      <UserRound className="h-5 w-5" />
                      Name
                    </span>
                    <input
                      className="h-16 rounded-[1.2rem] border border-brand-border bg-white px-5 text-base text-brand-ink outline-none focus:border-brand-orange"
                      placeholder="Your full name"
                      type="text"
                    />
                  </label>

                  <label className="grid gap-3">
                    <span className="heading-primary inline-flex items-center gap-3 text-2xl font-medium uppercase tracking-[0.08em] text-brand-ink">
                      <Mail className="h-5 w-5" />
                      Email
                    </span>
                    <input
                      className="h-16 rounded-[1.2rem] border border-brand-border bg-white px-5 text-base text-brand-ink outline-none focus:border-brand-orange"
                      placeholder="name@company.com"
                      type="email"
                    />
                  </label>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <label className="grid gap-3">
                    <span className="heading-primary inline-flex items-center gap-3 text-2xl font-medium uppercase tracking-[0.08em] text-brand-ink">
                      <Phone className="h-5 w-5" />
                      Mobile
                    </span>
                    <input
                      className="h-16 rounded-[1.2rem] border border-brand-border bg-white px-5 text-base text-brand-ink outline-none focus:border-brand-orange"
                      placeholder="+971 ..."
                      type="tel"
                    />
                  </label>

                  <label className="grid gap-3">
                    <span className="heading-primary inline-flex items-center gap-3 text-2xl font-medium uppercase tracking-[0.08em] text-brand-ink">
                      <Building2 className="h-5 w-5" />
                      Company Name
                    </span>
                    <input
                      className="h-16 rounded-[1.2rem] border border-brand-border bg-white px-5 text-base text-brand-ink outline-none focus:border-brand-orange"
                      placeholder="Company name"
                      type="text"
                    />
                  </label>
                </div>

                <label className="grid gap-3">
                  <span className="heading-primary inline-flex items-center gap-3 text-2xl font-medium uppercase tracking-[0.08em] text-brand-ink">
                    <Send className="h-5 w-5" />
                    Message
                  </span>
                  <textarea
                    className="min-h-[220px] rounded-[1.2rem] border border-brand-border bg-white px-5 py-4 text-base text-brand-ink outline-none focus:border-brand-orange"
                    placeholder="Tell us about your requirement."
                  />
                </label>

                <button
                  className="inline-flex w-fit items-center gap-3 rounded-[1rem] bg-brand-ink px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_40px_rgba(10,37,64,0.16)] hover:-translate-y-0.5 hover:bg-brand-ink-soft"
                  type="button"
                >
                  Send Inquiry
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
