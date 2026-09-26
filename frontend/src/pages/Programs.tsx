import { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import { programFocusAreas } from "../programFocusAreas";
import { supportCategories } from "../supportCategories";

const careAreas = [
  {
    id: "street-dogs",
    number: "01",
    title: "Street dogs",
    summary: "Care begins with noticing who is often overlooked.",
    description: "Feeding, injury response, sterilisation and vaccination, with foster and adoption pathways — an illustrative description, not verified services.",
    details: ["Feeding & injury response", "Sterilisation & vaccination", "Foster & adoption pathways"],
    surface: "bg-[#e9e9d6]",
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
    surface: "bg-[#f5e1d5]",
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
    surface: "bg-[#e3e9e3]",
    label: "For every generation",
    image: "/images/community-care.jpg",
    imageAlt: "Illustration of an older adult and a younger adult sharing a meal.",
  },
] as const;

export function Programs() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash]);

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 md:grid-cols-[1.1fr_.9fr] md:items-center md:gap-16 md:pb-20 md:pt-20">
        <div className="max-w-3xl">
          <div className="eyebrow">Our work · Care areas</div>
          <h1 className="mt-5 max-w-2xl text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            Care for every life, <em className="text-[var(--coral)]">every day.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">
            Explore possible areas of support for people, animals and communities.
            Different needs, one idea: show up with dignity.
          </p>
          <a href="#support-categories" className="btn btn-outline mt-7">
            Explore categories <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        <figure className="min-w-0">
          <img
            src="/images/our-work-reference.jpg"
            alt="Composite photo showing a health conversation, children learning, food sharing, and people planting a sapling."
            className="aspect-video w-full rounded-[2rem] object-cover"
          />
          <figcaption className="mt-3 text-xs leading-5 text-[var(--ink-soft)]">
            User-provided reference image. Pictured people and activities are not verified as Peace Care Foundation work.
          </figcaption>
        </figure>
      </section>

      <section id="support-categories" className="scroll-mt-20 border-y border-[var(--line)] bg-[var(--white)]" aria-labelledby="support-categories-title">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="eyebrow">18 support categories · Illustrative overview</div>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 id="support-categories-title" className="max-w-2xl text-4xl md:text-5xl">Explore ways to help.</h2>
            <p className="max-w-md text-sm leading-6 text-[var(--ink-soft)]">
              These categories describe possible kinds of support, not verified programmes or services currently offered.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {supportCategories.map((category, index) => (
              <article key={category.name} className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                  Category {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-xl">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{category.help}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="care-areas" className="scroll-mt-20 border-y border-[var(--line)] bg-[var(--paper-deep)]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
          <div className="eyebrow">Featured care areas · Twelve focus categories</div>
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
            className="scroll-mt-24"
          >
            <div className="grid overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--white)] md:grid-cols-2">
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
            </div>
            <div className="mt-7">
              <h4 className="text-2xl">Focus categories for {title.toLowerCase()}.</h4>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                Illustrative possibilities only; these are not verified or currently available services.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {programFocusAreas[id].map((focus) => (
                  <article key={focus.title} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--white)]">
                    <img src={focus.image} alt="" className="aspect-[3/2] w-full object-cover" loading="lazy" decoding="async" />
                    <div className="p-5">
                      <h5 className="text-lg">{focus.title}</h5>
                      <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{focus.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

    </main>
  );
}