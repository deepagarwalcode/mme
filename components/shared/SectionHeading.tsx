type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="heading-primary text-4xl font-semibold text-brand-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-brand-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
