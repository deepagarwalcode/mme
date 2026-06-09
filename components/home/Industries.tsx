import {
  Building,
  Factory,
  Radiation,
  TrainFront,
  Warehouse,
  Zap,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { industries } from "@/lib/data";

const iconMap = {
  building: Building,
  factory: Factory,
  radiation: Radiation,
  train: TrainFront,
  warehouse: Warehouse,
  zap: Zap,
};

export default function Industries() {
  return (
    <section className="bg-white/55 py-20">
      <div className="section-shell">
        <SectionHeading
          align="center"
          eyebrow="Industries"
          title="Aligned to sectors where reliability, control, and structural confidence matter."
          description="We support sectors where fabrication quality, project coordination, and dependable output are central to successful delivery."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const Icon = iconMap[industry.iconName as keyof typeof iconMap] ?? Factory;

            return (
              <article key={industry.name} className="surface-panel p-8">
                <div className="inline-flex rounded-[1.5rem] bg-brand-cream p-4 text-brand-orange">
                  <Icon className="h-10 w-10" strokeWidth={1.6} />
                </div>
                <h3 className="heading-primary mt-6 text-3xl font-medium text-brand-ink">
                  {industry.name}
                </h3>
                <p className="mt-3 text-base leading-8 text-brand-muted">
                  {industry.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
