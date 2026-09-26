import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Heart, RotateCcw, ShieldCheck } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Notice } from "../components/UI";
import { impactOptions, rupees, type ImpactOption } from "../donationOptions";

export function Donate() {
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState<ImpactOption>(
    () => impactOptions.find((option) => option.id === searchParams.get("theme")) ?? impactOptions[1]
  );
  const [preview, setPreview] = useState<ImpactOption | null>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPreview(selected);
  }

  function reset() {
    setSelected(impactOptions[1]);
    setPreview(null);
  }

  return (
    <main>
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-5 pb-16 pt-14 lg:flex-row lg:items-start lg:gap-16 lg:pb-24 lg:pt-20">
        <div className="min-w-0 lg:w-[43%] lg:shrink-0">
          <figure className="mb-10">
            <div className="relative">
              <img
                src="/images/donate-reference.jpg"
                alt="Photo of adults and a child holding a box of school supplies."
                className="aspect-video w-full rounded-[2rem] object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-[var(--ink)]/90 px-3 py-1 text-xs font-semibold text-white">
                Reference photo · Affiliation unverified
              </span>
            </div>
            <figcaption className="mt-3 text-xs leading-5 text-[var(--ink-soft)]">
              User-provided photo. The people and activity pictured are not verified as Peace Care Foundation work.
            </figcaption>
          </figure>
          <div className="eyebrow">Donate · Preview only</div>
          <h1 className="mt-5 max-w-xl text-5xl leading-[1.05] sm:text-6xl">
            Giving begins with <em className="text-[var(--coral)]">care.</em>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[var(--ink-soft)]">
            Explore how a donation pledge could look for the care areas described here:
            homeless dogs, children, adults and elders.
          </p>
        </div>

        <div id="pledge-preview" className="w-full min-w-0 scroll-mt-24 rounded-[2rem] border border-[var(--line)] bg-[var(--white)] p-6 shadow-[0_20px_60px_rgba(24,59,54,.06)] sm:p-9 lg:flex-1">
          {preview ? (
            <div role="status" className="space-y-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e7f0df] text-[var(--ink)]">
                <Heart size={26} aria-hidden="true" />
              </span>
              <div>
                <div className="eyebrow">Preview complete · Nothing submitted</div>
                <h2 className="mt-3 text-3xl sm:text-4xl">Here’s your pledge preview.</h2>
                <p className="mt-3 leading-7 text-[var(--ink-soft)]">
                  This is only an illustration of a donation choice. It is not a receipt,
                  commitment, or confirmation of payment.
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--paper)] p-6">
                <p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--coral-dark)]">
                  Preview amount
                </p>
                <p className="mt-2 font-['Fraunces'] text-4xl">{rupees(preview.amount)}</p>
                <p className="mt-4 border-t border-[var(--line)] pt-4 text-sm text-[var(--ink-soft)]">
                  Care theme: <strong className="text-[var(--ink)]">{preview.title} · {preview.area}</strong>
                </p>
              </div>
              <Notice tone="info">
                No payment was taken. Nothing was sent or saved; this preview resets
                when you leave or refresh the page.
              </Notice>
              <button type="button" className="btn btn-outline" onClick={reset}>
                <RotateCcw size={16} aria-hidden="true" /> Try another preview
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="eyebrow">Choose your focus · Preview only</div>
              <h2 className="mt-3 text-3xl sm:text-4xl">Choose a care theme.</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                Twelve fixed-amount examples with illustrative artwork. These are not verified programmes,
                actual costs or a payment request.
              </p>

              <div className="mt-6 flex items-center justify-between gap-3 rounded-xl bg-[var(--paper-deep)] px-4 py-3 text-sm">
                <span className="text-[var(--ink-soft)]">Selected for preview</span>
                <strong className="text-right text-[var(--ink)]">{selected.title} · {rupees(selected.amount)}</strong>
              </div>

              <fieldset className="mt-6">
                <legend className="text-sm font-bold">Illustrative category and amount</legend>
                <div className="mt-3 flex flex-col gap-3">
                  {impactOptions.map((option) => (
                    <button
                      type="button"
                      key={option.id}
                      aria-pressed={selected.id === option.id}
                      onClick={() => setSelected(option)}
                      className={`flex w-full flex-col overflow-hidden rounded-2xl border text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)] sm:flex-row ${
                        selected.id === option.id
                          ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                          : "border-[var(--line)] bg-[var(--paper)] hover:border-[var(--ink)] hover:bg-[var(--paper-deep)]"
                      }`}
                    >
                      <img src={option.image} alt="" loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover sm:aspect-auto sm:h-40 sm:w-52 sm:shrink-0" />
                      <span className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
                        <span className={`block text-[11px] font-bold uppercase tracking-wider ${selected.id === option.id ? "text-white/75" : "text-[var(--coral-dark)]"}`}>{option.area}</span>
                        <span className="mt-1 block text-sm font-bold leading-5">{option.title}</span>
                        <span className="mt-3 flex items-center justify-between font-['Fraunces'] text-xl">
                          {rupees(option.amount)}
                          {selected.id === option.id && <Check size={18} aria-hidden="true" />}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <button type="submit" className="btn btn-primary mt-7 w-full">
                Show pledge preview <ArrowRight size={17} aria-hidden="true" />
              </button>
              <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-[var(--ink-soft)]">
                <ShieldCheck size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                No card details, payment, account or personal information is required.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}