import type { Metadata } from "next";
import Services from "@/components/home/Services";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  companyInfo,
  missionVisionValues,
  operatingPrinciples,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Metal Matrix Equipment, including the company positioning, mission, vision, values, and service-oriented operating principles.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        description="Learn how Metal Matrix Equipment approaches fabrication, engineering support, and client service through a company profile focused on standards, direction, and long-term intent."
        eyebrow="About Us"
        image="/infra/26.jpeg"
        title="A company profile built around capability, standards, and intent."
      />

      <section className="py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="surface-panel p-8 sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Company Overview"
              title="A more premium articulation of who Metal Matrix Equipment is."
              description={`${companyInfo.aboutIntro} ${companyInfo.aboutBody}`}
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>
                We approach each engagement with a strong emphasis on preparation,
                fabrication discipline, and clear technical communication so that
                requirements move forward with confidence and structure.
              </p>
              <p>
                Our position is straightforward: to be the kind of engineering and
                fabrication partner clients trust when quality expectations are
                high, coordination matters, and the finished work needs to speak
                for itself.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {missionVisionValues.map((item) => (
              <article key={item.title} className="surface-panel p-8">
                <p className="eyebrow">{item.title}</p>
                <h2 className="heading-primary mt-4 text-3xl font-medium text-brand-ink">
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
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Operating Approach"
              title="What working with the company is intended to feel like."
              description="Our operating principles reflect a company culture built around precision, accountability, and practical execution."
            />
          </div>
          <div className="surface-panel p-8 sm:p-10">
            <div className="grid gap-4">
              {operatingPrinciples.map((principle) => (
                <div
                  key={principle}
                  className="rounded-[1.4rem] border border-brand-border bg-brand-cream/70 px-5 py-4 text-base leading-7 text-brand-ink"
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Services />
    </main>
  );
}
