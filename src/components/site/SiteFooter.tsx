import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="hours-bar h-1 w-full" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Leo Warriors logo"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40"
            />
            <span className="font-display text-xl uppercase tracking-[0.16em] text-paper">
              Leo Warriors
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">
            A unisex, air-conditioned gym on South Mada Street, Thirumazhisai. Free weights,
            machines, cardio and coaching from Sakthi and Thiru — every day of the week.
          </p>
        </div>

        <div>
          <h2 className="section-label text-gold">Pages</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About the gym" },
              { to: "/contact", label: "Contact & directions" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-bone/80 hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="section-label text-gold">Reach us</h2>
          <ul className="mt-4 space-y-3 text-sm text-bone/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                100, South Mada Street, Thirumazhisai, Chennai – 600124
                <br />
                <span className="text-steel">Near Thirumazhisai Post Office</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="font-mono">
                <a href="tel:+919092345230" className="hover:text-gold">
                  +91 90923 45230
                </a>
                <br />
                <a href="tel:+918056051073" className="hover:text-gold">
                  +91 80560 51073
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:leosakthi04@gmail.com" className="hover:text-gold">
                leosakthi04@gmail.com
              </a>
            </li>
            <li className="flex gap-3">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href="https://www.instagram.com/leo__sakthi"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                @leo__sakthi
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5">
        <p className="mx-auto max-w-6xl font-mono text-xs text-steel-dark">
          © {new Date().getFullYear()} Leo Warriors · Open daily 05:00–22:00 · Ladies timing
          10:00–15:00
        </p>
      </div>
    </footer>
  );
}