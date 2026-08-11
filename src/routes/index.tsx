import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";
import logo from "@/assets/logo";
import {
  heroBg,
  gymFloorBlue,
  gymCardioWall,
  gymTreadmills,
  coachSakthi,
} from "@/assets/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leo Warriors — A/C Unisex Gym in Thirumazhisai, Chennai" },
      {
        name: "description",
        content:
          "Leo Warriors is an air-conditioned unisex gym at 100 South Mada Street, Thirumazhisai. Open 5 AM–10 PM daily, ladies timing 10 AM–3 PM. Strength, cardio, aerobics and coached batches.",
      },
      { property: "og:title", content: "Leo Warriors — A/C Unisex Gym in Thirumazhisai" },
      {
        property: "og:description",
        content: "Free weights, machines, cardio and hands-on coaching. Open every day, 5 AM–10 PM.",
      },
    ],
  }),
  component: Index,
});

const programs = [
  {
    n: "01",
    title: "Body Building",
    body: "Free weights, machines and split routines planned around your current strength, not a template.",
  },
  {
    n: "02",
    title: "Muscle Building",
    body: "Progressive loading with form checked on the floor, plus simple eating guidance you can follow.",
  },
  {
    n: "03",
    title: "Weight Loss",
    body: "Cardio and resistance work combined, with weekly check-ins so the plan keeps up with you.",
  },
  {
    n: "04",
    title: "Weight Gain",
    body: "Structured lifting and calorie targets for members who struggle to put on size.",
  },
  {
    n: "05",
    title: "Cardio & Aerobics",
    body: "Treadmills, cross trainers and spin bikes, plus group aerobics for conditioning days.",
  },
  {
    n: "06",
    title: "Personal Coaching",
    body: "1-on-1 hands on form correction and custom training programming by Coach Sakthi.",
  },
];

const reviews = [
  {
    text: "The machines are in good condition and there is always someone on the floor to correct your form. I started as a complete beginner and never felt out of place.",
    name: "Praveen K.",
    tag: "Member since 2023",
  },
  {
    text: "A/C makes a real difference in the Chennai summer. Early morning batch is calm and you get to use whatever equipment you need without waiting.",
    name: "Divya R.",
    tag: "Morning batch",
  },
  {
    text: "Sakthi tracks what you are lifting and pushes only when you are ready. Lost about nine kilos over five months with his plan.",
    name: "Arun S.",
    tag: "Weight loss",
  },
];

function Index() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative bg-ink">
        <img
          src={heroBg}
          alt="Leo Warriors heavy power rack strength training floor"
          className="absolute inset-0 h-full w-full object-cover opacity-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-5xl flex-col items-center justify-center px-5 py-24 text-center">
          <img
            src={logo}
            alt="Leo Warrior Logo"
            className="mb-4 h-28 w-28 rounded-full object-cover shadow-2xl ring-2 ring-gold/60 sm:h-36 sm:w-36"
          />
          <p className="section-label text-gold">Thirumazhisai · Chennai</p>
          <h1 className="mt-6 font-hero text-5xl uppercase leading-[0.92] tracking-[0.02em] text-paper sm:text-7xl md:text-8xl">
            Train like a<span className="block text-gold">warrior</span>
          </h1>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-bone/70">
            A/C unisex gym · 5 AM – 10 PM
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="bg-gold px-8 py-4 font-display text-sm uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-bright"
            >
              Free trial session
            </Link>
            <a
              href="tel:+919092345230"
              className="border border-bone/30 px-8 py-4 font-display text-sm uppercase tracking-[0.18em] text-paper transition-colors hover:border-gold hover:text-gold"
            >
              Call the gym
            </a>
          </div>
        </div>
        <div className="hours-bar h-2 w-full" />
        <div className="mx-auto flex max-w-6xl justify-between px-5 py-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-steel">
          <span>05:00 open</span>
          <span className="hidden sm:inline">10:00 – 15:00 ladies</span>
          <span>22:00 close</span>
        </div>
      </section>

      {/* At a glance strip */}
      <section className="border-b border-ink/10 bg-paper">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-ink/10 px-0 md:grid-cols-4">
          {[
            ["Open daily", "05:00 – 22:00"],
            ["Ladies timing", "10:00 – 15:00"],
            ["Google rating", "4.7 / 5 · 100+"],
            ["Facility", "A/C · Unisex"],
          ].map(([k, v]) => (
            <div key={k} className="bg-paper px-5 py-6">
              <dt className="section-label text-steel-dark">{k}</dt>
              <dd className="mt-2 font-display text-lg uppercase tracking-wide">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col gap-4 border-b border-ink/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label text-oxblood">What we train</p>
            <h2 className="mt-3 font-display text-3xl uppercase tracking-wide md:text-4xl">
              Six programs, run on the same floor
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-steel-dark">
            Every member is put into one of these tracks after a short conversation about what you
            want and what your body can handle right now.
          </p>
        </div>

        <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article key={p.n} className="bg-paper p-7">
              <span className="font-mono text-xs text-gold">{p.n}</span>
              <h3 className="mt-3 font-display text-xl uppercase tracking-wide">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-dark">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Floor gallery */}
      <section className="bg-bone/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-label text-oxblood">The floor</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl uppercase tracking-wide md:text-4xl">
            Real photos from our training floor
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                src: gymFloorBlue,
                alt: "Main gym floor with cable crossover, benches and blue LED lighting",
                title: "Main Training Floor",
              },
              {
                src: gymCardioWall,
                alt: "Motivation wall, leg press machine and green turf runway",
                title: "Motivation & Leg Zone",
              },
              {
                src: gymTreadmills,
                alt: "Treadmill row along the green turf walkway",
                title: "Cardio & Turf Walkway",
              },
              {
                src: coachSakthi,
                alt: "Head Coach Sakthi on the gym floor",
                title: "Head Coach Sakthi",
              },
            ].map((img) => (
              <figure key={img.title} className="group overflow-hidden rounded bg-panel shadow-md">
                <div className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 bg-ink text-center">
                  <p className="font-display text-sm uppercase tracking-wider text-gold">
                    {img.title}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label text-gold">Members</p>
              <h2 className="mt-3 font-display text-3xl uppercase tracking-wide text-paper md:text-4xl">
                What people say after a few months
              </h2>
            </div>
            <p className="font-mono text-sm text-steel">4.7 / 5 · 100+ Google reviews</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <blockquote key={r.name} className="border-l-2 border-gold bg-panel p-7">
                <p className="text-sm leading-relaxed text-bone/90">{r.text}</p>
                <footer className="mt-5">
                  <p className="font-display text-sm uppercase tracking-[0.16em] text-paper">
                    {r.name}
                  </p>
                  <p className="section-label text-steel">{r.tag}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Come see the floor before you commit"
        text="No paperwork for a first visit. Drop in, look at the equipment, meet Sakthi and try a session."
        actionLabel="Plan your visit"
        to="/contact"
      />
    </PageShell>
  );
}
