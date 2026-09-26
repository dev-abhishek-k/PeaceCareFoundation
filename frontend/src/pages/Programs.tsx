import { ArrowDown, ArrowRight, BookOpen, Heart, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import { Notice } from "../components/UI";

const careAreas = [
  {
    id: "street-dogs",
    number: "01",
    title: "Street dogs",
    summary: "Care begins with noticing who is often overlooked.",
    description: "Feeding, injury response, sterilisation and vaccination, with foster and adoption pathways — an illustrative description, not verified services.",
    details: ["Feeding & injury response", "Sterilisation & vaccination", "Foster & adoption pathways"],
    icon: PawPrint,
    surface: "bg-[#e9e9d6]",
    accent: "text-[var(--ink)]",
    label: "For the ones on the street",
    image: "/images/street-dog-care.jpg",
    imageAlt: "Illustration of a street dog resting beside a bowl of water.",
  },
  {
    id: "children",
    number: "02",
    title: "Children",
    summary: "A little support can make room to learn.",
    description: "Learning circles, school kits, nutrition and health checks are illustrative ideas, not a report of activities delivered.",
    details: ["Learning circles", "School kits", "Nutrition & health checks"],
    icon: BookOpen,
    surface: "bg-[#f5e1d5]",
    accent: "text-[var(--coral-dark)]",
    label: "For growing minds",
    image: "/images/learning-care.jpg",
    imageAlt: "Illustration of hands sharing a children's book.",
  },
  {
    id: "adults-and-elders",
    number: "03",
    title: "Adults & elders",
    summary: "Dignity belongs in every season of life.",
    description: "Night meals, blankets, dignity kits and medical camps are presented as an illustrative care model, not as available or verified services.",
    details: ["Night meals & blankets", "Dignity kits", "Medical camps"],
    icon: Heart,
    surface: "bg-[#e3e9e3]",
    accent: "text-[var(--ink)]",
    label: "For every generation",
    image: "/images/community-care.jpg",
    imageAlt: "Illustration of an older adult and a younger adult sharing a meal.",
  },
] as const;

export function Programs() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 md:grid-cols-[1.1fr_.9fr] md:items-center md:gap-16 md:pb-24 md:pt-20">
        <div>
          <div className="eyebrow">Our work · Care areas</div>
          <h1 className="mt-5 max-w-2xl text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            Care for every life, <em className="text-[var(--coral)]">every day.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">
            The care areas shown here include homeless dogs, children, adults and elders.
            One idea connects them: show up with dignity.
          </p>
          <div className="mt-7 max-w-xl">
            <Notice tone="info">
              This is a frontend prototype. The organisation and programmes are not
              independently verified; no live services or payments are offered.
            </Notice>
          </div>
          <a href="#care-areas" className="btn btn-outline mt-7">
            Explore the care areas <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-[var(--ink)] px-7 py-9 text-white sm:px-10 sm:py-12">
          <div aria-hidden="true" className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full border-[50px] border-white/5" />
          <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-6 text-xs font-bold uppercase tracking-[.15em] text-white/70">
            <span>Peace Care Foundation</span>
            <span>Illustrative overview</span>
          </div>
          <img src="/images/hero-care.jpg" alt="Illustration of a dog in a courtyard beside books and a folded shawl." className="mt-7 h-40 w-full rounded-2xl object-cover object-[center_55%]" />
          <p className="mt-8 max-w-sm font-['Fraunces'] text-3xl leading-tight text-white sm:text-4xl">
            Different needs.<br />The same spirit of care.
          </p>
          <div className="mt-10 space-y-3">
            {careAreas.map(({ id, number, title, icon: Icon }) => (
              <a
                key={number}
                href={`#${id}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sun)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--sun)] text-[var(--ink)]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="flex-1 font-semibold">{title}</span>
                <span className="text-xs text-white/60">{number}</span>
                <ArrowRight size={16} className="text-white/70 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-7 text-xs leading-5 text-white/65">Illustrative descriptions only. Not a service directory.</p>
        </div>
      </section>

      <section id="care-areas" className="scroll-mt-20 border-y border-[var(--line)] bg-[var(--paper-deep)]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
          <div className="eyebrow">Three areas · One intention</div>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl leading-tight md:text-5xl">What care can look like.</h2>
            <p className="max-w-sm text-sm leading-6 text-[var(--ink-soft)]">
              The areas below are illustrative. They are not a list of currently available programmes.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-10 px-5 py-14 md:space-y-16 md:py-20">
        {careAreas.map(({ id, number, title, summary, description, details, surface, label, image, imageAlt }, index) => (
          <section
            id={id}
            key={id}
            aria-labelledby={`${id}-title`}
            className="grid scroll-mt-24 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--white)] md:grid-cols-2"
          >
            <div className={`relative flex min-h-64 flex-col justify-between overflow-hidden p-7 sm:p-10 md:min-h-[410px] ${surface} ${index % 2 ? "md:order-2" : ""}`}>
              <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[#102923]/35 via-transparent to-[#102923]/60" />
              <span className="relative z-10 w-fit rounded-full bg-[var(--ink)]/80 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-white">{number} / 03 · Illustrative artwork</span>
              <span className="relative z-10 self-end rounded-full border border-white/50 bg-[var(--ink)]/80 px-4 py-2 text-xs font-semibold text-white">{label}</span>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="eyebrow">Area {number}</div>
              <h3 id={`${id}-title`} className="mt-4 text-4xl md:text-5xl">{title}</h3>
              <p className="mt-5 max-w-md font-['Fraunces'] text-xl leading-snug text-[var(--ink)]">{summary}</p>
              <p className="mt-5 max-w-lg leading-7 text-[var(--ink-soft)]">{description}</p>
              <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${title} illustrative activities`}>
                {details.map(detail => (
                  <li key={detail} className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-2 text-xs font-semibold text-[var(--ink-soft)]">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-[var(--line)] bg-[var(--paper-deep)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16 md:py-20">
          <div>
            <div className="eyebrow">Before you go</div>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">A story to explore, not a service to request.</h2>
          </div>
          <div>
            <Notice tone="info">
              No programme on this page is a live offer or fundraising appeal. Figures
              and partnerships are intentionally omitted because they are not verified.
            </Notice>
            <Link to="/ngos/peace-care-foundation" className="btn btn-primary mt-6">
              View preview profile <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}