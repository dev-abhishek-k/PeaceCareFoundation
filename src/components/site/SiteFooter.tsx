import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-primary bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <h3 className="font-display text-xl">Peace Care Foundation</h3>
          <p className="mt-4 max-w-md text-sm leading-6 text-primary-foreground/70">
            Founded by Aman — a believer, achiever and practitioner of true peace. We care for
            homeless dogs, children and adults with dignity, transparency and daily presence on the
            ground.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/about">About &amp; founder</Link>
            </li>
            <li>
              <Link to="/investors">Investors &amp; partners</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Reach us</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>care@peacecarefoundation.org</li>
            <li>partners@peacecarefoundation.org</li>
            <li>Mon–Sat, 9am–7pm IST</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 px-5 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Peace Care Foundation. Every rupee is tracked and reported.
      </div>
    </footer>
  );
}
