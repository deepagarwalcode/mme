import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Expanded services page for Metal Matrix Equipment, covering fabrication, machining, conveying system works, and industrial project support.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        description="Our services are structured for clients who need more than a supplier list. They need an industrial partner that understands fabrication quality, execution discipline, and project expectations."
        eyebrow="Services"
        image="/infra/27.jpeg"
        title="A deeper look at the services that define the company offer."
      />

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Service Philosophy"
            title="Each scope is framed around execution quality, not just category labels."
            description="Each service area is approached with attention to technical alignment, fabrication practicality, and the quality of handover expected on serious industrial work."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Technical Alignment",
                text: "Every scope benefits from early technical understanding so fabrication decisions support the requirement before production begins.",
              },
              {
                title: "Controlled Production",
                text: "Production is approached with attention to detail, workflow discipline, and repeatable output quality rather than reactive execution.",
              },
              {
                title: "Project Readiness",
                text: "Our service model is shaped around coordination, handover readiness, and practical usability so clients receive work that integrates smoothly.",
              },
            ].map((item) => (
              <article key={item.title} className="surface-panel p-8">
                <h2 className="heading-primary text-3xl font-medium text-brand-ink">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-brand-muted">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/55 py-20">
        <div className="section-shell space-y-8">
          {services.map((service, index) => (
            <article
              key={service.shortform}
              className="surface-panel overflow-hidden p-0"
            >
              <div
                className={`grid gap-0 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[340px]">
                  <Image
                    alt={service.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src={service.image}
                  />
                </div>

                <div className="p-8 sm:p-10 lg:p-12">
                  <p className="eyebrow">Service {index + 1}</p>
                  <h2 className="heading-primary mt-4 text-4xl font-semibold text-brand-ink">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-brand-muted">
                    {service.description}
                  </p>

                  <div className="mt-8 grid gap-6 xl:grid-cols-2">
                    <div>
                      <h3 className="heading-primary text-2xl font-medium text-brand-ink">
                        Typical Deliverables
                      </h3>
                      <ul className="mt-4 grid gap-3 text-sm leading-7 text-brand-muted">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="rounded-[1.15rem] border border-brand-border bg-brand-cream/70 px-4 py-3"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="heading-primary text-2xl font-medium text-brand-ink">
                        Typical Applications
                      </h3>
                      <ul className="mt-4 grid gap-3 text-sm leading-7 text-brand-muted">
                        {service.applications.map((item) => (
                          <li
                            key={item}
                            className="rounded-[1.15rem] border border-brand-border bg-white px-4 py-3"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
