import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Heart, RotateCcw } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Notice } from "../components/UI";
import { fixedAmounts, impactOptions, rupees } from "../donationOptions";

const frequencies = ["One-time", "Monthly", "Quarterly", "Yearly"] as const;
type Frequency = (typeof frequencies)[number];
const featuredAmounts = fixedAmounts.slice(0, 4);
const ribbonColors = ["bg-[#f3dfb9] text-[var(--ink)]", "bg-[#d9e8d9] text-[var(--ink)]", "bg-[#a9cbc0] text-[var(--ink)]", "bg-[#245e54] text-white"];
const maxOtherAmount = 1_000_000;

export function Donate() {
  const [searchParams] = useSearchParams();
  const initialAmount = impactOptions.find((option) => option.id === searchParams.get("theme"))?.amount ?? fixedAmounts[1];
  const initialIsFixed = fixedAmounts.some((amount) => amount === initialAmount);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(initialIsFixed ? initialAmount : null);
  const [otherAmount, setOtherAmount] = useState(initialIsFixed ? "" : String(initialAmount));
  const [frequency, setFrequency] = useState<Frequency>("One-time");
  const [preview, setPreview] = useState<{ amount: number; frequency: Frequency } | null>(null);
  const [error, setError] = useState("");
  const customValue = Number(otherAmount);
  const validOtherAmount = otherAmount.trim() !== "" && Number.isSafeInteger(customValue) && customValue >= 1 && customValue <= maxOtherAmount;
  const amountToPreview = selectedAmount ?? (validOtherAmount ? customValue : null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (amountToPreview === null) {
      setError("Enter a whole-rupee amount between ₹1 and ₹10,00,000.");
      return;
    }
    setError("");
    setPreview({ amount: amountToPreview, frequency });
  }

  function reset() {
    setSelectedAmount(fixedAmounts[1]);
    setOtherAmount("");
    setFrequency("One-time");
    setPreview(null);
    setError("");
  }

  return (
    <main className="bg-[linear-gradient(135deg,#e9dffa_0%,#f7f4ec_52%,#e8f0e9_100%)]">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:py-16">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--ink)]/25 bg-[var(--white)] shadow-[0_24px_70px_rgba(24,59,54,.12)]">
          <div className="border-b border-[var(--line)] px-6 py-6 sm:px-9 lg:flex lg:items-end lg:justify-between lg:gap-10 lg:px-10">
            <div>
              <div className="eyebrow">Giving · Explore a pledge</div>
              <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
                Giving begins with <em className="text-[var(--coral)]">care.</em>
              </h1>
            </div>
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
                <div className="absolute inset-x-5 bottom-5">
                  <div className="max-w-sm overflow-hidden rounded-xl shadow-lg">
                    {featuredAmounts.map((amount, index) => (
                      <div key={amount} className={`px-4 py-3 text-center ${ribbonColors[index]}`}>
                        <strong className="font-['Fraunces'] text-lg">{rupees(amount)}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                      This shows the amount and frequency you chose. It is not a receipt,
                      commitment, or confirmation of payment.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[var(--paper)] p-6">
                    <p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--coral-dark)]">Preview amount</p>
                    <p className="mt-2 font-['Fraunces'] text-4xl">{rupees(preview.amount)}</p>
                    <p className="mt-4 border-t border-[var(--line)] pt-4 text-sm text-[var(--ink-soft)]">
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
                <form onSubmit={submit} noValidate>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[var(--ink)]">
                    <span className="h-2 w-2 rounded-full bg-[#62a66d]" aria-hidden="true" />
                    Choose amount
                  </div>
                  <h2 className="mt-3 text-3xl sm:text-4xl">Choose an amount.</h2>
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
                    <legend className="text-sm font-bold">Fixed amounts</legend>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {fixedAmounts.map((amount) => (
                        <button
                          type="button"
                          key={amount}
                          aria-pressed={selectedAmount === amount}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setOtherAmount("");
                            setError("");
                          }}
                          className={`relative flex min-h-16 items-center justify-center rounded-xl border p-3 font-['Fraunces'] text-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)] ${
                            selectedAmount === amount
                              ? "border-[var(--ink)] bg-[#e5f0e9] text-[var(--ink)]"
                              : "border-[var(--line)] bg-[var(--white)] hover:border-[var(--ink)] hover:bg-[var(--paper)]"
                          }`}
                        >
                          {rupees(amount)}
                          {selectedAmount === amount && <Check size={15} className="absolute right-2 top-2" aria-hidden="true" />}
                        </button>
                      ))}
                    </div>
                    <label className={`mt-3 block rounded-xl border px-4 py-3 text-sm font-bold transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--coral)] ${
                      selectedAmount === null
                        ? "border-[var(--ink)] bg-[#e5f0e9]"
                        : "border-[var(--line)] bg-[var(--white)]"
                    }`}>
                      Other amount (₹)
                      <input
                        type="number"
                        inputMode="numeric"
                        min={1}
                        max={maxOtherAmount}
                        step={1}
                        value={otherAmount}
                        onFocus={() => {
                          setSelectedAmount(null);
                          setError("");
                        }}
                        onChange={(event) => {
                          setSelectedAmount(null);
                          setOtherAmount(event.target.value);
                          setError("");
                        }}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? "other-amount-error" : undefined}
                        placeholder="Enter a custom amount"
                        className="mt-2 block w-full bg-transparent py-1 text-lg font-semibold outline-none placeholder:text-sm placeholder:font-normal placeholder:text-[var(--ink-soft)]"
                      />
                    </label>
                  </fieldset>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-[var(--paper)] px-4 py-3 text-sm">
                    <span className="text-[var(--ink-soft)]">Selected amount</span>
                    <strong className="text-[var(--ink)]">{amountToPreview === null ? "Enter an amount" : rupees(amountToPreview)}</strong>
                  </div>
                  {error && <div id="other-amount-error" role="alert" className="mt-4"><Notice>{error}</Notice></div>}
                  <button type="submit" className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--ink)] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#285b52] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)]">
                    Continue to pledge preview <ArrowRight size={17} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}