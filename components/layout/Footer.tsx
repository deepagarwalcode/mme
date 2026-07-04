import Link from "next/link";
import BrandLogo from "@/components/shared/BrandLogo";
import { companyInfo, navigation, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-ink text-white">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Link
            aria-label={companyInfo.name}
            className="inline-flex rounded-[1.5rem] bg-white p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
            href="/"
          >
            <BrandLogo
              className="w-[220px] sm:w-[280px]"
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 240px, 220px"
            />
          </Link>
          <h2 className="heading-primary mt-4 max-w-md text-4xl font-semibold leading-tight text-white">
            A premium industrial partner built around clarity, control, and craft.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
            Metal Matrix Equipment combines fabrication discipline, machining
            support, and engineered project thinking for clients who expect
            dependable execution and a professional standard of delivery.
          </p>
        </div>

        <div>
          <h3 className="heading-primary text-2xl font-medium text-white">
            Explore
          </h3>
          <ul className="mt-6 grid gap-3 text-sm uppercase tracking-[0.18em] text-white/70">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-brand-sand" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="heading-primary text-2xl font-medium text-white">
            Contact
          </h3>
          <div className="mt-6 space-y-4 text-base leading-7 text-white/72">
            {companyInfo.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              <a className="hover:text-brand-sand" href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}>
                {companyInfo.phone}
              </a>
            </p>
            <p>
              <a className="hover:text-brand-sand" href={`mailto:${companyInfo.email}`}>
                {companyInfo.email}
              </a>
            </p>
          </div>
          <div className="mt-8">
            <p className="text-sm uppercase tracking-[0.18em] text-brand-sand/80">
              Key Service Areas
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-white/68">
              {services.slice(0, 3).map((service) => (
                <li key={service.shortform}>{service.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Metal Matrix Equipment. All rights
            reserved.
          </p>
          <p>Industrial fabrication, machining, and engineered equipment support.</p>
        </div>
      </div>
    </footer>
  );
}
