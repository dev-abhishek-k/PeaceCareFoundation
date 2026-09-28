import { useState, type FormEvent } from "react";
import { ArrowRight, Lightbulb, PackageOpen, RotateCcw, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Notice } from "../components/UI";

const waysToPartner = [
  {
    number: "01",
    icon: PackageOpen,
    title: "Share resources",
    text: "Explore in-kind support such as supplies, materials or practical equipment. Real needs would need to be confirmed together first.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Offer expertise",
    text: "Bring skills in planning, training, communication or logistics to a conversation about what could be useful.",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Connect communities",
    text: "Consider introductions or local collaboration with people and groups working toward more accessible care.",
  },
];

export function BecomePartner() {
  const [previewInterest, setPreviewInterest] = useState<string | null>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setPreviewInterest(String(form.get("interest")));
  }

  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pt-10 md:pt-16">
        <div className="grid overflow-hidden rounded-[2rem] bg-[var(--ink)] lg:grid-cols-[1.05fr_.95fr]">
          <div className="flex flex-col justify-center px-7 py-12 text-white sm:px-10 lg:px-14 lg:py-20">
            <div className="text-xs font-bold uppercase tracking-[.16em] text-[var(--sun)]">Partnerships · Working together</div>
            <h1 className="mt-5 max-w-xl text-5xl leading-[1.07] text-white sm:text-6xl">
              Become a <em className="text-[var(--sun)]">partner.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
              Organisations, businesses and community groups can bring resources, expertise and
              local knowledge to shared needs. Explore how collaboration with independent NGOs
              could take shape.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a className="btn btn-primary" href="#partner-interest">
                Explore the interest form <ArrowRight size={17} aria-hidden="true" />
              </a>
              <Link className="border-b border-white/60 pb-1 text-sm font-semibold text-white hover:border-white" to="/programs">
                Explore our work
              </Link>
            </div>
          </div>
          <figure className="relative min-h-80 bg-[#d9d0b6] sm:min-h-[440px]">
            <img
              src="/images/partner-reference.webp"
              alt="Five adults seated together at a table, with two people shaking hands."
              className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
            />
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="eyebrow">Ways to explore</div>
        <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-xl text-4xl leading-tight sm:text-5xl">There is more than one way to help.</h2>
          <p className="max-w-md text-sm leading-6 text-[var(--ink-soft)]">
            Start with what you can offer and what a community may need. Strong partnerships
            take shape around shared goals and practical contributions.
          </p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {waysToPartner.map((way) => {
            const Icon = way.icon;
            return (
              <article key={way.number} className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-7">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6eee3] text-[var(--ink)]">
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <span className="font-['Fraunces'] text-xl text-[var(--coral-dark)]">{way.number}</span>
                </div>
                <h3 className="mt-6 text-2xl">{way.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{way.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="partner-interest" className="scroll-mt-20 bg-[#e9efe8] px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div>
            <div className="eyebrow">Partnership opportunities</div>
            <h2 className="mt-3 max-w-md text-4xl leading-tight sm:text-5xl">Start with what you can offer.</h2>
            <p className="mt-5 max-w-md leading-8 text-[var(--ink-soft)]">
              Your organisation can bring resources, expertise or local connections to a shared goal.
              Strong partnerships begin with listening to what independent NGOs need and finding
              practical ways to contribute.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--white)] p-6 shadow-[0_18px_40px_rgba(24,59,54,.06)] sm:p-9">
            {previewInterest ? (
              <div role="status" className="space-y-5">
                <div className="eyebrow">Preview complete · Nothing submitted</div>
                <h3 className="text-3xl">Your idea, in preview.</h3>
                <p className="leading-7 text-[var(--ink-soft)]">
                  You selected <strong className="text-[var(--ink)]">{previewInterest}</strong> as a possible
                  way to collaborate. This is not a partnership request or confirmation.
                </p>
                <Notice tone="success">Nothing was sent or saved. No one will contact you from this form.</Notice>
                <button type="button" className="btn btn-outline" onClick={() => setPreviewInterest(null)}>
                  <RotateCcw size={16} aria-hidden="true" /> Try another preview
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <h3 className="text-2xl">Your partnership idea</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-semibold">
                    Organisation or group <span aria-hidden="true">*</span>
                    <input className="field mt-2" name="organisation" autoComplete="organization" maxLength={120} required />
                  </label>
                  <label className="block text-sm font-semibold">
                    Work email <span aria-hidden="true">*</span>
                    <input className="field mt-2" name="email" type="email" autoComplete="email" maxLength={255} required />
                  </label>
                </div>
                <label className="block text-sm font-semibold">
                  How would you like to contribute? <span aria-hidden="true">*</span>
                  <select className="field mt-2" name="interest" defaultValue="" required>
                    <option value="" disabled>Select an area of support</option>
                    <option value="Sharing resources">Sharing resources</option>
                    <option value="Offering expertise">Offering expertise</option>
                    <option value="Connecting communities">Connecting communities</option>
                    <option value="Another idea">Another idea</option>
                  </select>
                </label>
                <label className="block text-sm font-semibold">
                  Describe your partnership idea <span aria-hidden="true">*</span>
                  <textarea
                    className="field mt-2 min-h-28"
                    name="idea"
                    placeholder="What resources, skills or local connections could your organisation offer?"
                    minLength={20}
                    maxLength={1000}
                    required
                  />
                </label>
                <label className="flex items-start gap-3 text-sm leading-6">
                  <input className="mt-1.5" type="checkbox" required />
                  <span>I understand this form does not send an enquiry or save my details.</span>
                </label>
                <button className="btn btn-primary w-full" type="submit">
                  View interest summary <ArrowRight size={17} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}