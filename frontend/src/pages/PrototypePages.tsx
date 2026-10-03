import { useMemo, useState } from "react";
import { ArrowRight, Check, Search, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { categories, ngos } from "../mockData";
import { StateCityFields } from "../components/StateCityFields";
import { citiesForState, states } from "../locations";
import type { NGO } from "../types";
import { Button, EmptyState, Field, Notice, PageIntro } from "../components/UI";

const defaultArtwork = {
  src: "/images/hero-care.jpg",
  alt: "Illustration of a dog, books and a folded shawl in a neighborhood courtyard.",
  caption: "Illustrative artwork",
};

const browsePhoto = {
  src: "/images/browse-ngos-reference.jpg",
  alt: "Photo of people talking beside tables with plants, books and supplies at an indoor event.",
  position: "object-[center_12%]",
};

const Shell = ({children, image}:{children:React.ReactNode; image?: {src: string; alt: string; position?: string}}) => {
  const artwork = image ?? defaultArtwork;
  return <main className="mx-auto min-h-[60vh] max-w-7xl px-5 py-14 md:py-20">
    <figure className={`relative mb-10 overflow-hidden rounded-2xl ${image ? "h-56 sm:h-72" : "h-36 sm:h-44"}`}>
      <img src={artwork.src} alt={artwork.alt} className={`h-full w-full object-cover ${image?.position ?? (image ? "object-[center_28%]" : "object-[center_48%]")}`} />
      {!image && <figcaption className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-full bg-[var(--ink)]/90 px-3 py-1 text-xs font-semibold text-white">{defaultArtwork.caption}</figcaption>}
    </figure>
    {children}
  </main>;
};
export { HomePeace } from "./HomePeace";

export { Programs } from "./Programs";

export function PeaceInfo({kind}:{kind:string}) {
  const content: Record<string,{title:string; eyebrow:string; text:string; extra?:string}> = {
    contact: { eyebrow:"Contact · Get in touch", title:"A conversation starts with clarity.", text:"We are working toward a way for people and independent NGOs to connect. There is no public contact channel on this website yet, and messages cannot be sent from this page.", extra:"For now, explore the support areas and see how a help request or volunteer enquiry would be structured. Do not enter urgent or sensitive details into the demo forms." },
    faq: { eyebrow:"FAQ · What to know", title:"Clear answers, before you begin.", text:"What is our role? We aim to connect people with relevant independent NGOs; each organisation decides whether it can assist. Are the directory profiles verified? No, the current listings are examples. Can you request help or donate here today? No, forms stay on this page and no payments are taken.", extra:"NGO verification, live referrals, updates and privacy-aware handling are planned features, not services running on this website." }
  };
  const item = content[kind] || content.contact;
  return <Shell><PageIntro eyebrow={item.eyebrow} title={item.title}>Find out what this platform is for and what is available today.</PageIntro><div className="mt-10 max-w-2xl rounded-2xl border border-[var(--line)] bg-[var(--white)] p-7 text-lg leading-8 text-[var(--ink-soft)]"><p>{item.text}</p>{item.extra&&<p className="mt-6 border-l-2 border-[var(--sun)] pl-4 text-base">{item.extra}</p>}</div></Shell>;
}
export function Browse() {
  const params = new URLSearchParams(location.search);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(params.get("category") || "");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const cities = citiesForState(state);
  const filtered = useMemo(() => ngos.filter(n =>
    (!q || n.name.toLowerCase().includes(q.toLowerCase())) &&
    (!cat || n.categories.includes(cat)) &&
    (!state || n.state === state) &&
    (!city || n.cities.includes(city))
  ), [q, cat, state, city]);

  return <Shell image={browsePhoto}>
    <PageIntro eyebrow="Browse NGOs · Explore by need" title="Find the right area of support.">
      Search by cause and location to explore the kinds of support an NGO may focus on.
    </PageIntro>
    <div className="mt-10 grid gap-3 rounded-2xl bg-[var(--paper-deep)] p-4 md:grid-cols-4">
      <label className="relative">
        <Search className="absolute left-3 top-3.5" size={16} aria-hidden="true"/>
        <input className="field pl-9" aria-label="Search NGOs by name" placeholder="Name" value={q} onChange={e => setQ(e.target.value)}/>
      </label>
      <select className="field" aria-label="Filter by category" value={cat} onChange={e => setCat(e.target.value)}>
        <option value="">All categories</option>
        {categories.map(c => <option value={c.id} key={c.id}>{c.name}</option>)}
      </select>
      <select className="field" aria-label="Filter by state" value={state} onChange={e => { setState(e.target.value); setCity(""); }}>
        <option value="">All states</option>
        {states.map(s => <option key={s}>{s}</option>)}
      </select>
      <select className="field" aria-label="Filter by city" value={city} onChange={e => setCity(e.target.value)} disabled={!state}>
        <option value="">{state ? "All cities" : "Select a state first"}</option>
        {cities.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
    <div className="mt-10">
      {filtered.length
        ? <div className="grid gap-5 md:grid-cols-2">{filtered.map(n => <NgoCard ngo={n} key={n.id}/>)}</div>
        : <EmptyState title="No preview profiles match those filters." text="Try removing a filter or searching a broader term."/>}
    </div>
  </Shell>;
}
function NgoCard({ngo}:{ngo:NGO}){return <Link to={`/ngos/${ngo.id}`} className="group rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 hover:-translate-y-1 hover:border-[var(--coral)]"><div className="flex justify-between"><div><span className="rounded-full bg-[#f8e5d9] px-3 py-1 text-xs font-bold text-[var(--coral-dark)]">Example profile</span><h2 className="mt-5 text-2xl">{ngo.name}</h2></div><ShieldCheck className="text-[var(--coral)]"/></div><p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{ngo.summary}</p><div className="mt-5 flex items-center justify-between text-sm"><span>{ngo.state} · {ngo.cities.join(", ")}</span><ArrowRight size={16}/></div></Link>}
export function NgoDetail(){
  const ngo = ngos.find(n => n.id === useParams().id);
  if (!ngo) return <Shell><EmptyState title="Profile not found" text="Return to the directory to explore support areas."/><Link className="btn btn-primary mt-5" to="/ngos">Back to directory</Link></Shell>;
  return <Shell>
    <PageIntro eyebrow="Example NGO profile" title={ngo.name}>Explore the causes and locations an NGO profile can describe.</PageIntro>
    <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_.8fr]">
      <article className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-7">
        <div className="flex flex-wrap gap-2">{ngo.categories.map(id=><span className="rounded-full bg-[#f8e5d9] px-3 py-1 text-xs font-semibold" key={id}>{categories.find(c=>c.id===id)?.name}</span>)}</div>
        <p className="mt-7 text-lg leading-8">{ngo.description}</p>
        <h3 className="mt-10 text-2xl">Location example</h3>
        <p className="mt-2 text-[var(--ink-soft)]">{ngo.state} · {ngo.cities.join(", ")}</p>
        <h3 className="mt-10 text-2xl">Contact example</h3>
        <p className="mt-2 text-[var(--ink-soft)]">{ngo.contact} · {ngo.email}</p>
      </article>
      <aside className="h-fit rounded-2xl bg-[var(--ink)] p-7 text-white">
        <ShieldCheck className="text-[var(--sun)]" aria-hidden="true"/>
        <h3 className="mt-5 text-2xl text-white">Directory status</h3>
        <p className="mt-3 text-sm leading-6 text-white/70">Example listing · No verified organisation or live contact</p>
        <Link to="/request-help" className="btn btn-primary mt-7 w-full">Explore request steps</Link>
      </aside>
    </div>
  </Shell>;
}
export function Register(){const [done,setDone]=useState(false);return <Shell><PageIntro eyebrow="NGO registration · Form demo" title="Tell people what your NGO does.">A clear profile can help people understand an organisation’s focus and service locations. This form shows the information a future registration might request; it does not create an account or listing.</PageIntro>{done?<div className="mt-10 max-w-2xl"><Notice tone="success">Form demo complete—nothing sent or saved. No profile was created.</Notice></div>:<form className="mt-10 grid max-w-2xl gap-4 rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 md:grid-cols-2" onSubmit={e=>{e.preventDefault();setDone(true)}}><Field label="Organisation name" required/><Field label="Registration details" required/><label className="text-sm font-semibold md:col-span-2">Description<textarea required className="field mt-2 min-h-28"/></label><Field label="Service locations" placeholder="Cities or states" required/><Field label="Contact email" type="email" required/><label className="text-sm font-semibold md:col-span-2">Support categories<select required className="field mt-2"><option value="">Choose a category</option>{categories.map(c=><option key={c.id}>{c.name}</option>)}</select></label><label className="text-sm md:col-span-2"><input type="checkbox" required className="mr-2"/>I understand this is a preview submission.</label><Button className="md:col-span-2">Show preview confirmation</Button></form>}</Shell>}
export function Info({kind}:{kind:string}){const content:{[key:string]:[string,string]}={privacy:["Privacy information.","This website does not send the information entered into its demonstration forms to an organisation. Form entries remain local to the current page and disappear on refresh. A live request service would need its own privacy safeguards before launch."],terms:["Using this website.","Peace Care Foundation is developing a way to connect people and independent NGOs. Current directory profiles are examples, and forms do not submit real requests, applications or payments."]};const [title,text]=content[kind]||["Page unavailable.","That page does not exist. Use the navigation to return home or explore the support areas."];return <Shell><PageIntro eyebrow={content[kind]?`${kind} · Important information`:"Page not found"} title={title}>{text}</PageIntro><div className="mt-10 max-w-2xl rounded-2xl border border-[var(--line)] bg-[var(--white)] p-7 text-lg leading-8 text-[var(--ink-soft)]">{text}</div>{!content[kind]&&<Link className="btn btn-primary mt-6" to="/">Return home</Link>}</Shell>}

function RequestHelpLayout({ children, showCta = true }: { children: React.ReactNode; showCta?: boolean }) {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-8 md:pb-24 md:pt-12">
      <section className="overflow-hidden rounded-[2rem] border border-[#d5e1df] bg-white shadow-[0_22px_55px_rgba(24,59,54,.09)]">
        <div className="grid items-center lg:min-h-[510px] lg:grid-cols-[1fr_1fr]">
          <div className="px-7 pt-12 sm:px-12 lg:py-16 lg:pl-16 lg:pr-6">
            <div className="eyebrow">Request help · Start with your needs</div>
            <h1
              className="mt-6 max-w-xl text-[clamp(3.1rem,5vw,5rem)] font-bold leading-[1.04] tracking-[-.06em] text-[var(--ink)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Need support?<br /><span className="text-[var(--coral)]">Start here.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--ink-soft)] sm:text-lg">
              Describe what you need and where you need it. Explore the request steps in this preview;
              nothing you enter is sent or saved.
            </p>
            {showCta && (
              <a href="#request-form" className="btn btn-primary mt-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]">
                Explore the form <ArrowRight size={17} aria-hidden="true" />
              </a>
            )}
          </div>
          <div className="flex items-center justify-center p-7 sm:p-12 lg:p-10">
            <img
              src="/images/request-help-hands.png"
              alt="Four colorful illustrations of hands reaching out and offering support."
              className="block h-auto w-full max-w-[360px]"
            />
          </div>
        </div>
      </section>
      {children}
    </main>
  );
}

export function RequestHelpPreview() {
  const [step, setStep] = useState(1); const [consent, setConsent] = useState(false); const [done, setDone] = useState(false); const [feedback, setFeedback] = useState("");
  const [form, setForm] = useState({ category: "", description: "", city: "", state: "" });
  const update = (key: keyof typeof form, value: string) => setForm({ ...form, [key]: value });
  const next = () => { setFeedback(""); if ((step === 1 && !form.category) || (step === 2 && (!form.description.trim() || !form.city.trim() || !form.state))) { setFeedback("Please complete the required fields before continuing."); return; } setStep(Math.min(3, step + 1)); };
  if (done) return <RequestHelpLayout showCta={false}><div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-[var(--ink)] p-9 text-white"><Check className="text-[var(--sun)]"/><h2 className="mt-5 text-4xl text-white">Preview submission complete.</h2><p className="mt-4 leading-7 text-white/75">Preview submission only—nothing sent or saved. This confirmation is only for the current form journey.</p></div></RequestHelpLayout>;
  return <RequestHelpLayout><div id="request-form" className="mx-auto mt-16 max-w-2xl scroll-mt-24"><div className="mb-6 flex gap-2">{[1,2,3].map(n=><span className={`h-2 flex-1 rounded-full ${n<=step ? "bg-[var(--coral)]" : "bg-[var(--paper-deep)]"}`} key={n}/>)}</div><div className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 md:p-8">
    {step===1&&<div className="grid gap-5"><h2 className="text-2xl">What kind of support?</h2><label className="text-sm font-semibold">Category<select className="field mt-2" value={form.category} onChange={e=>update("category",e.target.value)}><option value="">Choose one</option>{categories.map(c=><option key={c.id}>{c.name}</option>)}</select></label></div>}
    {step===2&&<div className="grid gap-5">
      <h2 className="text-2xl">A little context</h2>
      <label className="text-sm font-semibold">Description
        <textarea className="field mt-2 min-h-32" value={form.description} onChange={e=>update("description",e.target.value)} placeholder="What kind of support are you looking for?"/>
      </label>
      <StateCityFields
        state={form.state}
        city={form.city}
        onStateChange={value => { setForm(current => ({...current, state: value, city: ""})); setFeedback(""); }}
        onCityChange={value => { update("city", value); setFeedback(""); }}
      />
    </div>}
    {step===3&&<div className="grid gap-5"><h2 className="text-2xl">Consent and preferences</h2><label className="flex gap-3 text-sm leading-6"><input type="checkbox" checked={consent} onChange={e=>{setConsent(e.target.checked);setFeedback("")}}/> I understand this is a preview submission and no help is guaranteed.</label></div>}
    {feedback&&<Notice>{feedback}</Notice>}<div className="mt-8 flex justify-between">{step>1?<button className="btn btn-outline" onClick={()=>setStep(step-1)}>Back</button>:<span/>}{step<3?<Button onClick={next}>Continue <ArrowRight size={16}/></Button>:<Button disabled={!consent} onClick={()=>consent?setDone(true):setFeedback("Please confirm the preview consent before showing the confirmation.")}>Show preview confirmation <Check size={16}/></Button>}</div>
  </div></div></RequestHelpLayout>;
}
