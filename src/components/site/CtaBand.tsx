import { Link } from "@tanstack/react-router";

export function CtaBand({
  title,
  text,
  actionLabel,
  to,
  href,
}: {
  title: string;
  text: string;
  actionLabel: string;
  to?: string;
  href?: string;
}) {
  const cls =
    "inline-block bg-paper px-7 py-4 font-display text-sm uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-bright";
  return (
    <section className="bg-oxblood">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-3xl uppercase leading-tight tracking-wide text-paper md:text-4xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-paper/80">{text}</p>
        </div>
        {to ? (
          <Link to={to} className={cls}>
            {actionLabel}
          </Link>
        ) : (
          <a href={href} target="_blank" rel="noreferrer" className={cls}>
            {actionLabel}
          </a>
        )}
      </div>
    </section>
  );
}