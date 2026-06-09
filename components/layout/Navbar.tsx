"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, Phone, X } from "lucide-react";
import { companyInfo, navigation } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/35 bg-brand-cream/90 backdrop-blur-xl">
      <div className="hidden border-b border-brand-border/70 bg-brand-ink text-brand-sand md:block">
        <div className="section-shell flex items-center justify-between gap-6 py-3 text-sm">
          <p className="max-w-2xl text-white/85">{companyInfo.topBanner}</p>
          <div className="flex items-center gap-6 text-white/90">
            <a
              className="flex items-center gap-2 hover:text-white"
              href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
            >
              <Phone className="h-4 w-4" />
              <span>{companyInfo.phone}</span>
            </a>
            <a
              className="flex items-center gap-2 hover:text-white"
              href={`mailto:${companyInfo.email}`}
            >
              <Mail className="h-4 w-4" />
              <span>{companyInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="section-shell flex items-center justify-between py-5">
        <Link
          href="/"
          className="font-display text-2xl font-semibold uppercase tracking-[0.18em] text-brand-ink sm:text-3xl"
        >
          Metal Matrix
          <span className="block text-sm font-medium tracking-[0.42em] text-brand-orange sm:text-base">
            Equipment
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                  isActive
                    ? "text-brand-orange"
                    : "text-brand-ink hover:text-brand-orange"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full border border-brand-orange bg-brand-orange px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_12px_30px_rgba(211,93,47,0.22)] hover:-translate-y-0.5 hover:bg-brand-orange-deep"
          >
            Enquire Now
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="inline-flex rounded-full border border-brand-border bg-white p-3 text-brand-ink md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-brand-border bg-white/96 md:hidden">
          <div className="section-shell flex flex-col gap-5 py-5">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                    isActive
                      ? "text-brand-orange"
                      : "text-brand-ink hover:text-brand-orange"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="grid gap-3 border-t border-brand-border pt-4 text-sm text-brand-muted">
              <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}>
                {companyInfo.phone}
              </a>
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
