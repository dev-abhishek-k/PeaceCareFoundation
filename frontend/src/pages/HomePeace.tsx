import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Notice } from "../components/UI";
import { impactOptions, rupees } from "../donationOptions";

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

const referencePhotos = [
  {
    title: "Learning together",
    image: "/images/reference-learning.jpg",
    alt: "Photo of an adult helping a child with a notebook.",
  },
  {
    title: "Meal distribution",
    image: "/images/reference-meals.jpg",
    alt: "Collage showing people distributing food and packed meals.",
  },
  {
    title: "Community health camp",
    image: "/images/reference-health-camp.jpg",
    alt: "Photo of a health camp with Viswasanthi Health Initiative banners.",
    note: "Viswasanthi Health Initiative branding is visible in this photo.",
  },
  {
    title: "Tree planting",
    image: "/images/reference-planting.jpg",
    alt: "Photo of a group planting a young tree.",
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
            <a className="inline-flex items-center gap-2 px-2 py-3 text-sm font-bold text-[var(--ink)] underline-offset-4 hover:underline focus-visible:underline" href="#community-photos">
              View photos <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-6">
            <Notice tone="info">Illustrative content; organisations and programmes are not verified. No payments or live services are offered.</Notice>
          </div>
        </div>
        <figure className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--paper)]">
          <div className="bg-[var(--ink)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white">
            Design reference only · No live donation flow
          </div>
          <img
            src="/images/home-design-reference.png"
            alt="Design-reference screenshot depicting a child, an adult and a dog with a mock 96 percent figure and pledge controls."
            className="mx-auto block h-auto w-full max-w-[500px]"
            fetchPriority="high"
          />
          <figcaption className="border-t border-[var(--line)] bg-[var(--white)] px-6 py-4 text-xs leading-5 text-[var(--ink-soft)]">
            Screenshot mockup, not an impact report. Its “96%” figure is unverified;
            the “secure pledge” button pictured is not functional. No payment is taken here.
          </figcaption>
        </figure>
        <section className="rounded-[2rem] border border-[var(--line)] bg-[var(--white)] p-6 sm:p-8 md:col-span-2" aria-labelledby="care-theme-title">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow">12 fixed amounts · Preview only</div>
              <h2 id="care-theme-title" className="mt-2 text-3xl sm:text-4xl">Support a day of care.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[var(--ink-soft)]">
              Twelve image-and-price examples, with no category selection or links from these cards.
              The controls printed in the image above are also not interactive.
            </p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {impactOptions.map((option) => (
              <figure key={option.id} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)]">
                <img
                  src={option.image}
                  alt={`Illustrative artwork of ${option.title.toLowerCase()} for ${option.area.toLowerCase()}.`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover"
                />
                <figcaption className="p-4 font-['Fraunces'] text-2xl">{rupees(option.amount)}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-[var(--ink-soft)]">
            Artwork is illustrative, not a record of foundation activities. Amounts are display-only examples,
            not actual programme prices or a fundraising request. No payment is available here.
          </p>
        </section>
      </section>

      <section id="community-photos" className="scroll-mt-24 border-y border-[var(--line)] bg-[var(--paper-deep)]" aria-labelledby="community-photos-title">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="eyebrow">User-provided photos · Reference gallery</div>
          <h2 id="community-photos-title" className="mt-3 text-4xl">Community moments in pictures.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--ink-soft)]">
            These photos were provided for this preview. The people, events and organisations pictured
            have not been verified as Peace Care Foundation activities. One health-camp photo displays
            another organisation&apos;s branding.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {referencePhotos.map((photo) => (
              <figure key={photo.title} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--white)]">
                <img src={photo.image} alt={photo.alt} className="aspect-square w-full bg-[var(--paper)] object-contain" loading="lazy" decoding="async" />
                <figcaption className="px-5 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--coral-dark)]">Reference photo · Affiliation unverified</span>
                  <h3 className="mt-2 text-lg">{photo.title}</h3>
                  {photo.note && <p className="mt-2 text-xs leading-5 text-[var(--ink-soft)]">{photo.note}</p>}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
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