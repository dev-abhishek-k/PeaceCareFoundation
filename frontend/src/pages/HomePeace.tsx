import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Notice } from "../components/UI";

const careCategories = [
  {
    id: "street-dogs",
    number: "01",
    title: "Street dogs",
    text: "Explore the kinds of support street dogs may need, from food and veterinary care to safe foster and adoption pathways.",
    image: "/images/street-dog-care.jpg",
    alt: "Illustration of a dog resting beside a bowl of water in a warm courtyard.",
  },
  {
    id: "children",
    number: "02",
    title: "Children",
    text: "Understand needs around learning, school supplies, nutrition and access to basic health support.",
    image: "/images/learning-care.jpg",
    alt: "Illustration of hands turning pages in a children's book at a sunny table.",
  },
  {
    id: "adults-and-elders",
    number: "03",
    title: "Adults & elders",
    text: "Look at how food, shelter, health guidance and everyday essentials can matter for adults and older people.",
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
          <div className="eyebrow">Peace Care Foundation · Connecting communities</div>
          <h1 className="mt-5 text-5xl leading-[.98] md:text-7xl">
            Find the right help.<br /><em className="text-[var(--coral)]">Make a connection.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">
            Our aim is to make it easier to discover independent NGOs, understand the causes
            they work on and find ways to offer support across India. The goal is to connect
            people and organisations; each NGO decides what help it can provide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-primary" to="/programs">Explore care areas <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link className="btn btn-outline" to="/ngos">Browse NGOs</Link>
            <a className="inline-flex items-center gap-2 px-2 py-3 text-sm font-bold text-[var(--ink)] underline-offset-4 hover:underline focus-visible:underline" href="#community-photos">
              View photos <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-6">
            <Notice tone="info">The directory currently shows example listings. Requests, applications and donations are not sent or processed through this website.</Notice>
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
            <div className="eyebrow">About us</div>
            <h2 id="home-about-title" className="mt-3 text-4xl leading-tight sm:text-5xl">
              A connection to the right support starts here.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[var(--ink-soft)]">
              We are building a third-party connection between people who need help and independent
              NGOs, volunteers and supporters across India. Our role is to help people find relevant
              organisations, explain their needs and explore ways to contribute. Referrals are not live
              yet, and an NGO always decides whether it can assist.
            </p>
            <Link to="/about" className="btn btn-outline mt-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)]">
              Learn More <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="care-categories" className="border-y border-[var(--line)] bg-[var(--white)]" aria-labelledby="care-categories-title">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="eyebrow">Areas of need</div>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 id="care-categories-title" className="text-4xl">Explore care categories.</h2>
            <p className="max-w-md text-sm leading-6 text-[var(--ink-soft)]">
              Explore what support can look like, from immediate essentials to longer-term guidance.
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
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--coral-dark)]">Care area {category.number}</div>
                  <h3 className="mt-3 text-2xl">{category.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{category.text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[var(--ink)]">
                    Explore area <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="community-photos" className="scroll-mt-24 border-y border-[var(--line)] bg-[var(--paper-deep)]" aria-labelledby="community-photos-title">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="eyebrow">User-provided photos · Reference gallery</div>
          <h2 id="community-photos-title" className="mt-3 text-4xl">Community moments in pictures.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--ink-soft)]">
            These reference photos show situations related to community care, but the people,
            events and organisations pictured have not been verified as our activities. One
            health-camp photo displays another organisation&apos;s branding.
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

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="eyebrow">What guides our approach</div>
        <h2 className="mt-3 text-4xl">Clarity and care in every connection.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {[
            ["Dignity first", "Treat every request as a person’s story, not a case number."],
            ["Clear expectations", "Be honest about what the platform and each NGO can do."],
            ["Useful information", "Help people understand causes and find relevant organisations."],
            ["Local choice", "Respect an NGO’s own decisions, capacity and community knowledge."],
          ].map(([value, description]) => (
            <div className="border-l-2 border-[var(--sun)] pl-4" key={value}>
              <h3 className="text-xl">{value}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}