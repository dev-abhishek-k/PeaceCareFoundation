import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Notice } from "../components/UI";

const careCategories = [
  {
    id: "street-dogs",
    number: "01",
    title: "Street dogs",
    text: "Ideas include food and water, injury care, vaccinations, and paths to fostering or adoption. These are examples, not confirmed services.",
    image: "/images/street-dog-care.jpg",
    alt: "Illustration of a dog resting beside a bowl of water in a warm courtyard.",
  },
  {
    id: "children",
    number: "02",
    title: "Children",
    text: "Learning circles, school supplies, nutrition and health checks are possible areas of support—not a report of verified programmes.",
    image: "/images/learning-care.jpg",
    alt: "Illustration of hands turning pages in a children's book at a sunny table.",
  },
  {
    id: "adults-and-elders",
    number: "03",
    title: "Adults & elders",
    text: "Meals, warm clothing, personal-care essentials and health camps are examples of possible support, not services offered here.",
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
          <div className="eyebrow">Care ideas · Preview</div>
          <h1 className="mt-5 text-5xl leading-[.98] md:text-7xl">
            Find a way to help.<br /><em className="text-[var(--coral)]">Start with care.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">
            Explore possible support for street dogs, children, adults and elders. This prototype
            shows how people might discover independent NGOs and ways to get involved; it does not
            run programmes or promise assistance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-primary" to="/programs">Explore causes <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link className="btn btn-outline" to="/ngos">Discover NGOs · Preview</Link>
            <a className="inline-flex items-center gap-2 px-2 py-3 text-sm font-bold text-[var(--ink)] underline-offset-4 hover:underline focus-visible:underline" href="#community-photos">
              See reference photos <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-6">
            <Notice tone="info">This is a preview. NGO listings and programmes are not verified, and no payments, referrals or live support services are offered here.</Notice>
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
            This is a design mockup, not an impact report. The “96%” figure is unverified, and
            the pictured “secure pledge” button does not work. No payment is taken here.
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="home-about-title" className="border-y border-[var(--line)] bg-[var(--white)]">
        <div className="mx-auto grid max-w-7xl items-center gap-9 px-5 py-16 md:grid-cols-[.9fr_1.1fr] md:gap-16 md:py-20">
          <figure className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--paper)]">
            <img
              src="/images/hero-care.jpg"
              alt="Illustration of a dog, books and a folded shawl in a neighborhood courtyard."
              className="h-64 w-full object-cover sm:h-80 md:h-96"
              loading="lazy"
            />
            <figcaption className="px-5 py-3 text-xs text-[var(--ink-soft)]">Illustrative artwork · Not a photo of platform activities</figcaption>
          </figure>
          <div>
            <div className="eyebrow">About this network</div>
            <h2 id="home-about-title" className="mt-3 text-4xl leading-tight sm:text-5xl">
              Explore ways to find the support you need.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[var(--ink-soft)]">
              NGO Help Network is a prototype for a third-party platform that could help people
              across India discover independent NGOs, outline a request, and explore ways to
              support causes as volunteers or supporters. We don’t run NGO programmes, provide
              live referrals, or guarantee help. For now, these journeys are previews.
            </p>
            <Link to="/about" className="btn btn-outline mt-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)]">
              Learn More <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="care-categories" className="border-y border-[var(--line)] bg-[var(--white)]" aria-labelledby="care-categories-title">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="eyebrow">Causes · Ideas to explore</div>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 id="care-categories-title" className="text-4xl">Where would you like to help?</h2>
            <p className="max-w-md text-sm leading-6 text-[var(--ink-soft)]">
              Explore causes that may matter to you. These examples are not verified programmes or available services.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {careCategories.map((category) => (
              <Link
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)] transition-colors hover:border-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)]"
                key={category.id}
                to={`/programs#${category.id}`}
              >
                <img src={category.image} alt={category.alt} className="h-52 w-full object-cover" loading="lazy" decoding="async" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--coral-dark)]">Cause {category.number} · Example</div>
                  <h3 className="mt-3 text-2xl">{category.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{category.text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[var(--ink)]">
                    Explore cause <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="community-photos" className="scroll-mt-24 border-y border-[var(--line)] bg-[var(--paper-deep)]" aria-labelledby="community-photos-title">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="eyebrow">Reference photos · Preview</div>
          <h2 id="community-photos-title" className="mt-3 text-4xl">A gallery of reference photos.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--ink-soft)]">
            These photos show how a gallery might look. The people, events and organisations shown
            have not been verified as activities of NGO Help Network or any listed NGO. One health-camp
            photo displays another organisation&apos;s branding; that does not imply an affiliation.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {referencePhotos.map((photo) => (
              <figure key={photo.title} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--white)]">
                <img src={photo.image} alt={photo.alt} className="aspect-square w-full bg-[var(--paper)] object-contain" loading="lazy" decoding="async" />
                <figcaption className="px-5 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--coral-dark)]">Reference photo · People and affiliation unverified</span>
                  <h3 className="mt-2 text-lg">{photo.title}</h3>
                  {photo.note && <p className="mt-2 text-xs leading-5 text-[var(--ink-soft)]">{photo.note}</p>}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="eyebrow">A thoughtful way to connect</div>
        <h2 className="mt-3 text-4xl">Start with listening.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {["Respect people", "Listen first", "Share clearly", "Value local voices"].map((value) => (
            <div className="border-l-2 border-[var(--sun)] pl-4" key={value}>
              <h3 className="text-xl">{value}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                A value we hope to reflect in this preview—not evidence of verified operations or services.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}