import { useState } from "react";
import { HeartHandshake, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const footerGroups = [
  { title: "Explore", links: [["Our work", "/programs"], ["Browse NGOs", "/ngos"], ["About us", "/about"]] },
  { title: "Get involved", links: [["Volunteer", "/volunteer"], ["Become a partner", "/become-a-partner"], ["Donation preview", "/donate"]] },
  { title: "Information", links: [["Contact", "/contact"], ["FAQ", "/faq"], ["Privacy", "/privacy"], ["Terms", "/terms"]] },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return <div className="flex min-h-screen flex-col">
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[rgba(247,244,236,.94)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--ink)] text-[var(--sun)]"><HeartHandshake size={18}/></span>
          <span className="font-bold">Peace Care <span className="text-[var(--coral)]">Foundation</span></span>
        </Link>
        <button className="xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        <nav className={`${open ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-1 border-b border-[var(--line)] bg-[var(--paper)] p-5 xl:static xl:flex xl:w-auto xl:flex-row xl:items-center xl:border-0 xl:bg-transparent xl:p-0`}>
          {[["Our work", "/programs"], ["Browse NGOs", "/ngos"], ["Request help", "/request-help"], ["Volunteer", "/volunteer"], ["Become a partner", "/become-a-partner"], ["Donate", "/donate"], ["About", "/about"]].map(([label, to]) =>
            <NavLink onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-[var(--paper-deep)]" to={to} key={to}>{label}</NavLink>
          )}
        </nav>
      </div>
    </header>
    <div className="flex-1">{children}</div>
    <footer className="border-t border-[var(--line)] bg-[var(--paper-deep)] text-[var(--ink-soft)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8">
        <div className="max-w-sm">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-3 font-bold text-[var(--ink)] hover:text-[var(--coral-dark)]">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--ink)] text-[var(--sun)]"><HeartHandshake size={18}/></span>
            Peace Care Foundation
          </Link>
          <p className="mt-4 text-sm leading-6">Building connections between people and independent NGOs. This website is a preview of the planned platform.</p>
        </div>
        {footerGroups.map(group => <nav key={group.title} aria-label={`${group.title} footer links`}>
          <h2 className="font-sans text-sm font-bold tracking-normal text-[var(--ink)]">{group.title}</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {group.links.map(([label, to]) => <li key={to}><Link className="hover:text-[var(--coral-dark)] hover:underline focus-visible:underline" to={to} onClick={() => window.scrollTo(0, 0)}>{label}</Link></li>)}
          </ul>
        </nav>)}
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs">© {new Date().getFullYear()} Peace Care Foundation</div>
      </div>
    </footer>
  </div>;
}
