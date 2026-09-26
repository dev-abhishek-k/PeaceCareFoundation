import { useState } from "react";
import { HeartHandshake, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import type { Role } from "../types";

export default function Layout({children, role, setRole}:{children:React.ReactNode;role:Role;setRole:(r:Role)=>void}) {
  const [open, setOpen] = useState(false);
  const links = [
    ["Explore causes", "/programs"],
    ["Browse NGOs", "/ngos"],
    ["Request help", "/request-help"],
    ["Volunteer", "/volunteer"],
    ["Become a partner", "/become-a-partner"],
    ["Donate", "/donate"],
    ["About", "/about"],
  ];

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[rgba(247,244,236,.94)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--ink)] text-[var(--sun)]">
              <HeartHandshake size={18} aria-hidden="true" />
            </span>
            <span className="font-bold">NGO Help <span className="text-[var(--coral)]">Network</span></span>
          </Link>
          <button className="xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav className={`${open ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-1 border-b border-[var(--line)] bg-[var(--paper)] p-5 xl:static xl:flex xl:w-auto xl:flex-row xl:items-center xl:border-0 xl:bg-transparent xl:p-0`}>
            {links.map(([label, to]) => (
              <NavLink onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-[var(--paper-deep)]" to={to} key={to}>
                {label}
              </NavLink>
            ))}
            <Link onClick={() => setOpen(false)} className="btn btn-quiet text-sm xl:ml-2" to="/dashboard">Preview dashboard</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="mt-20 border-t border-[var(--line)] bg-[var(--paper-deep)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-[var(--ink-soft)] md:flex-row md:justify-between">
          <span>NGO Help Network · Frontend preview</span>
          <div className="flex flex-wrap gap-4">
            <Link to="/programs">Explore causes</Link>
            <Link to="/become-a-partner">Partner preview</Link>
            <Link to="/donate">Donate preview</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </>
  );
}