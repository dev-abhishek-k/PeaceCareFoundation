import { useState, type FormEvent } from "react";
import { ArrowRight, Heart, RotateCcw, ShieldCheck } from "lucide-react";
import { Notice } from "../components/UI";

const amounts = [500, 1000, 2500, 5000];
const careAreas = ["Across all care areas", "Street dogs", "Children", "Adults & elders"];
const rupees = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export function Donate() {
  const [amountChoice, setAmountChoice] = useState<number | "custom">(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [careArea, setCareArea] = useState(careAreas[0]);
  const [preview, setPreview] = useState<{ amount: number; area: string } | null>(null);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const amount = amountChoice === "custom" ? Number(customAmount) : amountChoice;
    if (!Number.isSafeInteger(amount) || amount < 1 || amount > 1_000_000) {
      setError("Enter a whole amount between ₹1 and ₹10,00,000 to view the preview.");
      return;
    }
    setError("");
    setPreview({ amount, area: careArea });
  }

  function reset() {
    setAmountChoice(1000);
    setCustomAmount("");
    setCareArea(careAreas[0]);
    setError("");
    setPreview(null);
  }

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:gap-16 lg:pb-24 lg:pt-20">
        <div>
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
          <div className="mt-7 max-w-lg">
            <Notice tone="info">
              This is an interactive preview, not a donation form. No payment is taken,
              no pledge is sent or saved, and these programmes are not independently verified.
            </Notice>
          </div>
          <a href="#pledge-preview" className="btn btn-primary mt-7">
            Try the pledge preview <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div id="pledge-preview" className="scroll-mt-24 rounded-[2rem] border border-[var(--line)] bg-[var(--white)] p-6 shadow-[0_20px_60px_rgba(24,59,54,.06)] sm:p-9">
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
                  Care area: <strong className="text-[var(--ink)]">{preview.area}</strong>
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
            <form onSubmit={submit} noValidate>
              <div className="eyebrow">Your pledge · Preview only</div>
              <h2 className="mt-3 text-3xl sm:text-4xl">Choose an amount to preview.</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                These amounts are examples, not suggested gifts or a payment request.
              </p>

              <fieldset className="mt-8">
                <legend className="text-sm font-bold">Amount in rupees</legend>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {amounts.map((amount) => (
                    <button
                      type="button"
                      key={amount}
                      aria-pressed={amountChoice === amount}
                      onClick={() => { setAmountChoice(amount); setError(""); }}
                      className={`rounded-xl border px-4 py-4 text-left font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)] ${
                        amountChoice === amount
                          ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                          : "border-[var(--line)] bg-[var(--paper)] hover:border-[var(--ink)]"
                      }`}
                    >
                      {rupees(amount)}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="mt-6 block text-sm font-bold" htmlFor="custom-amount">
                Or enter another amount
              </label>
              <div className="relative mt-2">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-bold" aria-hidden="true">₹</span>
                <input
                  id="custom-amount"
                  className={`field pl-9 ${amountChoice === "custom" ? "border-[var(--ink)]" : ""}`}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={7}
                  placeholder="Whole rupees"
                  aria-label="Custom preview amount in rupees"
                  value={customAmount}
                  onFocus={() => setAmountChoice("custom")}
                  onChange={(event) => {
                    setCustomAmount(event.target.value.replace(/\D/g, ""));
                    setAmountChoice("custom");
                    setError("");
                  }}
                />
              </div>
              <p className="mt-2 text-xs text-[var(--ink-soft)]">For preview only · ₹1 to ₹10,00,000</p>

              <label className="mt-6 block text-sm font-bold" htmlFor="care-area">
                Care area to preview
              </label>
              <select
                id="care-area"
                className="field mt-2"
                value={careArea}
                onChange={(event) => setCareArea(event.target.value)}
              >
                {careAreas.map((area) => <option key={area} value={area}>{area}</option>)}
              </select>

              {error && <p role="alert" className="mt-5 rounded-xl border border-[#e2aaa0] bg-[#fff1ed] p-4 text-sm text-[#873f32]">{error}</p>}
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