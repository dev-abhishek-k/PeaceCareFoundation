import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { updateRecordStatus, type StatusTable } from "@/lib/admin-workflows";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin review — Peace Care Foundation" },
      {
        name: "description",
        content: "Internal review of donation pledges and investor enquiries.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Admin review — Peace Care Foundation" },
      { property: "og:description", content: "Internal dashboard for the foundation team." },
    ],
  }),
  component: Admin,
});

type Donation = {
  id: string;
  donor_name: string;
  email: string;
  phone: string | null;
  amount: number;
  cause: string;
  frequency: string;
  message: string | null;
  status: string;
  created_at: string;
};

type Enquiry = {
  id: string;
  name: string;
  organisation: string | null;
  email: string;
  phone: string | null;
  investment_range: string | null;
  focus_area: string | null;
  message: string | null;
  status: string;
  created_at: string;
};

const donationStatuses = ["pledged", "confirmed", "received", "cancelled"];
const enquiryStatuses = ["new", "contacted", "in-discussion", "closed"];

function Admin() {
  const { user, loading, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<"donations" | "enquiries">("donations");
  const [donations, setDonations] = useState<Donation[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth", replace: true });
  }, [user, loading, navigate]);

  const load = useCallback(async () => {
    const [d, e] = await Promise.all([
      supabase.from("donations").select("*").order("created_at", { ascending: false }),
      supabase.from("investor_enquiries").select("*").order("created_at", { ascending: false }),
    ]);
    setDonations((d.data as Donation[]) ?? []);
    setEnquiries((e.data as Enquiry[]) ?? []);
  }, []);

  useEffect(() => {
    if (isAdmin) void load();
  }, [isAdmin, load]);

  if (loading) {
    return <div className="mx-auto max-w-6xl px-5 py-24 text-muted-foreground">Loading…</div>;
  }

  if (!isAdmin) {
    return (
      <section className="mx-auto max-w-xl px-5 py-24 text-center">
        <h1 className="text-3xl">Admins only</h1>
        <p className="mt-3 text-muted-foreground">
          This area is restricted to Peace Care Foundation staff accounts.
        </p>
      </section>
    );
  }

  const updateStatus = async (table: StatusTable, id: string, status: string) => {
    const updated = await updateRecordStatus(
      async (targetTable, recordId, nextStatus) => {
        const { error } = await supabase
          .from(targetTable)
          .update({ status: nextStatus })
          .eq("id", recordId);
        return { error };
      },
      table,
      id,
      status,
    );
    if (!updated) {
      toast.error("Could not update status");
      return;
    }
    toast.success("Status updated");
    void load();
  };

  const totalPledged = donations.reduce((s, d) => s + Number(d.amount), 0);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow">Admin</p>
      <h1 className="mt-3 text-3xl md:text-4xl">Review desk</h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="surface-card p-6">
          <p className="text-xs text-muted-foreground">Total pledged</p>
          <p className="mt-1 font-display text-2xl">₹{totalPledged.toLocaleString("en-IN")}</p>
        </div>
        <div className="surface-card p-6">
          <p className="text-xs text-muted-foreground">Donations</p>
          <p className="mt-1 font-display text-2xl">{donations.length}</p>
        </div>
        <div className="surface-card p-6">
          <p className="text-xs text-muted-foreground">Investor enquiries</p>
          <p className="mt-1 font-display text-2xl">{enquiries.length}</p>
        </div>
      </div>

      <div className="mt-8 flex gap-2">
        {(["donations", "enquiries"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-lg border px-4 py-2 text-sm capitalize transition-colors ${
              tab === t
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:bg-secondary"
            }`}
          >
            {t}
          </button>
        ))}
        <Button variant="ghost" size="sm" onClick={() => void load()}>
          Refresh
        </Button>
      </div>

      <div className="surface-card mt-5 divide-y divide-border">
        {tab === "donations"
          ? donations.map((d) => (
              <div key={d.id} className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">
                      {d.donor_name} · ₹{Number(d.amount).toLocaleString("en-IN")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {d.email} {d.phone ? `· ${d.phone}` : ""} · {d.cause} · {d.frequency} ·{" "}
                      {new Date(d.created_at).toLocaleString("en-IN")}
                    </p>
                    {d.message && (
                      <p className="mt-2 text-sm text-muted-foreground">“{d.message}”</p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {donationStatuses.map((s) => (
                      <button
                        key={s}
                        onClick={() => void updateStatus("donations", d.id, s)}
                        className={`rounded-full border px-3 py-1 text-xs capitalize ${
                          d.status === s
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-border"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))
          : enquiries.map((e) => (
              <div key={e.id} className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">
                      {e.name} {e.organisation ? `· ${e.organisation}` : ""}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {e.email} {e.phone ? `· ${e.phone}` : ""} · {e.investment_range} ·{" "}
                      {e.focus_area} · {new Date(e.created_at).toLocaleString("en-IN")}
                    </p>
                    {e.message && (
                      <p className="mt-2 text-sm text-muted-foreground">“{e.message}”</p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {enquiryStatuses.map((s) => (
                      <button
                        key={s}
                        onClick={() => void updateStatus("investor_enquiries", e.id, s)}
                        className={`rounded-full border px-3 py-1 text-xs capitalize ${
                          e.status === s
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-border"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        {((tab === "donations" && donations.length === 0) ||
          (tab === "enquiries" && enquiries.length === 0)) && (
          <p className="p-6 text-sm text-muted-foreground">Nothing here yet.</p>
        )}
      </div>
    </section>
  );
}
