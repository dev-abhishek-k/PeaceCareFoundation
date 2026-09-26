import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Notice } from "../components/UI";

const moments = [
  {
    time: "Morning",
    title: "Street dogs",
    text: "Feeding, injury response, sterilisation and vaccination, with foster and adoption pathways described as illustrative work.",
    image: "/images/street-dog-care.jpg",
    alt: "Illustration of a dog resting beside a bowl of water in a warm courtyard.",
  },
  {
    time: "Afternoon",
    title: "Children",
    text: "Learning circles, school kits, nutrition and health checks — illustrative programme ideas, not a verified report.",
    image: "/images/learning-care.jpg",
    alt: "Illustration of hands turning pages in a children's book at a sunny table.",
  },
  {
    time: "Evening",
    title: "Adults & elders",
    text: "Night meals, blankets, dignity kits and medical camps, shown here as an illustrative care model.",
    image: "/images/community-care.jpg",
    alt: "Illustration of an older adult and a younger adult sharing a meal.",
  },
];

const visualIdeas = [
  {
    title: "Learning together",
    image: "/images/learning-moment.jpg",
    alt: "Illustration of an adult and child drawing together at a courtyard table.",
  },
  {
    title: "Sharing meals",
    image: "/images/food-sharing.jpg",
    alt: "Illustration of hands arranging meals in reusable containers.",
  },
  {
    title: "Health conversations",
    image: "/images/health-outreach.jpg",
    alt: "Illustration of a health information table with notebooks and a stethoscope.",
  },
  {
    title: "Caring for green spaces",
    image: "/images/tree-planting.jpg",
    alt: "Illustration of hands planting a young tree in a neighborhood garden.",
  },
];

export function HomePeace() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.05fr_.95fr] md:items-center md:pt-24">
        <div>
          <div className="eyebrow">Peace Care Foundation · Care preview</div>
          <h1 className="mt-5 text-5xl leading-[.98] md:text-7xl">
            Healing lives.<br /><em className="text-[var(--coral)]">Restoring hope.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">
            An illustrative view of care for homeless dogs, children, adults and elders
            — presented as a frontend prototype, not a verified organisational claim.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-primary" to="/programs">Explore care areas <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link className="btn btn-outline" to="/ngos">Browse directory preview</Link>
          </div>
          <div className="mt-6">
            <Notice tone="info">Illustrative content; organisations and programmes are not verified. No payments or live services are offered.</Notice>
          </div>
        </div>
        <figure className="relative min-h-[440px] overflow-hidden rounded-[2rem] bg-[var(--ink)] text-white">
          <img
            src="/images/hero-care.jpg"
            alt="Illustration of a dog receiving water in a courtyard, with books and a folded shawl nearby."
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102923]/85 via-transparent to-[#102923]/25" aria-hidden="true" />
          <figcaption className="relative flex min-h-[440px] flex-col justify-between p-7 sm:p-9">
            <span className="w-fit rounded-full border border-white/70 bg-[var(--ink)]/65 px-4 py-2 text-xs font-bold uppercase tracking-wider">Illustrative artwork</span>
            <div>
              <p className="max-w-sm font-['Fraunces'] text-3xl leading-snug text-white">Care starts with noticing.</p>
              <p className="mt-3 text-sm text-white/90">A visual interpretation, not a record of delivered services.</p>
            </div>
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper-deep)]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="eyebrow">A day of care · Illustrative overview</div>
          <h2 className="mt-3 max-w-2xl text-4xl">Care meets people where the day finds them.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {moments.map((moment) => (
              <article className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)]" key={moment.time}>
                <img src={moment.image} alt={moment.alt} className="h-52 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="text-sm font-bold text-[var(--coral-dark)]">{moment.time} · Illustration</div>
                  <h3 className="mt-5 text-2xl">{moment.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{moment.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20" aria-labelledby="visual-ideas-title">
        <div className="eyebrow">Visual ideas · Illustrative artwork</div>
        <h2 id="visual-ideas-title" className="mt-3 text-4xl">Ways care can take shape.</h2>
        <p className="mt-4 max-w-2xl leading-7 text-[var(--ink-soft)]">
          These are original illustrations of possible community care, not photos of Peace Care
          Foundation or evidence that these activities have taken place.
        </p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visualIdeas.map((idea) => (
            <figure key={idea.title} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--white)]">
              <img src={idea.image} alt={idea.alt} className="aspect-square w-full object-cover" loading="lazy" decoding="async" />
              <figcaption className="px-5 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--coral-dark)]">Illustrative</span>
                <h3 className="mt-1 text-lg">{idea.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="eyebrow">What guides the work</div>
        <h2 className="mt-3 text-4xl">Small promises, repeated.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {["Dignity first", "Show up daily", "Open books", "Local hands"].map((value) => (
            <div className="border-l-2 border-[var(--sun)] pl-4" key={value}>
              <h3 className="text-xl">{value}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                A guiding value in this preview, not evidence of verified operations.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}