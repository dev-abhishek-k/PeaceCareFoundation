import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  PawPrint,
  ShieldCheck,
  Soup,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";
import dogsImg from "@/assets/dogs.jpg";
import childrenImg from "@/assets/children.jpg";
import adultsImg from "@/assets/adults.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Peace Care Foundation — Homeless dogs, children & adults" },
      {
        name: "description",
        content:
          "An NGO founded by Aman caring for homeless dogs, children and adults. Donate, volunteer or partner with us as an investor.",
      },
      { property: "og:title", content: "Peace Care Foundation" },
      {
        property: "og:description",
        content: "Daily food, medical care and shelter for homeless dogs, children and adults.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "18,400+", label: "Meals served" },
  { value: "2,100+", label: "Dogs treated & vaccinated" },
  { value: "640+", label: "Children in learning circles" },
  { value: "96%", label: "Funds reaching the field" },
];

const pillars = [
  {
    icon: PawPrint,
    title: "Homeless dogs",
    body: "Street feeding rounds, injury response, sterilisation and vaccination drives, and adoption support.",
    img: dogsImg,
  },
  {
    icon: GraduationCap,
    title: "Children",
    body: "Learning circles, school kits, nutrition and health check-ups for children living on the street.",
    img: childrenImg,
  },
  {
    icon: Soup,
    title: "Adults & elders",
    body: "Night meals, blankets, medical camps and dignity kits for homeless adults and elders.",
    img: adultsImg,
  },
];

function Home() {
  return (
    <>
      <section className="overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 lg:grid-cols-12 lg:px-8 lg:py-20">
          <div className="lg:col-span-7">
            <p className="eyebrow">Peace Care Foundation · Global care from India</p>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] md:text-7xl">
              Healing lives. <em className="font-normal text-accent">Restoring hope.</em>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              Founded by Aman, we bring food, treatment, learning and dignity to homeless dogs,
              children, adults and elders—then show donors where every contribution goes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild className="h-12 px-7">
                <Link to="/donate">Make an impact <ArrowRight /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-7">
                <Link to="/programs">See our work</Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 border-y border-border sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="border-border py-5 pr-4 sm:border-r sm:pl-4 first:pl-0 last:border-r-0">
                  <p className="font-display text-2xl md:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs leading-4 text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <img
              src={heroImg}
              alt="A Peace Care volunteer feeding a street dog with a child nearby"
              width={1600}
              height={1104}
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-primary-foreground/30 bg-card/95 p-5 shadow-lift backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">Choose your impact</p>
                  <h2 className="mt-1 text-lg">Support a day of care</h2>
                </div>
                <ShieldCheck className="size-6 text-accent" aria-hidden="true" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[500, 1000, 2500].map((amount) => (
                  <Button key={amount} variant={amount === 1000 ? "default" : "outline"} asChild>
                    <Link to="/donate">₹{amount.toLocaleString("en-IN")}</Link>
                  </Button>
                ))}
              </div>
              <Button className="mt-3 w-full" variant="secondary" asChild>
                <Link to="/donate">Continue to secure pledge <ArrowRight /></Link>
              </Button>
            </div>
            <div className="absolute -left-3 top-6 rounded-lg border border-border bg-card px-4 py-3 shadow-soft sm:-left-8">
              <p className="text-xs text-muted-foreground">Funds reaching the field</p>
              <p className="font-display text-2xl">96%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 border-b border-border pb-8 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow">Care in action</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Three lifelines. One promise of dignity.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted-foreground md:justify-self-end">
            Our field teams connect immediate relief with lasting care—responding where vulnerability
            is highest and documenting every intervention.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-12">
          {pillars.map((p) => (
            <article key={p.title} className="group border-b border-border pb-6 md:col-span-4">
              <img
                src={p.img}
                alt={p.title}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-[1.015]"
              />
              <div className="pt-5">
                <p.icon className="size-6 text-accent" />
                <h3 className="mt-3 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-right">
          <Button variant="link" asChild>
            <Link to="/programs">Explore every program <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow">Care you can verify</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Compassion earns trust through proof.</h2>
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              Every pledge enters a clear record. Individual donors receive confirmation, while
              institutional partners receive structured reporting, utilisation statements and named
              program ownership.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="h-11 px-6">
                <Link to="/donate">Start a pledge <ArrowRight /></Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/investors">Talk to our partnerships desk</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              {
                icon: FileCheck2,
                title: "A clear pledge record",
                body: "Your details and intended support are securely logged and confirmed by our team.",
              },
              {
                icon: ShieldCheck,
                title: "Measured field impact",
                body: "Quarterly reports on meals, treatments, enrolments and shelter nights.",
              },
              {
                icon: HeartHandshake,
                title: "Named programs",
                body: "Fund a feeding route, a sterilisation drive or a learning circle in your name.",
              },
            ].map((c) => (
              <div key={c.title} className="flex gap-5 border-b border-border py-6 first:pt-0 last:border-b-0">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card">
                  <c.icon className="size-5 text-accent" />
                </span>
                <div>
                  <h3 className="text-base">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-7">
          <p className="eyebrow">From the founder</p>
          <blockquote className="mt-5 font-display text-3xl leading-snug md:text-5xl">
            “Peace is not a speech. It is a bowl of food at 6am, a bandage at noon, and a school bag
            at dusk.”
          </blockquote>
          <p className="mt-6 text-sm text-muted-foreground">Aman — Founder, Peace Care Foundation</p>
        </div>
        <div className="border-l border-border pl-7 md:col-span-5 md:self-end">
          <p className="font-display text-2xl">Make care possible today.</p>
          <p className="mt-3 leading-7 text-muted-foreground">
            Record a one-time or monthly pledge. Our team will confirm it within 24 hours and share
            payment details with a receipt.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {["Choose where your gift helps", "Receive personal confirmation", "Keep a record in your account"].map((item) => (
              <li key={item} className="flex items-center gap-2"><Check className="size-4 text-accent" />{item}</li>
            ))}
          </ul>
          <Button className="mt-7 h-12 w-full" asChild>
            <Link to="/donate">Donate with confidence <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
