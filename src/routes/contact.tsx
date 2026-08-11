import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import gym1 from "@/assets/gym-1.png.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Leo Warriors — South Mada Street, Thirumazhisai" },
      {
        name: "description",
        content:
          "Visit Leo Warriors at 100 South Mada Street, Thirumazhisai, Chennai 600124. Call +91 90923 45230, open 5 AM–10 PM daily, ladies timing 10 AM–3 PM.",
      },
      { property: "og:title", content: "Contact Leo Warriors — Thirumazhisai, Chennai" },
      {
        property: "og:description",
        content: "Address, phone numbers, timings and directions to the gym.",
      },
    ],
  }),
  component: Contact,
});

const MAPS_QUERY =
  "https://www.google.com/maps/search/?api=1&query=100+South+Mada+Street+Thirumazhisai+Chennai+600124";

function Contact() {
  return (
    <PageShell>
      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="section-label text-gold">Contact</p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl uppercase leading-[1.08] tracking-wide text-paper md:text-5xl">
            Come in, or call before you do.
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-bone/80">
            We are on South Mada Street, a short walk from the Thirumazhisai Post Office. A first
            visit needs nothing but shoes.
          </p>
        </div>
        <div className="hours-bar h-2 w-full" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
        <div className="space-y-px bg-ink/10">
          {[
            {
              icon: MapPin,
              label: "Address",
              lines: ["100, South Mada Street", "Thirumazhisai, Chennai – 600124"],
              note: "Landmark: near Thirumazhisai Post Office",
            },
            {
              icon: Phone,
              label: "Phone",
              lines: ["+91 90923 45230", "+91 80560 51073"],
              note: "Call between 5 AM and 10 PM",
            },
            {
              icon: Mail,
              label: "Email",
              lines: ["leosakthi04@gmail.com"],
            },
            {
              icon: Instagram,
              label: "Instagram",
              lines: ["@leo__sakthi"],
              note: "Member progress and batch updates",
            },
            {
              icon: Clock,
              label: "Timings",
              lines: ["Regular · 05:00 – 22:00, all days", "Ladies · 10:00 – 15:00"],
            },
          ].map((item) => (
            <div key={item.label} className="bg-paper p-7">
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4 text-oxblood" />
                <h2 className="section-label text-oxblood">{item.label}</h2>
              </div>
              {item.lines.map((l) => (
                <p key={l} className="mt-2 font-mono text-sm text-ink">
                  {l}
                </p>
              ))}
              {item.note && <p className="mt-2 text-sm text-steel-dark">{item.note}</p>}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <img
            src={gym1.url}
            alt="Inside Leo Warriors: racks, benches and cable machines under blue lighting"
            loading="lazy"
            className="h-72 w-full object-cover"
          />
          <div className="border border-ink/12 p-8">
            <h2 className="font-display text-2xl uppercase tracking-wide">Getting here</h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-steel-dark">
              <li>
                <span className="font-mono text-gold">01 ·</span> From Poonamallee, take the
                Chennai–Bangalore highway towards Thirumazhisai.
              </li>
              <li>
                <span className="font-mono text-gold">02 ·</span> Turn into South Mada Street at the
                Thirumazhisai Post Office.
              </li>
              <li>
                <span className="font-mono text-gold">03 ·</span> The gym is at number 100, on the
                right. Two-wheeler parking is in front.
              </li>
            </ol>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={MAPS_QUERY}
                target="_blank"
                rel="noreferrer"
                className="bg-ink px-6 py-3.5 font-display text-sm uppercase tracking-[0.18em] text-paper transition-colors hover:bg-oxblood"
              >
                Open in Google Maps
              </a>
              <a
                href="tel:+919092345230"
                className="border border-ink/25 px-6 py-3.5 font-display text-sm uppercase tracking-[0.18em] text-ink transition-colors hover:border-oxblood hover:text-oxblood"
              >
                Call now
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}