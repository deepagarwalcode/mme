type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,26,48,0.94),rgba(8,26,48,0.72),rgba(145,61,31,0.45))]" />
      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-brand-sand">
            {eyebrow}
          </p>
          <h1 className="heading-primary max-w-4xl text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
