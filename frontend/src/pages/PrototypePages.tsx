import { useMemo, useState } from "react";
import { ArrowRight, Check, MapPin, Search, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { categories, ngos, notifications, opportunities, requests } from "../mockData";
import { StateCityFields } from "../components/StateCityFields";
import { citiesForState, states } from "../locations";
import type { HelpRequest, NGO, Role } from "../types";
import { Button, EmptyState, Field, Notice, PageIntro } from "../components/UI";

const defaultArtwork = {
  src: "/images/hero-care.jpg",
  alt: "Illustration of a dog, books and a folded shawl in a neighborhood courtyard.",
  caption: "Illustrative artwork",
};

const requestHelpPhoto = {
  src: "/images/request-help-reference.jpg",
  alt: "Photo of an adult writing at a table with another adult and a child.",
  caption: "Reference photo · Not affiliated with this preview",
};

const browsePhoto = {
  src: "/images/browse-ngos-reference.jpg",
  alt: "Photo of people talking beside tables with plants, books and supplies at an indoor event.",
  caption: "Reference photo · Not affiliated with this preview",
  position: "object-[center_12%]",
};

const Shell = ({children, image}:{children:React.ReactNode; image?: typeof defaultArtwork & {position?: string}}) => {
  const artwork = image ?? defaultArtwork;
  return <main className="mx-auto min-h-[60vh] max-w-7xl px-5 py-14 md:py-20">
    <figure className={`relative mb-10 overflow-hidden rounded-2xl ${image ? "h-56 sm:h-72" : "h-36 sm:h-44"}`}>
      <img src={artwork.src} alt={artwork.alt} className={`h-full w-full object-cover ${image?.position ?? (image ? "object-[center_28%]" : "object-[center_48%]")}`} />
      <figcaption className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-full bg-[var(--ink)]/90 px-3 py-1 text-xs font-semibold text-white">{artwork.caption}</figcaption>
    </figure>
    {children}
  </main>;
};
export { HomePeace } from "./HomePeace";

export { Programs } from "./Programs";

export function PeaceInfo({kind}:{kind:string}) {
  const content: Record<string,{title:string; eyebrow:string; text:string; extra?:string}> = {
    contact: { eyebrow:"Contact · Preview", title:"A place to start exploring.", text:"NGO Help Network is a prototype for a third-party coordination platform, not an NGO service provider. No live contact channel is available here, and this page does not send messages or service requests.", extra:"You can explore local previews of a help request, volunteer or partner enquiry, donation pledge, and dashboard. Nothing is submitted to an organisation." },
    faq: { eyebrow:"FAQ · Preview", title:"A few things to know.", text:"Is NGO Help Network an NGO or service provider? No. It is a prototype for a platform intended to help people discover independent NGOs and explore ways to support causes across India. Are the profiles, programmes, partnerships or verification statuses real? No; directory content is illustrative, and no profile is verified. Can I donate or request live help here? No. Donation, request, volunteer and partner journeys are previews only; they do not send money or information or guarantee assistance.", extra:"Forms validate in your browser only. This prototype does not provide live case updates or opportunities, and preview changes reset when you refresh." }
  };
  const item = content[kind] || content.contact;
  return <Shell><PageIntro eyebrow={item.eyebrow} title={item.title}>This prototype shows how people might discover independent NGOs. It does not run their programmes or guarantee support.</PageIntro><div className="mt-10 max-w-2xl rounded-2xl border border-[var(--line)] bg-[var(--white)] p-7 text-lg leading-8 text-[var(--ink-soft)]"><p>{item.text}</p>{item.extra&&<p className="mt-6 border-l-2 border-[var(--sun)] pl-4 text-base">{item.extra}</p>}</div></Shell>;
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
    <PageIntro eyebrow="Directory · Preview" title="Explore NGOs, with care.">
      These fictional example profiles show how an independent-NGO directory might look. They are not verified listings, and the reference photo is unrelated to the profiles.
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
        : <EmptyState title="No example profiles match those filters." text="Try removing a filter or searching a broader term."/>}
    </div>
  </Shell>;
}
function NgoCard({ngo}:{ngo:NGO}){return <Link to={`/ngos/${ngo.id}`} className="group rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 hover:-translate-y-1 hover:border-[var(--coral)]"><div className="flex justify-between"><div><span className="rounded-full bg-[#f8e5d9] px-3 py-1 text-xs font-bold text-[var(--coral-dark)]">Fictional example · Preview</span><h2 className="mt-5 text-2xl">{ngo.name}</h2></div><ShieldCheck className="text-[var(--coral)]"/></div><p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{ngo.summary}</p><div className="mt-5 flex items-center justify-between text-sm"><span>{ngo.state} · {ngo.cities.join(", ")}</span><ArrowRight size={16}/></div></Link>}
export function NgoDetail(){const ngo=ngos.find(n=>n.id===useParams().id);if(!ngo)return <Shell><EmptyState title="Example profile not found" text="Return to the directory to explore the fictional example profiles."/><Link className="btn btn-primary mt-5" to="/ngos">Back to directory preview</Link></Shell>;return <Shell><PageIntro eyebrow="Fictional NGO example · Preview" title={ngo.name}>This fictional profile is for illustration only. Its organisation, locations, contact details and programme information are not verified.</PageIntro><div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_.8fr]"><article className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-7"><div className="flex flex-wrap gap-2">{ngo.categories.map(id=><span className="rounded-full bg-[#f8e5d9] px-3 py-1 text-xs font-semibold" key={id}>{categories.find(c=>c.id===id)?.name}</span>)}</div><p className="mt-7 text-lg leading-8">{ngo.description}</p><h3 className="mt-10 text-2xl">Example locations</h3><p className="mt-2 text-[var(--ink-soft)]">{ngo.state} · {ngo.cities.join(", ")}</p><h3 className="mt-10 text-2xl">Contact details · Example only</h3><p className="mt-2 text-[var(--ink-soft)]">{ngo.contact} · {ngo.email}</p><p className="mt-2 text-sm text-[var(--ink-soft)]">These are not live contact details. This page does not send a message or request.</p></article><aside className="h-fit rounded-2xl bg-[var(--ink)] p-7 text-white"><ShieldCheck className="text-[var(--sun)]"/><h3 className="mt-5 text-2xl text-white">Verification · Preview</h3><p className="mt-3 text-sm leading-6 text-white/70">The badge is decorative. No organisation on this directory has been verified.</p><Link to="/request-help" className="btn btn-primary mt-7 w-full">Explore a request preview</Link></aside></div></Shell>}
export function Dashboard({role,setRole}:{role:Role;setRole:(r:Role)=>void}){const [localRequests,setLocalRequests]=useState<HelpRequest[]>(requests);const [tab,setTab]=useState("requests");return <Shell><PageIntro eyebrow="Dashboard · Preview" title="Explore dashboard views"><p className="mt-4">Choose a role to see sample screens—this is not sign-in or an account. The example requests and any changes stay in this page and reset on refresh; nothing is sent to an NGO.</p></PageIntro><div className="mt-8 flex flex-wrap gap-2 rounded-2xl bg-[var(--paper-deep)] p-2">{(["HELP_SEEKER","NGO_REP","ADMIN"] as Role[]).map(r=><button className={`rounded-xl px-4 py-2 text-sm font-bold ${role===r?"bg-[var(--ink)] text-white":"hover:bg-[var(--paper)]"}`} onClick={()=>setRole(r)} key={r}>{r==="HELP_SEEKER"?"Help seeker":r==="NGO_REP"?"NGO representative":"Administrator"}</button>)}</div>{role==="HELP_SEEKER"&&<><Seeker requests={localRequests}/><PreviewNotifications/></>} {role==="NGO_REP"&&<NgoPreview requests={localRequests} setRequests={setLocalRequests}/>} {role==="ADMIN"&&<AdminPreview requests={localRequests} setRequests={setLocalRequests} tab={tab} setTab={setTab}/>}</Shell>}
function PreviewNotifications(){return <section className="mt-10"><div className="eyebrow">Preview notifications</div><div className="mt-3 grid gap-3 md:grid-cols-2">{notifications.map(notification=><div className="rounded-2xl border border-[var(--line)] bg-[var(--paper-deep)] p-5" key={notification.id}><div className="flex justify-between gap-3"><h3 className="font-bold">{notification.title}</h3><span className="text-xs text-[var(--ink-soft)]">{notification.date}</span></div><p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{notification.message}</p><p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-[var(--coral-dark)]">Preview only · not persisted</p></div>)}</div></section>}
function Seeker({requests:items}:{requests:HelpRequest[]}){return <div className="mt-8"><p className="mb-4 text-sm text-[var(--ink-soft)]">These sample statuses and dates are illustrative, not updates on real requests. No case is transmitted to or followed up with an NGO.</p><div className="grid gap-4">{items.map(r=><div className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6" key={r.id}><div className="flex justify-between"><div><div className="eyebrow">{r.category}</div><h2 className="mt-2 text-xl">{r.summary}</h2></div><span className="rounded-full bg-[var(--paper-deep)] px-3 py-1 text-xs font-bold">{r.status}</span></div><p className="mt-4 text-sm text-[var(--ink-soft)]"><MapPin className="mr-1 inline" size={14}/>{r.location} · {r.date}</p><div className="mt-6 flex gap-1">{["Submitted","Under review","Shared with NGO","In progress"].map(s=><div className={`h-2 flex-1 rounded-full ${["Submitted","Under review","Shared with NGO","In progress"].indexOf(r.status)>=["Submitted","Under review","Shared with NGO","In progress"].indexOf(s)?"bg-[var(--coral)]":"bg-[var(--paper-deep)]"}`} key={s}/>)}</div></div>)}</div></div>}
export function Register(){const [done,setDone]=useState(false);return <Shell><PageIntro eyebrow="NGO profile · Preview" title="Preview an NGO profile.">See the details a directory profile might ask for. This form is only a preview: it does not create an account or listing, and no application is sent or reviewed.</PageIntro>{done?<div className="mt-10 max-w-2xl"><Notice tone="success">That was a local preview only. Nothing was sent or saved, and no profile or application was created.</Notice></div>:<form className="mt-10 grid max-w-2xl gap-4 rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 md:grid-cols-2" onSubmit={e=>{e.preventDefault();setDone(true)}}><Field label="Organisation name" required/><Field label="Registration details" required/><label className="text-sm font-semibold md:col-span-2">Description<textarea required className="field mt-2 min-h-28"/></label><Field label="Service locations" placeholder="Cities or states" required/><Field label="Contact email" type="email" required/><label className="text-sm font-semibold md:col-span-2">Support categories<select required className="field mt-2"><option value="">Choose a category</option>{categories.map(c=><option key={c.id}>{c.name}</option>)}</select></label><label className="text-sm md:col-span-2"><input type="checkbox" required className="mr-2"/>I understand this is a preview submission.</label><Button className="md:col-span-2">Show preview confirmation</Button></form>}</Shell>}
export function Info({kind}:{kind:string}){const content:{[key:string]:[string,string]}={privacy:["Privacy · Preview","This page previews a possible privacy notice; it is not a description of a live privacy process. The request and registration preview forms on this site validate in your browser and do not send or save what you enter. They are cleared when you refresh. No live verification, privacy-request or account process is available through these previews."],terms:["Terms · Preview","NGO Help Network is a third-party coordinator concept, not an NGO service provider. The organisations, programmes, locations, opportunities, requests and statuses shown here are examples, not verified information or live services. Forms, donations, volunteer and partner applications, and directory entries are previews only; nothing is submitted, no assistance is guaranteed, and no payments are processed here."]};const [title,text]=content[kind]||["Page unavailable.","We couldn’t find that page. Use the navigation to explore the available previews."];return <Shell><PageIntro eyebrow={content[kind]?`${kind} · Preview`:"Page not found"} title={title}>{text}</PageIntro><div className="mt-10 max-w-2xl rounded-2xl border border-[var(--line)] bg-[var(--white)] p-7 text-lg leading-8 text-[var(--ink-soft)]">{text}</div>{!content[kind]&&<Link className="btn btn-primary mt-6" to="/">Return home</Link>}</Shell>}

export function RequestHelpPreview() {
  const [step, setStep] = useState(1); const [consent, setConsent] = useState(false); const [done, setDone] = useState(false); const [feedback, setFeedback] = useState("");
  const [form, setForm] = useState({ category: "", description: "", city: "", state: "" });
  const update = (key: keyof typeof form, value: string) => setForm({ ...form, [key]: value });
  const next = () => { setFeedback(""); if ((step === 1 && !form.category) || (step === 2 && (!form.description.trim() || !form.city.trim() || !form.state))) { setFeedback("Please fill in the required fields to continue."); return; } setStep(Math.min(3, step + 1)); };
  if (done) return <Shell image={requestHelpPhoto}><div className="mx-auto max-w-2xl rounded-3xl bg-[var(--ink)] p-9 text-white"><Check className="text-[var(--sun)]"/><h1 className="mt-5 text-4xl text-white">Preview complete.</h1><p className="mt-4 leading-7 text-white/75">This only completes the on-screen preview. Nothing was sent or saved, and there is no request or case update in the dashboard. This photo is for reference and is not connected to an NGO.</p><Link to="/dashboard" className="btn btn-primary mt-7">Explore the dashboard preview</Link></div></Shell>;
  return <Shell image={requestHelpPhoto}><PageIntro eyebrow="Request · Preview" title="Explore a help request.">This form is a preview, not a route to assistance. Your entries are checked in this browser only; they are not sent to an NGO and do not create a case. The reference photo is not connected to an NGO.</PageIntro><div className="mt-10 max-w-2xl"><div className="mb-6 flex gap-2">{[1,2,3].map(n=><span className={`h-2 flex-1 rounded-full ${n<=step ? "bg-[var(--coral)]" : "bg-[var(--paper-deep)]"}`} key={n}/>)}</div><div className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 md:p-8">
    {step===1&&<div className="grid gap-5"><h2 className="text-2xl">What kind of support?</h2><label className="text-sm font-semibold">Category<select className="field mt-2" value={form.category} onChange={e=>update("category",e.target.value)}><option value="">Choose one</option>{categories.map(c=><option key={c.id}>{c.name}</option>)}</select></label></div>}
    {step===2&&<div className="grid gap-5">
      <h2 className="text-2xl">Share a little context</h2>
      <label className="text-sm font-semibold">Description
        <textarea className="field mt-2 min-h-32" value={form.description} onChange={e=>update("description",e.target.value)} placeholder="What kind of support are you looking for? This stays in the preview."/>
      </label>
      <StateCityFields
        state={form.state}
        city={form.city}
        onStateChange={value => { setForm(current => ({...current, state: value, city: ""})); setFeedback(""); }}
        onCityChange={value => { update("city", value); setFeedback(""); }}
      />
    </div>}
    {step===3&&<div className="grid gap-5"><h2 className="text-2xl">One last thing</h2><label className="flex gap-3 text-sm leading-6"><input type="checkbox" checked={consent} onChange={e=>{setConsent(e.target.checked);setFeedback("")}}/> I understand this is only a preview. It does not reach an NGO or guarantee assistance.</label><p className="text-sm text-[var(--ink-soft)]">The confirmation stays on this page and will not create a request or update the dashboard.</p></div>}
    {feedback&&<Notice>{feedback}</Notice>}<div className="mt-8 flex justify-between">{step>1?<button className="btn btn-outline" onClick={()=>setStep(step-1)}>Back</button>:<span/>}{step<3?<Button onClick={next}>Continue <ArrowRight size={16}/></Button>:<Button disabled={!consent} onClick={()=>consent?setDone(true):setFeedback("Please confirm that you understand this is a preview.")}>Show preview confirmation <Check size={16}/></Button>}</div>
  </div></div></Shell>;
}

function NgoPreview({ requests: items, setRequests }: { requests: HelpRequest[]; setRequests: (r: HelpRequest[]) => void }) {
  const incoming = items.filter((item) => item.status === "Submitted" || item.status === "Under review");
  const active = items.filter((item) => item.status === "Shared with NGO" || item.status === "In progress");
  const advance = (id: string, status: HelpRequest["status"]) => setRequests(items.map((item) => item.id === id ? { ...item, status } : item));
  return <div className="mt-8"><p className="mb-5 text-sm text-[var(--ink-soft)]">These are sample cases for exploring the screen, not real requests sent to an NGO. Buttons only change the local preview and reset on refresh.</p><div className="grid gap-6 md:grid-cols-2"><section><h2 className="text-3xl">Incoming · Sample cases</h2><p className="mt-2 text-sm text-[var(--ink-soft)]">Try a button to see the sample status change.</p><div className="mt-4 grid gap-3">{incoming.length ? incoming.map((item) => <div className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-5" key={item.id}><b>{item.category}</b><p className="mt-2 text-sm">{item.summary}</p><button className="btn btn-primary mt-4 text-sm" onClick={() => advance(item.id, "In progress")}>Move sample to active</button></div>) : <EmptyState title="No incoming sample cases" text="There are no more sample cases to show here."/>}</div></section><section><h2 className="text-3xl">Active · Sample cases</h2><p className="mt-2 text-sm text-[var(--ink-soft)]">Changes are temporary and reset on refresh.</p><div className="mt-4 grid gap-3">{active.length ? active.map((item) => <div className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-5" key={item.id}><b>{item.category}</b><p className="mt-2 text-sm">{item.summary}</p><span className="mt-3 block text-xs font-bold uppercase">{item.status}</span><button className="btn btn-outline mt-4 text-sm" onClick={() => advance(item.id, "Submitted")}>Move sample back</button></div>) : <EmptyState title="No active sample cases" text="Move an incoming sample to active to see it here."/>}</div></section></div></div>;
}

function AdminPreview({ requests: items, setRequests, tab, setTab }: { requests: HelpRequest[]; setRequests: (r: HelpRequest[]) => void; tab: string; setTab: (s: string) => void }) {
  const [pending, setPending] = useState([{ id: "PENDING-PREVIEW-1", name: "Nayi Kiran Initiative · Fictional example", status: "Pending review" }, { id: "PENDING-PREVIEW-2", name: "Sahyog Resource Group · Fictional example", status: "Pending review" }]);
  return <div className="mt-8"><p className="mb-4 text-sm text-[var(--ink-soft)]">Administrator screens are interface examples only. No applications are reviewed, requests matched, or updates sent; actions below only change the local preview.</p><div className="flex gap-2 border-b border-[var(--line)]">{["queue","matching","summary"].map((t) => <button className={`border-b-2 px-4 py-3 text-sm font-bold ${tab===t ? "border-[var(--coral)]" : "border-transparent"}`} onClick={() => setTab(t)} key={t}>{t==="queue" ? "NGO review queue" : t==="matching" ? "Suggested matching" : "Summary"}</button>)}</div>{tab==="queue"&&<div className="mt-5 grid gap-3">{pending.map((ngo) => <div className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-5" key={ngo.id}><div className="flex justify-between gap-3"><b>{ngo.name}</b><span className="text-xs text-[var(--coral-dark)]">{ngo.status}</span></div><p className="mt-2 text-sm text-[var(--ink-soft)]">Fictional application example; no organisation has applied or been approved.</p>{ngo.status==="Pending review" ? <button className="btn btn-primary mt-4 text-sm" onClick={() => setPending(pending.map((item) => item.id===ngo.id ? { ...item, status: "Temporarily approved" } : item))}>Show sample approval</button> : <Notice tone="success">Sample status changed locally; it is not an approval.</Notice>}</div>)}</div>}{tab==="matching"&&<div className="mt-5 grid gap-3">{items.map((item) => <div className="rounded-2xl border border-[var(--line)] bg-[var(--white)] p-5" key={item.id}><b>{item.id}</b><p className="mt-2 text-sm">{item.category} sample request · Suggested match: Peace Care Foundation (fictional example)</p><button className="btn btn-outline mt-4 text-sm" onClick={() => setRequests(items.map((x) => x.id===item.id ? { ...x, status: "Shared with NGO" } : x))}>Show sample shared status</button></div>)}</div>}{tab==="summary"&&<div className="mt-5"><p className="mb-4 text-sm text-[var(--ink-soft)]">Example counts only; these are not live directory, request or opportunity totals.</p><div className="grid gap-4 md:grid-cols-3">{[["Example NGOs",ngos.length],["Example requests",items.length],["Example opportunities",opportunities.length]].map(([title,n])=><div className="rounded-2xl bg-[var(--ink)] p-6 text-white" key={title}><div className="text-sm text-white/70">{title}</div><div className="mt-3 text-4xl text-white">{n}</div></div>)}</div></div>}</div>;
}