import { useState, type FormEvent } from "react";
import { opportunities } from "../mockData";
import { StateCityFields } from "../components/StateCityFields";
import { Notice, PageIntro } from "../components/UI";

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

  function chooseOpportunity(id: string) {
    update("opportunityId", id);
    setSubmitted(false);
    document.getElementById("volunteer-registration")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected || !form.name.trim() || !form.state || !form.city.trim() || form.motivation.trim().length < 10) {
      setError("Choose an opportunity and enter your name, state, city and a short reason (at least 10 characters).");
      return;
    }
    if (!form.consent) {
      setError("Please confirm that you understand this is only a sample preview.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-14 md:py-20">
      <PageIntro eyebrow="Volunteer · Sample preview" title="Give your time where it fits.">
        Explore sample opportunities and preview a volunteer registration. These are fictional
        placements; completing the form does not send or save an application.
      </PageIntro>

      <div className="mt-10 grid gap-4">
        {opportunities.map((opportunity) => (
          <article
            className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 md:flex md:justify-between md:gap-8"
            key={opportunity.id}
          >
            <div>
              <span className="eyebrow">{opportunity.category} · {opportunity.location}</span>
              <h2 className="mt-2 text-2xl">{opportunity.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--ink-soft)]">
                {opportunity.description}
              </p>
              <p className="mt-4 text-sm font-semibold">{opportunity.ngo}</p>
            </div>
            <button
              type="button"
              className="btn btn-primary mt-5 h-fit shrink-0 md:mt-0"
              aria-pressed={form.opportunityId === opportunity.id}
              onClick={() => chooseOpportunity(opportunity.id)}
            >
              Preview registration
            </button>
          </article>
        ))}
      </div>

      <section id="volunteer-registration" className="mt-14 scroll-mt-24">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="eyebrow">Your next step · Preview</div>
            <h2 className="mt-3 text-3xl">Volunteer registration preview</h2>
            <p className="mt-4 leading-7 text-[var(--ink-soft)]">
              Try the form to see what a volunteer application might ask. Your details stay on this
              page only and disappear when you leave or refresh.
            </p>
            <div className="mt-6">
              <Notice tone="info">
                This is not a live opportunity. No one receives your information or contacts you.
              </Notice>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 md:p-8">
            {submitted ? (
              <div role="status" className="space-y-5">
                <div className="eyebrow">Preview complete</div>
                <h3 className="text-3xl">Your preview is complete.</h3>
                <p className="leading-7 text-[var(--ink-soft)]">
                  You selected <strong>{selected?.title}</strong>. This was a sample preview only:
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
                  Sample opportunity <span aria-hidden="true">*</span>
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