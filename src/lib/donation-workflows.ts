import { z } from "zod";
import type { TablesInsert } from "../integrations/supabase/types";

export const pledgeSchema = z.object({
  donor_name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  amount: z.coerce.number().positive("Enter an amount greater than 0").max(100000000),
  cause: z.string(),
  frequency: z.string(),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type PledgeInput = z.infer<typeof pledgeSchema>;
export type DonationInsertClient = {
  from(table: "donations"): {
    insert(values: TablesInsert<"donations">): PromiseLike<{ error: unknown | null }>;
  };
};

export async function recordPledge(
  client: DonationInsertClient,
  pledge: PledgeInput,
  userId: string | null,
): Promise<boolean> {
  try {
    const { error } = await client.from("donations").insert({
      user_id: userId,
      donor_name: pledge.donor_name,
      email: pledge.email,
      phone: pledge.phone || null,
      amount: pledge.amount,
      cause: pledge.cause,
      frequency: pledge.frequency,
      message: pledge.message || null,
    });
    return !error;
  } catch {
    return false;
  }
}
