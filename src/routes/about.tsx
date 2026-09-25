import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aman & our mission — Peace Care Foundation" },
      {
        name: "description",
        content:
          "The story of Peace Care Foundation, founded by Aman — a believer, achiever and practitioner of true peace serving homeless dogs and people.",
      },
      { property: "og:title", content: "About Peace Care Foundation" },
      {
        property: "og:description",
        content: "Our founder, values and the way we work on the ground every day.",
      },
    ],
  }),
  component: About,
});

const values = [
  { title: "Dignity first", body: "Nobody — human or animal — is a case number. Care starts with respect." },
  { title: "Show up daily", body: "Consistency beats campaigns. Our routes run every day of the year." },
  { title: "Open books", body: "Donations, spends and outcomes are recorded and reported without spin." },
  { title: "Local hands", body: "We hire and train from the neighbourhoods we serve." },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">
          Founded by Aman — a believer, achiever and practitioner of true peace.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Peace Care Foundation began with one person, one bucket of food and a street full of
          hungry dogs. It grew into a daily operation caring for homeless dogs, children and adults
          across the city — funded by people who wanted their giving to be honest and traceable.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-5">
        <img
          src={heroImg}
          alt="Founder feeding a street dog beside a smiling child"
          width={1600}
          height={1104}
          loading="lazy"
          className="shadow-lift h-[340px] w-full rounded-xl object-cover md:h-[460px]"
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">What we believe</h2>
            <p className="mt-4 text-muted-foreground">
              Peace is a practice, not a slogan. It looks like sterilisation drives that reduce
              suffering, learning circles that keep children off the street, and night meals that
              carry an elder through winter.
            </p>
            <p className="mt-4 text-muted-foreground">
              We keep our overheads low, our field teams strong, and our reporting boring — because
              trust is the only currency an NGO really has.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="surface-card p-5">
                <h3 className="text-base">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5">
          <h2 className="text-2xl md:text-3xl">Walk with us.</h2>
          <div className="flex gap-3">
            <Button asChild>
              <Link to="/donate">Donate</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/investors">Become a partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
