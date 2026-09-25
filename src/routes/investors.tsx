import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors & partners — Peace Care Foundation" },
      {
        name: "description",
        content:
          "CSR teams, foundations and impact investors can fund named programs at Peace Care Foundation with audited reporting.",
      },
      { property: "og:title", content: "Invest in Peace Care Foundation" },
      {
        property: "og:description",
        content: "Structured CSR and impact partnerships with quarterly outcome reporting.",
      },
    ],
  }),
  component: Investors,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  organisation: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  investment_range: z.string(),
  focus_area: z.string(),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const ranges = ["Under ₹1L", "₹1L – ₹5L", "₹5L – ₹25L", "₹25L+"];
const focuses = ["Dog rescue & sterilisation", "Child education", "Homeless shelter & meals", "Core operations"];

function Investors() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    message: "",
  });
  const [range, setRange] = useState(ranges[1]!);
  const [focus, setFocus] = useState(focuses[0]!);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ ...form, investment_range: range, focus_area: focus });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("investor_enquiries").insert({
      user_id: user?.id ?? null,
      name: parsed.data.name,
      organisation: parsed.data.organisation || null,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      investment_range: parsed.data.investment_range,
      focus_area: parsed.data.focus_area,
      message: parsed.data.message || null,
    });
    setSubmitting(false);
    if (error) {
      toast.error("We couldn't send your enquiry. Please try again.");
      return;
    }
    setDone(true);
    toast.success("Enquiry sent — our partnerships desk will reply within 2 working days.");
  };

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16">
        <p className="eyebrow">Investors &amp; partners</p>
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">
          Fund a program, own the outcome, see the ledger.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          We work with CSR teams, family foundations and impact investors who want measurable social
          return. Choose a program, agree on milestones, and receive quarterly audited reporting.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-12 md:grid-cols-3">
        {[
          {
            t: "Program partnership",
            d: "Underwrite an entire route or learning circle for 12 months with your name on it.",
          },
          {
            t: "Matching pool",
            d: "Match public donations during campaigns to multiply reach and visibility.",
          },
          {
            t: "Capacity building",
            d: "Fund vehicles, cold storage, veterinary equipment or staff training.",
          },
        ].map((c) => (
          <div key={c.t} className="surface-card p-6">
            <h2 className="text-lg">{c.t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="surface-card p-7">
            {done ? (
              <div className="py-10 text-center">
                <h2 className="text-2xl">Thank you, {form.name.split(" ")[0]}</h2>
                <p className="mt-3 text-muted-foreground">
                  Your enquiry is with our partnerships desk. We'll reply to {form.email} within two
                  working days with a program brief and impact deck.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <h2 className="text-2xl">Talk to our partnerships desk</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="iname">Full name</Label>
                    <Input id="iname" value={form.name} maxLength={100} onChange={set("name")} required />
                  </div>
                  <div>
                    <Label htmlFor="org">Organisation</Label>
                    <Input id="org" value={form.organisation} maxLength={150} onChange={set("organisation")} />
                  </div>
                  <div>
                    <Label htmlFor="iemail">Email</Label>
                    <Input
                      id="iemail"
                      type="email"
                      value={form.email}
                      maxLength={255}
                      onChange={set("email")}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="iphone">Phone</Label>
                    <Input id="iphone" value={form.phone} maxLength={20} onChange={set("phone")} />
                  </div>
                </div>

                <div>
                  <Label>Intended contribution</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {ranges.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRange(r)}
                        className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                          range === r
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:bg-secondary"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Focus area</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {focuses.map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFocus(f)}
                        className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                          focus === f
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-border hover:bg-secondary"
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="imsg">Message</Label>
                  <Textarea
                    id="imsg"
                    value={form.message}
                    maxLength={1000}
                    onChange={set("message")}
                    placeholder="Tell us about your CSR mandate, timelines or reporting needs."
                  />
                </div>

                <Button type="submit" size="lg" disabled={submitting} className="w-full">
                  {submitting ? "Sending…" : "Send enquiry"}
                </Button>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <div className="surface-card p-6">
              <h3 className="text-lg">What you receive</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Signed MoU with milestone-linked disbursement</li>
                <li>Quarterly outcome and utilisation reports</li>
                <li>Field visit access and photo/video documentation</li>
                <li>Annual audited financial statement</li>
              </ul>
            </div>
            <div className="surface-card p-6">
              <h3 className="text-lg">Direct line</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                partners@peacecarefoundation.org
                <br />
                Mon–Sat, 9am–7pm IST
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
