import { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import { supportCategories } from "../supportCategories";
import { supportCategoryDetails } from "../supportCategoryDetails";

export function Programs() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash]);

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 md:grid-cols-[1.1fr_.9fr] md:items-center md:gap-16 md:pb-20 md:pt-20">
        <div className="max-w-3xl">
          <div className="eyebrow">Our work · Areas of support</div>
          <h1 className="mt-5 max-w-2xl text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            Understand the need. <em className="text-[var(--coral)]">Find a way forward.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">
            From education and healthcare to animal welfare and shelter, explore the kinds of
            support people look for and the causes independent NGOs may work on.
          </p>
          <a href="#support-categories" className="btn btn-outline mt-7">
            Explore categories <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        <figure className="min-w-0">
          <img
            src="/images/our-work-reference.jpg"
            alt="Composite photo showing a health conversation, children learning, food sharing, and people planting a sapling."
            className="aspect-video w-full rounded-[2rem] object-cover"
          />
        </figure>
      </section>

      <section id="support-categories" className="scroll-mt-20 border-y border-[var(--line)] bg-[var(--white)]" aria-labelledby="support-categories-title">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="eyebrow">Support categories · Areas of need</div>
          <h2 id="support-categories-title" className="mt-3 max-w-2xl text-4xl md:text-5xl">Explore ways to help.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--ink-soft)]">
            Learn about common needs and the kinds of work independent NGOs may focus on.
            This website cannot dispatch emergency, medical or legal assistance.
          </p>
          <nav aria-label="Jump to a support category" className="mt-9 flex flex-wrap gap-2">
            {supportCategories.map((category) => (
              <a key={category.name} href={`#${supportCategoryDetails[category.name].id}`} className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)]">
                {category.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div id="care-areas" className="mx-auto max-w-7xl space-y-14 px-5 py-14 md:space-y-20 md:py-20">
        {supportCategories.map((category, index) => {
          const detail = supportCategoryDetails[category.name];
          return (
          <section id={detail.id} key={detail.id} aria-labelledby={`${detail.id}-title`} className="scroll-mt-24">
            <div className="grid overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--white)] md:grid-cols-2">
              <div className="relative flex min-h-64 flex-col justify-end overflow-hidden bg-[var(--paper-deep)] p-7 sm:p-10 md:order-2 md:min-h-[410px]">
                <img src={detail.heroImage ?? category.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[#102923]/35 via-transparent to-[#102923]/60" />
                <span className="relative z-10 self-end rounded-full border border-white/50 bg-[var(--ink)]/80 px-4 py-2 text-xs font-semibold text-white">{detail.label}</span>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <div className="eyebrow">Support category</div>
                <h3 id={`${detail.id}-title`} className="mt-4 text-4xl md:text-5xl">{category.name}</h3>
                <p className="mt-5 max-w-md font-['Fraunces'] text-xl leading-snug text-[var(--ink)]">{detail.summary}</p>
                <p className="mt-5 max-w-lg leading-7 text-[var(--ink-soft)]">{detail.description}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">Possible help: {category.help}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${category.name} themes`}>
                  {detail.tags.map(tag => (
                    <li key={tag} className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-2 text-xs font-semibold text-[var(--ink-soft)]">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-7">
              <h4 className="text-2xl">Focus categories for {category.name.toLowerCase()}.</h4>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {detail.focus.map((item) => (
                  <article key={item.title} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--white)]">
                    <img src={item.image} alt="" className="aspect-[3/2] w-full object-cover" loading="lazy" decoding="async" />
                    <div className="p-5">
                      <h5 className="text-lg">{item.title}</h5>
                      <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          );
        })}
      </div>

    </main>
  );
}