import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Heart, RotateCcw, ShieldCheck } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Notice } from "../components/UI";
import { impactOptions, rupees, type ImpactOption } from "../donationOptions";

const frequencies = ["One-time", "Monthly", "Quarterly", "Yearly"] as const;
type Frequency = (typeof frequencies)[number];
const featuredPledges = [impactOptions[0], impactOptions[4], impactOptions[8], impactOptions[10]];
const ribbonColors = ["bg-[#f3dfb9] text-[var(--ink)]", "bg-[#d9e8d9] text-[var(--ink)]", "bg-[#a9cbc0] text-[var(--ink)]", "bg-[#245e54] text-white"];

export function Donate() {
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState<ImpactOption>(
    () => impactOptions.find((option) => option.id === searchParams.get("theme")) ?? impactOptions[1]
  );
  const [frequency, setFrequency] = useState<Frequency>("One-time");
  const [preview, setPreview] = useState<{ option: ImpactOption; frequency: Frequency } | null>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPreview({ option: selected, frequency });
  }

  function reset() {
    setSelected(impactOptions[1]);
    setFrequency("One-time");
    setPreview(null);
  }

  return (
    <main className="bg-[linear-gradient(135deg,#e9dffa_0%,#f7f4ec_52%,#e8f0e9_100%)]">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:py-16">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--ink)]/25 bg-[var(--white)] shadow-[0_24px_70px_rgba(24,59,54,.12)]">
          <div className="border-b border-[var(--line)] px-6 py-6 sm:px-9 lg:flex lg:items-end lg:justify-between lg:gap-10 lg:px-10">
            <div>
              <div className="eyebrow">Donate · Preview only</div>
              <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
                Giving begins with <em className="text-[var(--coral)]">care.</em>
              </h1>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--ink-soft)] lg:mt-0">
              Explore an illustrative donation pledge for animals, children, adults and elders.
              No live payments are offered.
            </p>
          </div>

          <div className="grid lg:grid-cols-[.9fr_1.1fr]">
            <figure className="flex min-w-0 flex-col bg-[var(--paper)]">
              <div className="relative min-h-[440px] flex-1 overflow-hidden lg:min-h-[760px]">
                <img
                  src="/images/donate-reference.jpg"
                  alt="Photo of adults and a child holding a box of school supplies."
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#102923]/75 via-transparent to-[#102923]/20" />
                <span className="absolute left-5 top-5 rounded-full bg-[var(--ink)]/90 px-3 py-1.5 text-xs font-semibold text-white">
                  Reference photo · Affiliation unverified
                </span>
                <div className="absolute inset-x-5 bottom-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[.14em] text-white">Illustrative pledge themes</p>
                  <div className="max-w-sm overflow-hidden rounded-xl shadow-lg">
                    {featuredPledges.map((option, index) => (
                      <div key={option.id} className={`flex items-center gap-4 px-4 py-3 text-sm ${ribbonColors[index]}`}>
                        <strong className="w-20 shrink-0 font-['Fraunces'] text-lg">{rupees(option.amount)}</strong>
                        <span className="font-semibold">{option.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <figcaption className="px-5 py-4 text-xs leading-5 text-[var(--ink-soft)]">
                User-provided photo. The people and activity pictured are not verified as Peace Care Foundation work.
              </figcaption>
            </figure>

            <div id="pledge-preview" className="min-w-0 scroll-mt-24 bg-[#fcfdfb] p-6 sm:p-9 lg:p-10">
              {preview ? (
                <div role="status" className="flex h-full flex-col justify-center space-y-6">
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
                    <p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--coral-dark)]">Preview amount</p>
                    <p className="mt-2 font-['Fraunces'] text-4xl">{rupees(preview.option.amount)}</p>
                    <p className="mt-4 border-t border-[var(--line)] pt-4 text-sm text-[var(--ink-soft)]">
                      Care theme: <strong className="text-[var(--ink)]">{preview.option.title} · {preview.option.area}</strong>
                    </p>
                    <p className="mt-2 text-sm text-[var(--ink-soft)]">
                      Frequency: <strong className="text-[var(--ink)]">{preview.frequency} · illustrative only</strong>
                    </p>
                  </div>
                  <Notice tone="info">
                    No payment was taken. Nothing was sent or saved; this preview resets
                    when you leave or refresh the page.
                  </Notice>
                  <button type="button" className="btn btn-outline self-start" onClick={reset}>
                    <RotateCcw size={16} aria-hidden="true" /> Try another preview
                  </button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[var(--ink)]">
                    <span className="h-2 w-2 rounded-full bg-[#62a66d]" aria-hidden="true" />
                    Choose amount · Preview only
                  </div>
                  <h2 className="mt-3 text-3xl sm:text-4xl">Choose a care theme.</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                    Twelve fixed-amount examples. These are not verified programmes,
                    actual costs or a payment request.
                  </p>

                  <fieldset className="mt-6">
                    <legend className="text-sm font-bold">Pledge frequency</legend>
                    <div className="mt-3 grid grid-cols-4 gap-1 rounded-xl bg-[var(--paper-deep)] p-1">
                      {frequencies.map((choice) => (
                        <button
                          key={choice}
                          type="button"
                          aria-pressed={frequency === choice}
                          onClick={() => setFrequency(choice)}
                          className={`whitespace-nowrap rounded-lg px-1 py-2.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)] sm:text-sm ${
                            frequency === choice ? "bg-[var(--white)] text-[var(--ink)] shadow-sm" : "text-[var(--ink-soft)] hover:bg-white/60"
                          }`}
                        >
                          {choice}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <fieldset className="mt-6">
                    <legend className="text-sm font-bold">Illustrative category and amount</legend>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {impactOptions.map((option) => (
                        <button
                          type="button"
                          key={option.id}
                          aria-pressed={selected.id === option.id}
                          onClick={() => setSelected(option)}
                          className={`flex min-h-[92px] flex-col rounded-xl border p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)] ${
                            selected.id === option.id
                              ? "border-[var(--ink)] bg-[#e5f0e9] text-[var(--ink)]"
                              : "border-[var(--line)] bg-[var(--white)] hover:border-[var(--ink)] hover:bg-[var(--paper)]"
                          }`}
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--coral-dark)]">{option.area}</span>
                          <span className="mt-1 text-xs font-semibold leading-4">{option.title}</span>
                          <span className="mt-auto flex w-full items-center justify-between pt-2 font-['Fraunces'] text-lg">
                            {rupees(option.amount)}
                            {selected.id === option.id && <Check size={16} aria-hidden="true" />}
                          </span>
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-[var(--paper)] px-4 py-3 text-sm">
                    <span className="text-[var(--ink-soft)]">Selected for preview</span>
                    <strong className="text-[var(--ink)]">{selected.title} · {rupees(selected.amount)}</strong>
                  </div>
                  <button type="submit" className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--ink)] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#285b52] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)]">
                    Continue to pledge preview <ArrowRight size={17} aria-hidden="true" />
                  </button>
                  <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-[var(--ink-soft)]">
                    <ShieldCheck size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                    No card details or personal information is required. Frequency choices are only a preview.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}