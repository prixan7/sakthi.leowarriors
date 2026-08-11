import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";
import {
  gymCardioWall,
  gymTreadmills,
  coachSakthi,
} from "@/assets/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Leo Warriors — Coaches, Floor & Timings" },
      {
        name: "description",
        content:
          "Leo Warriors is run by Sakthi and Thiru in Thirumazhisai, Chennai. Air-conditioned unisex floor, free weights and machines, open 5 AM–10 PM with 10 AM–3 PM ladies timing.",
      },
      { property: "og:title", content: "About Leo Warriors — Coaches, Floor & Timings" },
      {
        property: "og:description",
        content: "A neighbourhood gym run by the people who coach you themselves.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    n: "01",
    title: "Free Weights & Machines",
    body: "Barbells, dumbbells, plate-loaded racks and cable stacks, plus treadmills and spin bikes.",
  },
  {
    n: "02",
    title: "Air-Conditioned Floor",
    body: "The whole training area is cooled, which matters for consistency through Chennai summers.",
  },
  {
    n: "03",
    title: "Unisex Flexible Timing",
    body: "Open 5 AM to 10 PM daily, with a dedicated 10 AM to 3 PM ladies window.",
  },
  {
    n: "04",
    title: "Clean Changing Rooms",
    body: "Changing rooms are checked and cleaned through the day, not only before opening.",
  },
];

function About() {
  return (
    <PageShell>
      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="section-label text-gold">About the gym</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl uppercase leading-[1.08] tracking-wide text-paper md:text-5xl">
            A neighbourhood gym, run by people who train you themselves.
          </h1>
        </div>
        <div className="hours-bar h-2 w-full" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="font-display text-3xl uppercase tracking-wide">Why we opened</h2>
          <p className="mt-5 leading-relaxed text-steel-dark">
            Leo Warriors started because Thirumazhisai had plenty of people willing to train and few
            places where someone actually watched them do it. We chose close coaching over a big
            machine count: the equipment here covers everything a serious lifter needs, and the
            coaches know what each member is working on that week.
          </p>
          <p className="mt-4 leading-relaxed text-steel-dark">
            The floor is air-conditioned and unisex, five minutes from the Thirumazhisai Post Office
            on South Mada Street. We open at 5 AM for members heading to work and stay open until
            10 PM for those coming back from it.
          </p>
          <figure className="mt-10 border-l-2 border-oxblood pl-6">
            <blockquote className="font-display text-2xl uppercase leading-snug tracking-wide">
              “Consistent training, properly guided, beats any fad.”
            </blockquote>
          </figure>
        </div>
        <img
          src={gymCardioWall}
          alt="Cardio machines and weight plate rack along the motivation wall at Leo Warriors"
          loading="lazy"
          className="h-full max-h-[30rem] w-full object-cover rounded shadow-lg"
        />
      </section>

      <section className="bg-panel py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-label text-gold">Coaches</p>
          <h2 className="mt-3 font-display text-3xl uppercase tracking-wide text-paper md:text-4xl">
            Coaches on the floor
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <article className="border border-white/10 bg-ink p-8 flex flex-col md:flex-row gap-6 items-center">
              <img
                src={coachSakthi}
                alt="Head Coach Sakthi"
                className="h-44 w-44 rounded object-cover border-2 border-gold shrink-0"
              />
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wide text-paper">
                  Sakthi
                </h3>
                <p className="section-label mt-1 text-gold">Founder & Head Coach</p>
                <p className="mt-4 text-sm leading-relaxed text-bone/80">
                  Runs the programming for strength and physique members and does hands-on form correction. If you are unsure about a lift, he is the person to ask.
                </p>
              </div>
            </article>

            <article className="border border-white/10 bg-ink p-8">
              <h3 className="font-display text-2xl uppercase tracking-wide text-paper">
                Thiru
              </h3>
              <p className="section-label mt-1 text-gold">Strength & Conditioning Coach</p>
              <p className="mt-4 text-sm leading-relaxed text-bone/80">
                Handles early-morning and beginner batches, along with conditioning and aerobics sessions. Good at easing in members who have never trained before.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-label text-oxblood">Facilities</p>
        <h2 className="mt-3 font-display text-3xl uppercase tracking-wide md:text-4xl">
          What you get access to
        </h2>
        <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2">
          {values.map((v) => (
            <article key={v.n} className="bg-paper p-8">
              <span className="font-mono text-xs text-gold">{v.n}</span>
              <h3 className="mt-3 font-display text-xl uppercase tracking-wide">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-dark">{v.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1fr_1.1fr]">
          <div className="border border-ink/12 p-8">
            <h3 className="section-label text-oxblood">Timings</h3>
            <p className="mt-4 font-mono text-sm text-ink">Regular gym · 05:00 – 22:00, all days</p>
            <p className="mt-2 font-mono text-sm text-ink">Ladies timing · 10:00 – 15:00</p>
          </div>
          <img
            src={gymTreadmills}
            alt="Treadmill row and turf walkway inside the air-conditioned floor"
            loading="lazy"
            className="h-64 w-full object-cover rounded shadow md:h-full"
          />
        </div>
      </section>

      <CtaBand
        title="Want to see it before you join?"
        text="We are on South Mada Street, near the Thirumazhisai Post Office. Visit any time we are open."
        actionLabel="Get directions"
        href="https://www.google.com/maps/search/?api=1&query=100+South+Mada+Street+Thirumazhisai+Chennai+600124"
      />
    </PageShell>
  );
}