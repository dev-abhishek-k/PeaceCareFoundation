import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "My account — Peace Care Foundation" },
      {
        name: "description",
        content: "View your recorded donations and partnership enquiries with Peace Care Foundation.",
      },
      { property: "og:title", content: "My account — Peace Care Foundation" },
      { property: "og:description", content: "Your giving history in one place." },
    ],
  }),
  component: Dashboard,
});

type Donation = {
  id: string;
  amount: number;
  currency: string;
  cause: string;
  frequency: string;
  status: string;
  created_at: string;
};

type Enquiry = {
  id: string;
  organisation: string | null;
  investment_range: string | null;
  focus_area: string | null;
  status: string;
  created_at: string;
};

function Dashboard() {
  const { user, loading, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [donations, setDonations] = useState<Donation[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth", replace: true });
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("donations")
      .select("id, amount, currency, cause, frequency, status, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => setDonations(data ?? []));
    supabase
      .from("investor_enquiries")
      .select("id, organisation, investment_range, focus_area, status, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => setEnquiries(data ?? []));
  }, [user]);

  if (loading || !user) {
    return <div className="mx-auto max-w-6xl px-5 py-24 text-muted-foreground">Loading…</div>;
  }

  const total = donations.reduce((sum, d) => sum + Number(d.amount), 0);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow">My account</p>
      <h1 className="mt-3 text-3xl md:text-4xl">Hello, {user.email}</h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="surface-card p-6">
          <p className="text-xs text-muted-foreground">Total pledged</p>
          <p className="mt-1 font-display text-2xl">₹{total.toLocaleString("en-IN")}</p>
        </div>
        <div className="surface-card p-6">
          <p className="text-xs text-muted-foreground">Donations recorded</p>
          <p className="mt-1 font-display text-2xl">{donations.length}</p>
        </div>
        <div className="surface-card p-6">
          <p className="text-xs text-muted-foreground">Partnership enquiries</p>
          <p className="mt-1 font-display text-2xl">{enquiries.length}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/donate">Make a donation</Link>
        </Button>
        {isAdmin && (
          <Button variant="outline" asChild>
            <Link to="/admin">Open admin review</Link>
          </Button>
        )}
      </div>

      <h2 className="mt-12 text-2xl">Your donations</h2>
      {donations.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">
          No donations yet. <Link to="/donate" className="underline">Start here</Link>.
        </p>
      ) : (
        <div className="surface-card mt-4 divide-y divide-border">
          {donations.map((d) => (
            <div key={d.id} className="flex flex-wrap items-center justify-between gap-3 p-5">
              <div>
                <p className="font-semibold">
                  ₹{Number(d.amount).toLocaleString("en-IN")}{" "}
                  <span className="font-normal text-muted-foreground">· {d.cause} · {d.frequency}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {new Date(d.created_at).toLocaleDateString("en-IN")}
                </p>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs capitalize">{d.status}</span>
            </div>
          ))}
        </div>
      )}

      {enquiries.length > 0 && (
        <>
          <h2 className="mt-12 text-2xl">Your partnership enquiries</h2>
          <div className="surface-card mt-4 divide-y divide-border">
            {enquiries.map((e) => (
              <div key={e.id} className="flex flex-wrap items-center justify-between gap-3 p-5">
                <div>
                  <p className="font-semibold">{e.organisation ?? "Individual"}</p>
                  <p className="text-xs text-muted-foreground">
                    {e.investment_range} · {e.focus_area} ·{" "}
                    {new Date(e.created_at).toLocaleDateString("en-IN")}
                  </p>
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs capitalize">{e.status}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
