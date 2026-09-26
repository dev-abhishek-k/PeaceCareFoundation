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
    text: "A person describes what they need and where they are. In this prototype, the request journey is a local preview only.",
  },
  {
    number: "02",
    title: "The platform suggests an NGO",
    text: "The intended process is to review the request and suggest an independent NGO whose focus and location may be relevant.",
  },
  {
    number: "03",
    title: "The NGO decides",
    text: "The NGO would decide whether it has the capacity to assist. A suggestion is not a promise that help will be available.",
  },
];

const people = [
  {
    icon: Users,
    title: "Help seekers",
    text: "Explore support areas, discover NGO profiles and outline a need in the request preview.",
    background: "bg-[#e9f1e9]",
  },
  {
    icon: Building2,
    title: "Independent NGOs",
    text: "Connect with people looking for relevant support while keeping decisions about their own services.",
    background: "bg-[#f9e9de]",
  },
  {
    icon: HandHeart,
    title: "Volunteers",
    text: "Explore possible ways to share time and skills. The opportunities shown here are illustrative.",
    background: "bg-[#f5ecd4]",
  },
  {
    icon: HeartHandshake,
    title: "Supporters",
    text: "Learn about causes and preview ways to contribute. This site does not take payments.",
    background: "bg-[#eae6f4]",
  },
];

const trustPlans = [
  {
    icon: ShieldCheck,
    title: "NGO verification",
    text: "We plan to introduce checks to help people understand who is listed. Profiles in this prototype are illustrative and not verified.",
  },
  {
    icon: ClipboardList,
    title: "Case updates",
    text: "We plan to make request progress easier to follow. The updates shown in this prototype are examples, not live case tracking.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy",
    text: "Privacy-aware handling of requests is a planned platform feature. This frontend prototype does not send or save requests to a service.",
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
              We envision a third-party coordination platform connecting people who need help
              with independent NGOs, volunteers and supporters across India. Discover NGOs,
              explore causes and preview how a request could be made.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--ink-soft)]">
              This is a UI prototype, not a live referral service. We do not directly run the
              listed NGO programmes or guarantee that a request will receive help.
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
              The platform is designed to help people find NGOs whose work may match their needs,
              while giving independent organisations a way to be discovered by the communities
              they serve. Our role is to help make connections, not to operate their programmes.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="how-title" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="eyebrow">An intended journey · Not a live referral service</div>
        <h2 id="how-title" className="mt-3 text-4xl sm:text-5xl">How it works</h2>
        <p className="mt-4 max-w-2xl leading-7 text-[var(--ink-soft)]">
          A simple path from asking for help to reaching an organisation that can make its own decision.
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
              Browse illustrative directory categories. A category describes a possible area of
              NGO work, not a verified service available through this prototype.
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
            These are planned features, not processes currently operating on this UI prototype.
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
            Discover NGOs and explore ways to get involved. These routes are previews; they do not
            send a real request, register a volunteer or create a partnership.
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