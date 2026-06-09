type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
};

export default function FaqList({ items }: FaqListProps) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-[1.75rem] border border-brand-border bg-white/88 px-6 py-5 shadow-[0_20px_50px_rgba(10,37,64,0.06)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
            <span className="heading-primary text-2xl font-medium text-brand-ink">
              {item.question}
            </span>
            <span className="text-3xl leading-none text-brand-orange transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl pr-10 text-base leading-8 text-brand-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
