import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Leo Warriors gym logo"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/50"
          />
          <span className="leading-none">
            <span className="block font-display text-xl font-600 uppercase tracking-[0.16em] text-paper">
              Leo Warriors
            </span>
            <span className="section-label text-gold">Unisex Gym · Thirumazhisai</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="font-display text-sm uppercase tracking-[0.18em] text-steel transition-colors hover:text-paper [&.active]:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+919092345230"
            className="inline-flex items-center gap-2 bg-oxblood px-4 py-2.5 font-display text-sm uppercase tracking-[0.16em] text-paper transition-colors hover:bg-oxblood-br"
          >
            <Phone className="h-4 w-4" /> +91 90923 45230
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-paper md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-panel px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-base uppercase tracking-[0.18em] text-bone [&.active]:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919092345230"
              className="mt-1 bg-oxblood px-4 py-3 text-center font-display text-sm uppercase tracking-[0.16em] text-paper"
            >
              Call +91 90923 45230
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}