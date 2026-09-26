import {
  ArrowRight,
  Building2,
  ClipboardList,
  HandHeart,
  HeartHandshake,
  LockKeyhole,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../mockData";

const steps = [
  {
    number: "01",
    title: "People request help",
    text: "Someone can describe the support they’re looking for and their location. Here, they can only preview the request journey; nothing is sent.",
  },
  {
    number: "02",
    title: "The platform suggests an NGO",
    text: "The idea is to help people discover independent NGOs that may be relevant to their needs and location. Directory profiles here are examples, not verified listings.",
  },
  {
    number: "03",
    title: "The NGO decides",
    text: "Each independent NGO would decide for itself whether it can help. A suggested match is never a guarantee of support.",
  },
];

const people = [
  {
    icon: Users,
    title: "Help seekers",
    text: "Explore different kinds of support, browse NGO profiles and try out a request preview. No request is sent.",
    background: "bg-[#e9f1e9]",
  },
  {
    icon: Building2,
    title: "Independent NGOs",
    text: "Discover how a directory could help people find organisations like yours. Any listing or partnership journey here is a preview, and NGOs remain independent.",
    background: "bg-[#f9e9de]",
  },
  {
    icon: HandHeart,
    title: "Volunteers",
    text: "See example ways to share your time and skills. Opportunities and volunteer sign-up are previews, not active placements.",
    background: "bg-[#f5ecd4]",
  },
  {
    icon: HeartHandshake,
    title: "Supporters",
    text: "Explore causes and see how a contribution might work. This site does not accept donations or take payments.",
    background: "bg-[#eae6f4]",
  },
];

const trustPlans = [
  {
    icon: ShieldCheck,
    title: "NGO verification",
    text: "We hope to add checks that make directory listings easier to assess. Profiles shown here are examples and have not been verified.",
  },
  {
    icon: ClipboardList,
    title: "Case updates",
    text: "We hope to make it easier to follow a request’s progress. Updates shown here are examples, not live case tracking.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy",
    text: "Careful handling of requests is something we plan to build. This prototype does not send or save requests to a service.",
  },
];

const actions = [
  { label: "Request Help", to: "/request-help" },
  { label: "Browse NGOs", to: "/ngos" },
  { label: "Become a Volunteer", to: "/volunteer" },
  { label: "Become a Partner", to: "/become-a-partner" },
];

export function About() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#e7eee5_0%,#f7f4ec_52%,#f7e9df_100%)]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.05fr_.95fr] md:gap-16 md:py-24">
          <div>
            <div className="eyebrow">About us · Frontend prototype</div>
            <h1 className="mt-5 max-w-2xl text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
              Connecting people with the <em className="text-[var(--coral)]">right help</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">
              We’re building a way to explore independent NGOs, causes and ways to get involved
              across India. Use this prototype to browse organisations and see what a request
              might look like.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--ink-soft)]">
              Our goal is a third-party coordination platform, not an NGO service provider.
              This is a preview, not a live referral service; we don’t run NGO programmes or
              guarantee assistance.
            </p>
            <Link to="/ngos" className="btn btn-primary mt-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]">
              Explore NGO profiles <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <figure className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--white)] shadow-[0_24px_60px_rgba(24,59,54,.12)]">
            <img
              src="/images/browse-ngos-reference.jpg"
              alt="People talking near tables with plants, books and supplies at an indoor event."
              className="h-72 w-full object-cover object-[center_12%] sm:h-96 md:h-[490px]"
            />
            <figcaption className="px-5 py-3 text-xs leading-5 text-[var(--ink-soft)]">
              Reference photo only · People and activities pictured are not verified as part of this platform.
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="mission-title" className="bg-[var(--ink)] text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:grid-cols-[.4fr_1fr] md:gap-16 md:py-20">
          <div className="text-xs font-bold uppercase tracking-[.16em] text-[var(--sun)]">Our mission</div>
          <div>
            <h2 id="mission-title" className="max-w-3xl text-3xl leading-tight text-white sm:text-4xl">
              Make relevant support easier to find, and communities easier to reach.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/80">
              We want to make it easier to discover independent NGOs whose work may fit a need,
              and easier for organisations to be found. We help people explore connections; each
              NGO runs its own programmes and decides what support it can offer.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="how-title" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="eyebrow">An intended journey · Not a live referral service</div>
        <h2 id="how-title" className="mt-3 text-4xl sm:text-5xl">How it works</h2>
        <p className="mt-4 max-w-2xl leading-7 text-[var(--ink-soft)]">
          Here’s how we imagine a connection could happen. For now, you can explore the steps, but no referral is made.
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 sm:p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e7eee7] font-['Fraunces'] text-xl text-[var(--ink)]" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="mt-8 text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="people-title" className="border-y border-[var(--line)] bg-[var(--white)]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <div className="eyebrow">People and organisations</div>
          <h2 id="people-title" className="mt-3 text-4xl sm:text-5xl">Who we connect</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {people.map((person) => {
              const Icon = person.icon;
              return (
                <article key={person.title} className={`${person.background} rounded-2xl p-6 sm:p-7`}>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--white)] text-[var(--ink)]">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-9 text-2xl">{person.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{person.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="causes-title" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="eyebrow">Find an area of support</div>
            <h2 id="causes-title" className="mt-3 text-4xl sm:text-5xl">Causes we support</h2>
            <p className="mt-4 max-w-2xl leading-7 text-[var(--ink-soft)]">
              Browse areas of work that independent NGOs may focus on. Categories and directory
              entries are examples, not confirmation of a verified service available here.
            </p>
          </div>
          <Link to="/ngos" className="btn btn-outline self-start whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)]">
            Browse NGOs <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-9 flex flex-wrap gap-2.5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/ngos?category=${encodeURIComponent(category.id)}`}
              className="rounded-full border border-[var(--line)] bg-[var(--white)] px-4 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--ink)] hover:bg-[#e7eee7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)]"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="trust-title" className="border-y border-[var(--line)] bg-[var(--paper-deep)]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <div className="eyebrow">What we want to build</div>
          <h2 id="trust-title" className="mt-3 text-4xl sm:text-5xl">Trust &amp; transparency</h2>
          <p className="mt-4 max-w-2xl leading-7 text-[var(--ink-soft)]">
            We’d like to add these features over time. They aren’t active services or processes in this prototype.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trustPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                <article key={plan.title} className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 sm:p-7">
                  <Icon className="text-[var(--coral-dark)]" size={28} aria-hidden="true" />
                  <h3 className="mt-5 text-2xl">{plan.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{plan.text}</p>
                  <span className="mt-6 inline-block rounded-full bg-[var(--paper-deep)] px-3 py-1 text-xs font-bold text-[var(--ink)]">
                    Planned · Not active
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="next-title" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="rounded-[2rem] bg-[var(--ink)] px-6 py-12 text-white sm:px-10 md:px-14 md:py-16">
          <div className="text-xs font-bold uppercase tracking-[.16em] text-[var(--sun)]">Explore the prototype</div>
          <h2 id="next-title" className="mt-3 max-w-2xl text-4xl leading-tight text-white sm:text-5xl">
            Find your place in the network.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-white/80">
            Browse independent NGOs and explore ways to take part. The pages linked here are
            previews: they don’t send help requests, accept volunteer or partner applications, or
            create a partnership.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((action, index) => (
              <Link
                key={action.to}
                to={action.to}
                className={`${index === 0 ? "bg-[var(--sun)] text-[var(--ink)] hover:bg-[#f2ce87]" : "border border-white/60 text-white hover:bg-white/10"} inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sun)]`}
              >
                {action.label} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}