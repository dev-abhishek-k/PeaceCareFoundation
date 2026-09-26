import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { opportunities } from "../mockData";
import { StateCityFields } from "../components/StateCityFields";
import { Notice } from "../components/UI";

type VolunteerForm = {
  opportunityId: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  availability: string;
  motivation: string;
  consent: boolean;
};

const emptyForm: VolunteerForm = {
  opportunityId: "",
  name: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  availability: "",
  motivation: "",
  consent: false,
};

export function Volunteer() {
  const [form, setForm] = useState<VolunteerForm>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const selected = opportunities.find((item) => item.id === form.opportunityId);

  function update<K extends keyof VolunteerForm>(key: K, value: VolunteerForm[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setError("");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected || !form.name.trim() || !form.state || !form.city.trim() || form.motivation.trim().length < 10) {
      setError("Choose an opportunity and enter your name, state, city and a short reason (at least 10 characters).");
      return;
    }
    if (!form.consent) {
      setError("Please confirm that you understand this is only a preview.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-8 md:pb-24 md:pt-12">
      <section className="overflow-hidden rounded-[2rem] border border-[#d5e1df] bg-[#fffefd] shadow-[0_22px_55px_rgba(24,59,54,.09)]">
        <div className="grid items-center lg:min-h-[570px] lg:grid-cols-[.94fr_1.06fr]">
          <div className="relative z-10 px-7 pb-0 pt-12 sm:px-12 lg:py-16 lg:pl-16 lg:pr-4">
            <div className="eyebrow">Volunteer · Share your time and skills</div>
            <h1
              className="mt-6 max-w-xl text-[clamp(3.25rem,5.5vw,5.4rem)] font-bold leading-[1.02] tracking-[-.065em] text-[var(--ink)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="text-[var(--coral)]">Volunteer</span>
              <br />
              with purpose.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--ink-soft)] sm:text-lg">
              Explore ways your skills and availability could meet local needs. Find a role that
              interests you and preview how you would express interest.
            </p>
            <a
              href="#volunteer-registration"
              className="btn btn-primary mt-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
            >
              Explore roles <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="relative flex h-[370px] items-end justify-center overflow-hidden px-3 sm:h-[440px] lg:h-full lg:min-h-[570px] lg:items-center lg:px-5">
            <div aria-hidden="true" className="absolute bottom-[-13rem] right-[-7rem] h-[35rem] w-[35rem] rounded-full bg-[#eef5f0] sm:bottom-[-11rem] lg:bottom-[-14rem]" />
            <img
              src="/images/volunteer-illustration.svg"
              alt="Illustration of volunteers collecting litter, planting a sapling, and carrying supplies."
              className="relative z-10 h-full max-h-[540px] w-full max-w-[590px] object-contain object-bottom lg:object-center"
            />
          </div>
        </div>
      </section>

      <section id="volunteer-registration" className="mt-16 scroll-mt-24 md:mt-24">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 md:p-8">
            {submitted ? (
              <div role="status" className="space-y-5">
                <div className="eyebrow">Preview complete</div>
                <h3 className="text-3xl">Your preview is complete.</h3>
                <p className="leading-7 text-[var(--ink-soft)]">
                  You selected <strong>{selected?.title}</strong>. This was a preview only:
                  nothing was sent or saved, and no placement has been reserved.
                </p>
                <Notice tone="success">Preview submission only—nothing sent or saved.</Notice>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setForm(emptyForm);
                    setSubmitted(false);
                  }}
                >
                  Try another registration
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <h3 className="text-2xl">Tell us how you would help</h3>
                  <p className="mt-2 text-sm text-[var(--ink-soft)]">
                    All fields marked required are checked in this browser only.
                  </p>
                </div>

                <label className="block text-sm font-semibold">
                  Opportunity preview <span aria-hidden="true">*</span>
                  <select
                    required
                    className="field mt-2"
                    value={form.opportunityId}
                    onChange={(event) => update("opportunityId", event.target.value)}
                  >
                    <option value="">Choose an opportunity</option>
                    {opportunities.map((item) => (
                      <option value={item.id} key={item.id}>{item.title}</option>
                    ))}
                  </select>
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-semibold">
                    Full name <span aria-hidden="true">*</span>
                    <input
                      className="field mt-2"
                      required
                      maxLength={100}
                      autoComplete="name"
                      value={form.name}
                      onChange={(event) => update("name", event.target.value)}
                    />
                  </label>
                  <label className="text-sm font-semibold">
                    Email <span aria-hidden="true">*</span>
                    <input
                      className="field mt-2"
                      type="email"
                      required
                      maxLength={255}
                      autoComplete="email"
                      value={form.email}
                      onChange={(event) => update("email", event.target.value)}
                    />
                  </label>
                  <label className="text-sm font-semibold">
                    Phone (optional)
                    <input
                      className="field mt-2"
                      type="tel"
                      maxLength={20}
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(event) => update("phone", event.target.value)}
                    />
                  </label>
                  <StateCityFields
                    className="grid gap-4 sm:col-span-2 sm:grid-cols-2"
                    state={form.state}
                    city={form.city}
                    onStateChange={(value) => {
                      setForm((current) => ({ ...current, state: value, city: "" }));
                      setError("");
                    }}
                    onCityChange={(value) => update("city", value)}
                  />
                </div>

                <label className="block text-sm font-semibold">
                  Availability <span aria-hidden="true">*</span>
                  <select
                    required
                    className="field mt-2"
                    value={form.availability}
                    onChange={(event) => update("availability", event.target.value)}
                  >
                    <option value="">Choose your availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="flexible">Flexible hours</option>
                    <option value="events">Occasional events</option>
                  </select>
                </label>
                <label className="block text-sm font-semibold">
                  Why would you like to volunteer? <span aria-hidden="true">*</span>
                  <textarea
                    required
                    minLength={10}
                    maxLength={1000}
                    className="field mt-2 min-h-28"
                    value={form.motivation}
                    onChange={(event) => update("motivation", event.target.value)}
                    placeholder="Tell us what interests you about this kind of work."
                  />
                </label>
                <label className="flex items-start gap-3 text-sm leading-6">
                  <input
                    type="checkbox"
                    className="mt-1.5"
                    required
                    checked={form.consent}
                    onChange={(event) => update("consent", event.target.checked)}
                  />
                  <span>I understand this is a preview and no application will be sent or saved.</span>
                </label>
                {error && <div role="alert"><Notice>{error}</Notice></div>}
                <button type="submit" className="btn btn-primary w-full">
                  Show preview confirmation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}