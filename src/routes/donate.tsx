import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Peace Care Foundation" },
      {
        name: "description",
        content:
          "Pledge a donation to feed and treat homeless dogs, children and adults. Choose a cause, amount and frequency.",
      },
      { property: "og:title", content: "Donate to Peace Care Foundation" },
      {
        property: "og:description",
        content: "Your pledge funds meals, medical care and learning circles.",
      },
    ],
  }),
  component: Donate,
});

const schema = z.object({
  donor_name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  amount: z.coerce.number().positive("Enter an amount greater than 0").max(100000000),
  cause: z.string(),
  frequency: z.string(),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const amounts = [500, 1000, 2500, 5000];
const causes = [
  { value: "dogs", label: "Homeless dogs" },
  { value: "children", label: "Children" },
  { value: "adults", label: "Adults & elders" },
  { value: "general", label: "Where needed most" },
];

function Donate() {
  const { user } = useAuth();
  const [amount, setAmount] = useState("1000");
  const [cause, setCause] = useState("general");
  const [frequency, setFrequency] = useState("one-time");
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (user?.email) setEmail((e) => e || user.email!);
  }, [user]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({
      donor_name: donorName,
      email,
      phone,
      amount,
      cause,
      frequency,
      message,
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("donations").insert({
      user_id: user?.id ?? null,
      donor_name: parsed.data.donor_name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      amount: parsed.data.amount,
      cause: parsed.data.cause,
      frequency: parsed.data.frequency,
      message: parsed.data.message || null,
    });
    setSubmitting(false);
    if (error) {
      toast.error("We couldn't record your pledge. Please try again.");
      return;
    }
    setDone(true);
    toast.success("Thank you! Your pledge is recorded.");
  };

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow">Donate</p>
      <h1 className="mt-3 max-w-2xl text-4xl md:text-5xl">Turn a small amount into a full day of care.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Online card and UPI payments are coming soon. For now, record your pledge here — our team
        confirms it within 24 hours and shares payment details along with a receipt.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="surface-card p-7">
          {done ? (
            <div className="py-10 text-center">
              <h2 className="text-2xl">Pledge received 🙏</h2>
              <p className="mt-3 text-muted-foreground">
                Thank you, {donorName}. We've logged your pledge of ₹{amount} for{" "}
                {causes.find((c) => c.value === cause)?.label.toLowerCase()}. Our team will email you
                shortly.
              </p>
              <Button className="mt-6" variant="outline" onClick={() => setDone(false)}>
                Make another pledge
              </Button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6">
              <div>
                <Label>Choose a cause</Label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {causes.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => setCause(c.value)}
                      className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                        cause === c.value
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:bg-secondary"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label>Amount (INR)</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => setAmount(String(a))}
                      className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
                        amount === String(a)
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border hover:bg-secondary"
                      }`}
                    >
                      ₹{a.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
                <Input
                  className="mt-3"
                  type="number"
                  min={1}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Other amount"
                />
              </div>

              <div>
                <Label>Frequency</Label>
                <div className="mt-2 flex gap-2">
                  {["one-time", "monthly"].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFrequency(f)}
                      className={`rounded-lg border px-4 py-2 text-sm capitalize transition-colors ${
                        frequency === f
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:bg-secondary"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    value={donorName}
                    maxLength={100}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    maxLength={255}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    value={phone}
                    maxLength={20}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea
                  id="message"
                  value={message}
                  maxLength={1000}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Dedicate this gift, or tell us how you'd like it used."
                />
              </div>

              <Button type="submit" size="lg" disabled={submitting} className="w-full">
                {submitting ? "Recording…" : "Record my pledge"}
              </Button>
              <p className="text-xs text-muted-foreground">
                We never share your details. Sign in to keep a record of all your donations.
              </p>
            </form>
          )}
        </div>

        <aside className="space-y-4">
          {[
            { t: "₹350", d: "Feeds one homeless adult for a week." },
            { t: "₹600", d: "Treats one injured street dog." },
            { t: "₹1,200", d: "Keeps a child in a learning circle for a month." },
            { t: "₹5,000", d: "Runs a full sterilisation and vaccination camp day." },
          ].map((i) => (
            <div key={i.t} className="surface-card p-5">
              <p className="font-display text-xl text-accent">{i.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
