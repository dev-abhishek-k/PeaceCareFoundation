import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import dogsImg from "@/assets/dogs.jpg";
import childrenImg from "@/assets/children.jpg";
import adultsImg from "@/assets/adults.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Peace Care Foundation" },
      {
        name: "description",
        content:
          "Street dog rescue, child learning circles and night shelter meals: the daily programs run by Peace Care Foundation.",
      },
      { property: "og:title", content: "Our programs" },
      {
        property: "og:description",
        content: "Rescue, feeding, education and shelter programs you can fund directly.",
      },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    img: dogsImg,
    title: "Street dog rescue & care",
    cost: "₹600 treats one injured dog",
    points: [
      "Daily feeding routes across 14 neighbourhoods",
      "Emergency injury response and wound care",
      "Sterilisation and anti-rabies vaccination drives",
      "Foster and adoption matching",
    ],
  },
  {
    img: childrenImg,
    title: "Children's learning circles",
    cost: "₹1,200 keeps a child learning for a month",
    points: [
      "After-school learning circles with trained facilitators",
      "School kits, uniforms and enrolment support",
      "Daily nutrition and monthly health check-ups",
      "Counselling and safety follow-ups for families",
    ],
  },
  {
    img: adultsImg,
    title: "Adults & elders on the street",
    cost: "₹350 feeds an adult for a week",
    points: [
      "Hot night meals seven days a week",
      "Winter blankets and dignity kits",
      "Mobile medical camps and medicine support",
      "Documentation help to access government schemes",
    ],
  },
];

function Programs() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16">
        <p className="eyebrow">Programs</p>
        <h1 className="mt-3 max-w-2xl text-4xl md:text-5xl">Where your money actually goes.</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Each program runs on fixed routes and fixed schedules, with cost-per-outcome we publish
          openly. Pick one to fund, or let us allocate where the need is sharpest.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-5 py-16">
        {programs.map((p, i) => (
          <article
            key={p.title}
            className={`surface-card grid gap-0 overflow-hidden md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>img]:order-2" : ""
            }`}
          >
            <img
              src={p.img}
              alt={p.title}
              width={1200}
              height={900}
              loading="lazy"
              className="h-64 w-full object-cover md:h-full"
            />
            <div className="p-7">
              <h2 className="text-2xl">{p.title}</h2>
              <p className="mt-2 text-sm font-semibold text-accent">{p.cost}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Button className="mt-6" asChild>
                <Link to="/donate">Fund this program</Link>
              </Button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
